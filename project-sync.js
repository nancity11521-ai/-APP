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
  const confirmSave = document.querySelector('#project-save-confirm');
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

  function updateSaveButton() {
    confirmSave.hidden = !editable;
    if (!editable) return;
    if (saving) {
      confirmSave.disabled = true;
      confirmSave.textContent = '保存中…';
    } else {
      confirmSave.disabled = !pending;
      confirmSave.textContent = '确认保存';
    }
  }

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
    updateSaveButton();
    status('正在保存到线上…');
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
      status(pending ? '仍有新改动，请再次点击「确认保存」' : '已保存到线上');
    } catch (error) {
      pending = true;
      if (error.status === 401) {
        token = null;
        sessionStorage.removeItem(sessionKey);
        editable = false;
        action.textContent = '登录编辑';
        status('登录已过期，请重新登录后保存');
      } else if (error.status === 409) {
        status('其他设备已保存新版本，本次更改未覆盖线上');
      } else {
        status(error.status ? error.message + '，请点击「确认保存」重试' : '连接失败，请点击「确认保存」重试');
      }
    } finally {
      saving = false;
      updateSaveButton();
    }
  }

  function markDirty(message = '有未保存改动，请点击「确认保存」') {
    pending = true;
    if (!saving) status(message);
    updateSaveButton();
  }

  const ready = (async () => {
    if (!token) return;
    action.disabled = true;
    action.textContent = '正在登录…';
    status('正在加载线上内容…');
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
      if (error.status === 401) {
        token = null;
        sessionStorage.removeItem(sessionKey);
      }
      action.textContent = '登录编辑';
      status(error.status === 401 ? '登录已过期' : '同步暂时不可用');
    } finally {
      action.disabled = false;
      updateSaveButton();
    }
  })();

  function openLoginModal() {
    form.reset();
    const feedback = login.querySelector('[role="status"]');
    feedback.textContent = '';
    delete feedback.dataset.error;
    login.showModal();
    requestAnimationFrame(() => form.elements.password.focus());
  }

  action.addEventListener('click', () => {
    if (editable) {
      if (saving) {
        status('正在保存，请稍候…');
        return;
      }
      if (pending && !window.confirm('当前有尚未保存到线上的改动，确定要放弃改动并退出编辑吗？')) {
        return;
      }
      pending = false;
      sessionStorage.removeItem(sessionKey);
      location.reload();
    } else {
      openLoginModal();
    }
  });
  confirmSave.addEventListener('click', save);
  login.querySelector('[data-close]').addEventListener('click', () => login.close());
  login.addEventListener('click', event => {
    if (event.target === login) login.close();
  });
  form.elements.password.addEventListener('input', () => {
    const feedback = login.querySelector('[role="status"]');
    feedback.textContent = '';
    delete feedback.dataset.error;
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const feedback = login.querySelector('[role="status"]');
    const submit = form.querySelector('[type="submit"]');
    const cancel = login.querySelector('[data-close]');
    delete feedback.dataset.error;
    feedback.textContent = '正在登录…';
    submit.disabled = true;
    cancel.disabled = true;
    try {
      const session = await request('/login', 'POST', { password: form.elements.password.value });
      token = session.token;
      sessionStorage.setItem(sessionKey, session.token);
      login.close();
      location.reload();
    } catch (error) {
      feedback.dataset.error = 'true';
      feedback.textContent = error.status ? error.message : '暂时无法登录，请稍后重试';
      form.elements.password.focus();
      form.elements.password.select();
    } finally {
      submit.disabled = false;
      cancel.disabled = false;
    }
  });

  const restrictedSelector = [
    '#btnToggleProjectEffects',
    '#btnToggleLightAdjust',
    '#btnDeleteCurrentProject',
    '#btnResetProjectDiagram',
    '#projectDiagramUploader',
    '#projectEffectsModal',
    '#lightAdjustPanel',
    '#newProjectModal'
  ].join(', ');
  function restrictVisitor(event) {
    if (editable || !(event.target instanceof Element)) return;
    const select = event.target.closest('#desktopProjectSelect');
    if (select) {
      if (!select.value.startsWith('__')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const current = sessionStorage.getItem(localProjectKey);
      const currentOption = current && Array.from(select.options).find(option => option.value === current);
      const previous = currentOption || Array.from(select.options).find(option => option.defaultSelected) || select.options[0];
      select.value = previous.value;
      status('登录后可修改项目或示意图');
      return;
    }
    const restricted = event.target.closest(restrictedSelector);
    if (!restricted) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    status('登录后可修改灯效模式、灯位、项目或示意图');
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
      if (editable && migrateLocal) markDirty('有本地缓存待同步，请点击「确认保存」');
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
        if (initialized) markDirty();
      }
    }
  };
})();
