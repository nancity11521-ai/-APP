const projectSync = (() => {
  const endpoint = 'https://huancai-pulse-sync.plumtitan1.chatgpt.site';
  const sessionKey = 'huancai_editor_session';
  const localProjectKey = 'ambient_light_current_project';
  const keys = [
    'ambient_light_projects_list', 'ambient_light_custom_diagrams',
    'ambient_light_project_configs', 'ambient_light_project_scenes',
    'ambient_light_project_enabled_effects'
  ];
  const login = document.querySelector('#project-login');
  const form = login.querySelector('form');
  const action = document.querySelector('#project-session-action');
  const retry = document.querySelector('#project-save-retry');
  const indicator = document.querySelector('#project-sync-status');
  const status = message => { indicator.textContent = message; };
  let token = sessionStorage.getItem(sessionKey);
  let revision = null;
  let data = {};
  let editable = false;
  let initialized = false;
  let migrateLocal = false;
  let pending = false;
  let saving = false;
  let timer;

  async function request(path, method = 'GET', body) {
    const headers = {};
    if (body) headers['Content-Type'] = 'application/json';
    if (token) headers.Authorization = 'Bearer ' + token;
    const response = await fetch(endpoint + path, {
      method, headers, body: body && JSON.stringify(body)
    });
    const result = await response.json();
    if (!response.ok) {
      const error = new Error(result.error || '同步暂时不可用');
      error.status = response.status;
      throw error;
    }
    return result;
  }

  async function save() {
    if (!editable || !pending || saving) return;
    saving = true;
    pending = false;
    retry.hidden = true;
    status('正在保存…');
    try {
      const submitted = { ...data };
      const saved = await request('/snapshot', 'PUT', { data: submitted, revision });
      revision = saved.revision;
      const verified = await request('/snapshot');
      if (verified.revision !== revision) {
        const error = new Error('线上版本已更新');
        error.status = 409;
        throw error;
      }
      if (keys.some(key => verified.data[key] !== submitted[key])) {
        throw new Error('线上回读内容不一致');
      }
      status(pending ? '还有改动待保存…' : '已保存到线上');
      if (pending) timer = setTimeout(save, 0);
    } catch (error) {
      pending = true;
      if (error.status === 409) {
        status('其他设备已保存新版本，本次更改未覆盖线上');
      } else {
        status(error.status ? error.message + '，当前改动未同步' : '连接失败，当前改动未同步');
        retry.hidden = false;
      }
    } finally {
      saving = false;
    }
  }

  function queueSave() {
    pending = true;
    clearTimeout(timer);
    status('待保存…');
    timer = setTimeout(save, 700);
  }

  const ready = (async () => {
    if (!token) return;
    try {
      const snapshot = await request('/snapshot');
      revision = snapshot.revision;
      data = snapshot.data;
      if (Object.keys(data).length === 0) {
        for (const key of keys) {
          const previous = localStorage.getItem(key);
          if (previous !== null) {
            data[key] = previous;
            migrateLocal = true;
          }
        }
      }
      editable = true;
      action.textContent = '退出编辑';
      status(revision ? '已加载线上内容' : '已登录');
    } catch (error) {
      if (error.status === 401) sessionStorage.removeItem(sessionKey);
      status(error.status === 401 ? '登录已过期' : '同步暂时不可用');
    }
  })();

  action.addEventListener('click', () => {
    if (editable) {
      if (pending || saving) {
        status('当前还有改动未保存');
        if (!saving) save();
        return;
      }
      sessionStorage.removeItem(sessionKey);
      location.reload();
    } else {
      login.querySelector('[role="status"]').textContent = '';
      login.showModal();
    }
  });
  retry.addEventListener('click', save);
  login.querySelector('[data-close]').addEventListener('click', () => login.close());
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const feedback = login.querySelector('[role="status"]');
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    try {
      const session = await request('/login', 'POST', { password: form.elements.password.value });
      sessionStorage.setItem(sessionKey, session.token);
      location.reload();
    } catch (error) {
      feedback.textContent = error.status ? error.message : '暂时无法登录，请稍后重试';
    } finally {
      submit.disabled = false;
    }
  });

  const permittedClick = /^(navigateTo|goBackToHome|handleSceneRowClick|handleActiveTimeRowClick|toggleLanguageSheet|selectAppLanguage|toggleAppsSheet|toggleDurationSheet|openEffectiveAppsSheet|openChargingDurationSheet)\(/;
  function restrictVisitor(event) {
    if (editable || !(event.target instanceof Element)) return;
    const control = event.target.closest('.phone-frame button, .phone-frame input, .phone-frame [onclick], .phone-frame label, .desktop-floating-tools button, .desktop-floating-tools select');
    if (!control || control.matches('#desktopLangSelect, #langSelect, .widget-back-link')) return;
    if (control.matches('#desktopProjectSelect') && !control.value.startsWith('__')) return;
    if (event.type === 'click' && permittedClick.test(control.getAttribute('onclick') || '')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (control.matches('#desktopProjectSelect')) {
      const previous = Array.from(control.options).find(option => option.defaultSelected) || control.options[0];
      control.value = previous.value;
    }
    status('只读预览，登录后可编辑');
  }

  for (const event of ['click', 'input', 'change']) document.addEventListener(event, restrictVisitor, true);
  window.addEventListener('beforeunload', event => {
    if (!pending && !saving) return;
    event.preventDefault();
    event.returnValue = '';
  });

  return {
    ready,
    saveNow: save,
    start() {
      initialized = true;
      if (editable && migrateLocal) queueSave();
      if (!editable) {
        for (const option of document.querySelectorAll('#desktopProjectSelect option')) {
          if (option.value.startsWith('__')) option.disabled = true;
        }
      }
    },
    getItem(key) {
      if (key === localProjectKey) return sessionStorage.getItem(key) || (editable ? localStorage.getItem(key) : null);
      return data[key] ?? null;
    },
    setItem(key, value) {
      if (key === localProjectKey) {
        sessionStorage.setItem(key, value);
      } else if (editable && keys.includes(key) && data[key] !== value) {
        data[key] = value;
        if (initialized) queueSave();
      }
    }
  };
})();
