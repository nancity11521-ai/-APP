/**
 * 手机氛围灯效果设置 - 多场景与多语言交互系统控制器 (DYNAMIC SOUND)
 */

// 1. 七国语言国际化字典 (i18n Dictionary)
const I18N_LOCALES = {
  'zh-CN': {
    page_home: '幻彩脉动',
    page_call: '来电',
    page_notification: '通知',
    page_charging: '充电',
    page_music: '音乐',
    page_power: '开关机',
    magic_pulse_switch: '幻彩脉动',
    magic_pulse_hint: '在低电量、省电模式、勿扰模式、睡眠模式下幻彩脉动功能不可用',
    active_time: '启用时段',
    active_time_all_day: '全天启用',
    brightness: '亮度',
    scene_party: '派对',
    scene_call: '来电',
    scene_notification: '通知',
    scene_charging: '充电',
    scene_music: '音乐',
    scene_power: '开关机',
    status_enabled: '已开启',
    status_disabled: '已关闭',
    effective_apps: '生效的应用',
    effect_title: '灯效',
    color_select: '颜色选择',
    effect_breathing: '呼吸',
    effect_pulsing: '脉动',
    effect_streamer: '流光',
    effect_waterflow: '流水',
    effect_color_rhythm: '彩色律动',
    effect_four_color: '四色律动',
    effect_rhythm: '律动',
    color_grass_green: '草绿',
    color_peach_orange: '浅橙',
    color_fog_blue: '灰蓝',
    color_cyan_blue: '青蓝',
    color_dark_green: '深绿',
    color_custom: '自定义',
    charging_duration: '充电时间显示时长',
    charging_duration_15s: '15秒',
    charging_duration_30s: '30秒',
    charging_duration_1m: '1分钟',
    charging_duration_always: '常亮',
    select_all: '全选',
    apps_notification_title: '生效的应用 (通知)',
    apps_notification_subtitle: '收到通知时氛围灯将闪烁提示',
    apps_music_title: '生效的应用 (音乐)',
    apps_music_subtitle: '播放音乐时氛围灯将跟随节奏律动',
    battery_adaptive: '根据电池电量变化',
    in_call_breathing: '通话中呼吸',
    page_active_time: '启用时段',
    active_time_scheduled: '定时启用',
    time_start: '开始',
    time_end: '结束',
    project_label: '项目',
    project_effects_btn: '模式灯效',
    project_effects_modal_title: '模式灯效选择与确认',
    project_effects_modal_subtip: '💡 勾选当前项目在此模式下支持的灯效，仅选中的灯效才会出现在 APP 设置页中供用户选择。',
    effects_all_enabled: '全部启用',
    effects_selected_count: '已选 {n} 项',
    at_least_one_effect: '每个模式请至少保留一种灯效',
    adjust_light_btn: '调整灯位',
    adjust_panel_title: '灯位与尺寸配置',
    light_pos_x: '水平位置 X:',
    light_pos_y: '垂直位置 Y:',
    light_size: '灯圈尺寸:',
    light_ring_width: '灯的宽度:',
    schematic_scale: '示意图缩放:',
    auto_detect_btn: '智能识别',
    reset_light_btn: '恢复默认',
    save_done: '✓ 完成',
    click_mockup_tip: '💡 提示：上传新示意图已自动识别；也可直接点击下方示意图精确定位！',
  },
  'en-US': {
    page_home: 'Dynamic Pulse',
    page_call: 'Incoming Call',
    page_notification: 'Notification',
    page_charging: 'Charging',
    page_music: 'Music',
    page_power: 'Power On/Off',
    magic_pulse_switch: 'Dynamic Pulse',
    magic_pulse_hint: 'Dynamic Pulse is unavailable in low battery, power saving, DND, or sleep mode',
    active_time: 'Active Hours',
    active_time_all_day: 'All Day',
    brightness: 'Brightness',
    scene_party: 'Party',
    scene_call: 'Incoming Call',
    scene_notification: 'Notification',
    scene_charging: 'Charging',
    scene_music: 'Music',
    scene_power: 'Power On/Off',
    status_enabled: 'Enabled',
    status_disabled: 'Disabled',
    effective_apps: 'Applied Apps',
    effect_title: 'Light Effect',
    color_select: 'Color Selection',
    effect_breathing: 'Breathing',
    effect_pulsing: 'Pulsing',
    effect_streamer: 'Streamer',
    effect_waterflow: 'Water Flow',
    effect_color_rhythm: 'Color Rhythm',
    effect_four_color: '4-Color Rhythm',
    effect_rhythm: 'Rhythm',
    color_grass_green: 'Grass Green',
    color_peach_orange: 'Peach Orange',
    color_fog_blue: 'Haze Blue',
    color_cyan_blue: 'Cyan Blue',
    color_dark_green: 'Deep Green',
    color_custom: 'Custom',
    charging_duration: 'Charging Display Duration',
    charging_duration_15s: '15s',
    charging_duration_30s: '30s',
    charging_duration_1m: '1m',
    charging_duration_always: 'Always on',
    select_all: 'Select All',
    apps_notification_title: 'Active Apps (Notifications)',
    apps_notification_subtitle: 'Ambient light flashes when notifications arrive',
    apps_music_title: 'Active Apps (Music)',
    apps_music_subtitle: 'Ambient light pulses with music playback',
    battery_adaptive: 'Adaptive to Battery Level',
    in_call_breathing: 'Breathe During Call',
    page_active_time: 'Active Schedule',
    active_time_scheduled: 'Scheduled',
    time_start: 'Start',
    time_end: 'End',
    project_label: 'Project',
    project_effects_btn: 'Mode Effects',
    project_effects_modal_title: 'Mode Effects Configuration',
    project_effects_modal_subtip: '💡 Select effects supported by this project. Only checked effects will appear in the APP settings page.',
    effects_all_enabled: 'All Enabled',
    effects_selected_count: '{n} Selected',
    at_least_one_effect: 'Please keep at least one effect for each mode',
    adjust_light_btn: 'Adjust Light',
    adjust_panel_title: 'Light Ring Setup',
    light_pos_x: 'Horizontal X:',
    light_pos_y: 'Vertical Y:',
    light_size: 'Ring Size:',
    light_ring_width: 'Light Width:',
    schematic_scale: 'Scale:',
    auto_detect_btn: 'Auto Detect',
    reset_light_btn: 'Reset',
    save_done: '✓ Done',
    click_mockup_tip: '💡 Tip: Auto-detected on upload; or click schematic to place ring directly!',
  },
  'de-DE': {
    page_home: 'Farbpulsieren',
    page_call: 'Eingehender Anruf',
    page_notification: 'Benachrichtigung',
    page_charging: 'Laden',
    page_music: 'Musik',
    page_power: 'Ein-/Ausschalten',
    magic_pulse_switch: 'Farbpulsieren',
    magic_pulse_hint: 'Farbpulsieren ist im Energiespar-, Nicht-Stören- oder Schlafmodus nicht verfügbar',
    active_time: 'Aktive Zeit',
    active_time_all_day: 'Ganztägig',
    brightness: 'Helligkeit',
    scene_party: 'Party',
    scene_call: 'Eingehender Anruf',
    scene_notification: 'Benachrichtigung',
    scene_charging: 'Laden',
    scene_music: 'Musik',
    scene_power: 'Ein-/Ausschalten',
    status_enabled: 'Aktiviert',
    status_disabled: 'Deaktiviert',
    effective_apps: 'Angewendete Apps',
    effect_title: 'Lichteffekt',
    color_select: 'Farbauswahl',
    effect_breathing: 'Atmung',
    effect_pulsing: 'Pulsieren',
    effect_streamer: 'Lichtstrom',
    effect_waterflow: 'Fließend',
    effect_color_rhythm: 'Farbrhythmus',
    effect_four_color: '4-Farben-Rhythmus',
    effect_rhythm: 'Rhythmus',
    color_grass_green: 'Grasgrün',
    color_peach_orange: 'Pfirsich-Orange',
    color_fog_blue: 'Dunstblau',
    color_cyan_blue: 'Zyanblau',
    color_dark_green: 'Dunkelgrün',
    color_custom: 'Benutzerdefiniert',
    charging_duration: 'Ladeanzeigedauer',
    charging_duration_15s: '15 Sek.',
    charging_duration_30s: '30 Sek.',
    charging_duration_1m: '1 Min.',
    charging_duration_always: 'Immer an',
    select_all: 'Alle auswählen',
    apps_notification_title: 'Aktive Apps (Benachrichtigungen)',
    apps_notification_subtitle: 'Umgebungslicht blinkt bei Benachrichtigungen',
    apps_music_title: 'Aktive Apps (Musik)',
    apps_music_subtitle: 'Umgebungslicht pulsiert zur Musik',
    battery_adaptive: 'Akkustand-abhängig',
    in_call_breathing: 'Atmen während Anruf',
    page_active_time: 'Aktivierungszeitraum',
    active_time_scheduled: 'Zeitgesteuert',
    time_start: 'Start',
    time_end: 'Ende',
    project_label: 'Projekt',
    project_effects_btn: 'Modus-Effekte',
    project_effects_modal_title: 'Projekt-Lichteffekte bestätigen',
    project_effects_modal_subtip: '💡 Lichteffekte pro Projekt unabhängig auswählen und bestätigen.',
    adjust_light_btn: 'Licht anpassen',
    adjust_panel_title: 'Lichtring & Größe',
    light_pos_x: 'Horizontale X:',
    light_pos_y: 'Vertikale Y:',
    light_size: 'Ringgröße:',
    light_ring_width: 'Lichtbreite:',
    schematic_scale: 'Skalierung:',
    auto_detect_btn: 'Auto-Erkennung',
    reset_light_btn: 'Zurücksetzen',
    save_done: '✓ Fertig',
    click_mockup_tip: '💡 Tipp: Automatisch erkannt; oder Schema anklicken!',
  },
  'es-ES': {
    page_home: 'Pulso dinámico',
    page_call: 'Llamada entrante',
    page_notification: 'Notificación',
    page_charging: 'Carga',
    page_music: 'Música',
    page_power: 'Encendido/Apagado',
    magic_pulse_switch: 'Pulso dinámico',
    magic_pulse_hint: 'El pulso dinámico no está disponible en batería baja, ahorro de energía, no molestar o modo sueño',
    active_time: 'Horario activo',
    active_time_all_day: 'Todo el día',
    brightness: 'Brillo',
    scene_party: 'Fiesta',
    scene_call: 'Llamada entrante',
    scene_notification: 'Notificación',
    scene_charging: 'Carga',
    scene_music: 'Música',
    scene_power: 'Encendido/Apagado',
    status_enabled: 'Activado',
    status_disabled: 'Desactivado',
    effective_apps: 'Aplicaciones activas',
    effect_title: 'Efecto de luz',
    color_select: 'Selección de color',
    effect_breathing: 'Respiración',
    effect_pulsing: 'Pulsación',
    effect_streamer: 'Estela',
    effect_waterflow: 'Flujo continuo',
    effect_color_rhythm: 'Ritmo multicolor',
    effect_four_color: 'Ritmo 4 colores',
    effect_rhythm: 'Ritmo',
    color_grass_green: 'Verde hierba',
    color_peach_orange: 'Naranja melocotón',
    color_fog_blue: 'Azul bruma',
    color_cyan_blue: 'Azul cian',
    color_dark_green: 'Verde oscuro',
    color_custom: 'Personalizado',
    charging_duration: 'Duración de pantalla de carga',
    charging_duration_15s: '15 s',
    charging_duration_30s: '30 s',
    charging_duration_1m: '1 min',
    charging_duration_always: 'Siempre encendido',
    select_all: 'Seleccionar todo',
    apps_notification_title: 'Apps activas (Notificaciones)',
    apps_notification_subtitle: 'La luz ambiental parpadea al recibir notificaciones',
    apps_music_title: 'Apps activas (Música)',
    apps_music_subtitle: 'La luz ambiental pulsa con el ritmo de la música',
    battery_adaptive: 'Cambiar según nivel de batería',
    in_call_breathing: 'Respiración en llamada',
    page_active_time: 'Horario de activación',
    active_time_scheduled: 'Programado',
    time_start: 'Inicio',
    time_end: 'Fin',
    project_label: 'Proyecto',
    project_effects_btn: 'Efectos de modo',
    project_effects_modal_title: 'Efectos de luz del proyecto',
    project_effects_modal_subtip: '💡 Configura y confirma los efectos para cada modo de forma independiente.',
    adjust_light_btn: 'Ajustar luz',
    adjust_panel_title: 'Configuración de luz',
    light_pos_x: 'Posición X:',
    light_pos_y: 'Posición Y:',
    light_size: 'Tamaño del aro:',
    light_ring_width: 'Ancho de la luz:',
    schematic_scale: 'Escala:',
    auto_detect_btn: 'Detección auto',
    reset_light_btn: 'Restablecer',
    save_done: '✓ Listo',
    click_mockup_tip: '💡 Consejo: Detectado al subir; ¡o haz clic en el esquema!',
  },
  'ru-RU': {
    page_home: 'Динамический пульс',
    page_call: 'Входящий вызов',
    page_notification: 'Уведомление',
    page_charging: 'Зарядка',
    page_music: 'Музыка',
    page_power: 'Вкл/Выкл питания',
    magic_pulse_switch: 'Динамический пульс',
    magic_pulse_hint: 'Динамический пульс недоступен при низком заряде, в режиме энергосбережения, «Не беспокоить» или «Сон»',
    active_time: 'Время работы',
    active_time_all_day: 'Весь день',
    brightness: 'Яркость',
    scene_party: 'Вечеринка',
    scene_call: 'Входящий вызов',
    scene_notification: 'Уведомление',
    scene_charging: 'Зарядка',
    scene_music: 'Музыка',
    scene_power: 'Вкл/Выкл питания',
    status_enabled: 'Включено',
    status_disabled: 'Отключено',
    effective_apps: 'Применяемые приложения',
    effect_title: 'Световой эффект',
    color_select: 'Выбор цвета',
    effect_breathing: 'Дыхание',
    effect_pulsing: 'Пульсация',
    effect_streamer: 'Световой поток',
    effect_waterflow: 'Течение',
    effect_color_rhythm: 'Цветной ритм',
    effect_four_color: '4-цветный ритм',
    effect_rhythm: 'Ритм',
    color_grass_green: 'Травяной зеленый',
    color_peach_orange: 'Персиковый',
    color_fog_blue: 'Туманно-синий',
    color_cyan_blue: 'Циановый',
    color_dark_green: 'Темно-зеленый',
    color_custom: 'Пользовательский',
    charging_duration: 'Время отображения зарядки',
    charging_duration_15s: '15 сек',
    charging_duration_30s: '30 сек',
    charging_duration_1m: '1 мин',
    charging_duration_always: 'Всегда включено',
    select_all: 'Выбрать все',
    apps_notification_title: 'Активные приложения (Уведомления)',
    apps_notification_subtitle: 'Подсветка мигает при получении уведомлений',
    apps_music_title: 'Активные приложения (Музыка)',
    apps_music_subtitle: 'Подсветка пульсирует в такт музыке',
    battery_adaptive: 'Изменение по уровню заряда',
    in_call_breathing: 'Дыхание во время вызова',
    page_active_time: 'Период активности',
    active_time_scheduled: 'По расписанию',
    time_start: 'Начало',
    time_end: 'Конец',
    project_label: 'Проект',
    project_effects_btn: 'Эффекты режимов',
    project_effects_modal_title: 'Подтверждение эффектов режимов',
    project_effects_modal_subtip: '💡 Выбирайте и подтверждайте эффекты свечения индивидуально для каждого проекта.',
    adjust_light_btn: 'Настройка кольца',
    adjust_panel_title: 'Позиция и размер подсветки',
    light_pos_x: 'Позиция X:',
    light_pos_y: 'Позиция Y:',
    light_size: 'Размер кольца:',
    light_ring_width: 'Ширина кольца:',
    schematic_scale: 'Масштаб:',
    auto_detect_btn: 'Автоопределение',
    reset_light_btn: 'Сбросить',
    save_done: '✓ Готово',
    click_mockup_tip: '💡 Совет: Нажмите на схему для точного позиционирования!',
  },
  'fr-FR': {
    page_home: 'Pulsation dynamique',
    page_call: 'Appel entrant',
    page_notification: 'Notification',
    page_charging: 'Charge',
    page_music: 'Musique',
    page_power: 'Marche/Arrêt',
    magic_pulse_switch: 'Pulsation dynamique',
    magic_pulse_hint: 'Pulsation dynamique indisponible en batterie faible, économie d’énergie, Ne pas déranger ou veille',
    active_time: 'Plage horaire',
    active_time_all_day: 'Toute la journée',
    brightness: 'Luminosité',
    scene_party: 'Fête',
    scene_call: 'Appel entrant',
    scene_notification: 'Notification',
    scene_charging: 'Charge',
    scene_music: 'Musique',
    scene_power: 'Marche/Arrêt',
    status_enabled: 'Activé',
    status_disabled: 'Désactivé',
    effective_apps: 'Applications actives',
    effect_title: 'Effet lumineux',
    color_select: 'Sélection de couleur',
    effect_breathing: 'Respiration',
    effect_pulsing: 'Pulsation',
    effect_streamer: 'Filet de lumière',
    effect_waterflow: 'Ruissellement',
    effect_color_rhythm: 'Rythme couleur',
    effect_four_color: 'Rythme 4 couleurs',
    effect_rhythm: 'Rythme',
    color_grass_green: 'Vert herbe',
    color_peach_orange: 'Orange pêche',
    color_fog_blue: 'Bleu brume',
    color_cyan_blue: 'Bleu cyan',
    color_dark_green: 'Vert foncé',
    color_custom: 'Personnalisé',
    charging_duration: 'Durée d’affichage de charge',
    charging_duration_15s: '15 s',
    charging_duration_30s: '30 s',
    charging_duration_1m: '1 min',
    charging_duration_always: 'Toujours allumé',
    select_all: 'Tout sélectionner',
    apps_notification_title: 'Applications actives (Notifications)',
    apps_notification_subtitle: 'La lumière clignote lors de la réception de notifications',
    apps_music_title: 'Applications actives (Musique)',
    apps_music_subtitle: 'La lumière pulse au rythme de la musique',
    battery_adaptive: 'Adapter selon niveau de batterie',
    in_call_breathing: 'Respiration pendant l’appel',
    page_active_time: "Période d'activation",
    active_time_scheduled: 'Planifié',
    time_start: 'Début',
    time_end: 'Fin',
    project_label: 'Projet',
    project_effects_btn: 'Effets de mode',
    project_effects_modal_title: 'Effets de mode du projet',
    project_effects_modal_subtip: '💡 Choisissez et confirmez les effets de lumière pour chaque projet séparément.',
    adjust_light_btn: 'Ajuster lumière',
    adjust_panel_title: 'Configuration anneau lumineux',
    light_pos_x: 'Position X :',
    light_pos_y: 'Position Y :',
    light_size: 'Taille anneau :',
    light_ring_width: 'Largeur lumière :',
    schematic_scale: 'Échelle :',
    auto_detect_btn: 'Détection auto',
    reset_light_btn: 'Réinitialiser',
    save_done: '✓ Valider',
    click_mockup_tip: '💡 Astuce : Cliquez sur le schéma pour positionner l’anneau !',
  },
  'ja-JP': {
    page_home: 'ダイナミックパルス',
    page_call: '着信',
    page_notification: '通知',
    page_charging: '充電',
    page_music: '音楽',
    page_power: '電源オン/オフ',
    magic_pulse_switch: 'ダイナミックパルス',
    magic_pulse_hint: '低バッテリー、省電力、おやすみ、サイレントモード時は利用できません',
    active_time: '有効時間帯',
    active_time_all_day: '終日',
    brightness: '明るさ',
    scene_party: 'パーティー',
    scene_call: '着信',
    scene_notification: '通知',
    scene_charging: '充電',
    scene_music: '音楽',
    scene_power: '電源オン/オフ',
    status_enabled: 'オン',
    status_disabled: 'オフ',
    effective_apps: '適用アプリ',
    effect_title: '点灯エフェクト',
    color_select: 'カラー選択',
    effect_breathing: '呼吸',
    effect_pulsing: 'パルス',
    effect_streamer: 'ストリーマー',
    effect_waterflow: '流水',
    effect_color_rhythm: 'カラーリズム',
    effect_four_color: '4色リズム',
    effect_rhythm: 'リズム',
    color_grass_green: 'グラスグリーン',
    color_peach_orange: 'ピーチオレンジ',
    color_fog_blue: 'フォグブルー',
    color_cyan_blue: 'シアンブルー',
    color_dark_green: 'ディープグリーン',
    color_custom: 'カスタム',
    charging_duration: '充電表示時間',
    charging_duration_15s: '15秒',
    charging_duration_30s: '30秒',
    charging_duration_1m: '1分',
    charging_duration_always: '常時点灯',
    select_all: 'すべて選択',
    apps_notification_title: '有効なアプリ (通知)',
    apps_notification_subtitle: '通知受信時にアンビエントライトが点滅します',
    apps_music_title: '有効なアプリ (音楽)',
    apps_music_subtitle: '音楽再生時にリズムに合わせてライトが変化します',
    battery_adaptive: 'バッテリー残量に連動',
    in_call_breathing: '通話中呼吸',
    page_active_time: '有効時間帯',
    active_time_scheduled: 'スケジュール有効',
    time_start: '開始',
    time_end: '終了',
    project_label: 'プロジェクト',
    project_effects_btn: 'モード効果',
    project_effects_modal_title: 'プロジェクト別効果確認',
    project_effects_modal_subtip: '💡 プロジェクトごとに各モードの発光効果を選択・確定します。',
    adjust_light_btn: 'ライト位置調整',
    adjust_panel_title: 'ライト位置・サイズ設定',
    light_pos_x: '水平位置 X:',
    light_pos_y: '垂直位置 Y:',
    light_size: 'ライトサイズ:',
    light_ring_width: 'ライトの幅:',
    schematic_scale: '縮尺比率:',
    auto_detect_btn: '自動検出',
    reset_light_btn: '初期化',
    save_done: '✓ 完了',
    click_mockup_tip: '💡 ヒント: 図をタップして位置を素早く合わせられます！',
  }
};

// 默认机型各模式灯效方案 (各项目独立选定、确认与持久化)
const DEFAULT_PROJECT_SCENES = {
  'GQ5023': {
    home: {
      enabled: true,
      partyEnabled: true,
      effect: 'color_rhythm',
      color: '#00a838'
    },
    call: {
      enabled: true,
      effect: 'breathing',
      color: '#00e600',
      colorKey: 'color_grass_green',
      inCallBreathe: true,
      inCallColor: '#00e600',
      inCallColorKey: 'color_grass_green'
    },
    notification: {
      enabled: true,
      effect: 'breathing',
      color: '#00e600',
      colorKey: 'color_grass_green'
    },
    charging: {
      enabled: true,
      effect: 'waterflow',
      color: '#00e600',
      colorKey: 'color_grass_green',
      duration: '15s',
      batteryAdaptive: true
    },
    music: {
      enabled: true,
      effect: 'color_rhythm',
      color: '#00e600',
      colorKey: 'color_grass_green',
      fourColorPalette: 3
    },
    power: {
      enabled: true,
      effect: 'pulsing',
      color: '#00a838'
    }
  },
  '3137': {
    home: {
      enabled: true,
      partyEnabled: true,
      effect: 'color_rhythm',
      color: '#00a838'
    },
    call: {
      enabled: true,
      effect: 'pulsing',
      color: '#00e600',
      colorKey: 'color_grass_green',
      inCallBreathe: true,
      inCallColor: '#00e600',
      inCallColorKey: 'color_grass_green'
    },
    notification: {
      enabled: true,
      effect: 'breathing',
      color: '#00e600',
      colorKey: 'color_grass_green'
    },
    charging: {
      enabled: true,
      effect: 'streamer',
      color: '#00e600',
      colorKey: 'color_grass_green',
      duration: '15s',
      batteryAdaptive: true
    },
    music: {
      enabled: true,
      effect: 'color_rhythm',
      color: '#00e600',
      colorKey: 'color_grass_green',
      fourColorPalette: 3
    },
    power: {
      enabled: true,
      effect: 'pulsing',
      color: '#00a838'
    }
  }
};

// 默认机型灯位与尺寸配置表 (支持多项目独立配置、自动识别与持久化)
const DEFAULT_PROJECT_LIGHT_CONFIGS = {
  'GQ5023': {
    left: '67.19%',
    top: '45.23%',
    width: '20.63%',
    scale: 1.0,
    ringWidth: 28
  },
  '3137': {
    left: '47.87%',
    top: '43.45%',
    width: '6.71%',
    scale: 1.0,
    ringWidth: 24
  }
};

// 2. 全局应用与场景独立状态
const state = {
  lang: 'zh-CN',
  currentPage: 'home',
  currentProject: 'GQ5023',
  projects: ['GQ5023', '3137'],
  projectLightConfigs: {},
  projectScenes: {},
  projectEnabledEffects: {},
  isCalibratingLight: false,
  customDiagrams: {},
  globalBrightness: 80,
  activeStyle: 'blue',
  pulseOpt: 'opt_d',
  scenes: JSON.parse(JSON.stringify(DEFAULT_PROJECT_SCENES['GQ5023'])),
  schedule: {
    mode: 'scheduled',
    startTime: '14:26',
    endTime: '23:00'
  },
  effectiveApps: {
    notification: { all: true, items: {} },
    music: { all: true, items: {} }
  }
};

const NOTIFICATION_APPS = [
  { id: 'wechat', name: '微信', badge: '微', color: '#07c160' },
  { id: 'qq', name: 'QQ', badge: '企', color: '#12b7f5' },
  { id: 'sms', name: '信息', badge: '信', color: '#34c759' },
  { id: 'phone', name: '电话', badge: '话', color: '#007aff' },
  { id: 'dingtalk', name: '钉钉', badge: '钉', color: '#0089ff' },
  { id: 'feishu', name: '飞书', badge: '飞', color: '#3370ff' },
  { id: 'mail', name: '邮件', badge: '邮', color: '#5856d6' }
];

const MUSIC_APPS = [
  { id: 'soda_music', name: '汽水音乐', badge: '汽', color: '#00f5e6' },
  { id: 'qq_music', name: 'QQ音乐', badge: '音', color: '#31c27c' },
  { id: 'netease_music', name: '网易云音乐', badge: '云', color: '#e60026' },
  { id: 'kugou_music', name: '酷狗音乐', badge: '狗', color: '#00a9ff' },
  { id: 'kuwo_music', name: '酷我音乐', badge: '我', color: '#ff7200' },
  { id: 'apple_music', name: 'Apple Music', badge: '♫', color: '#fc3c44' },
  { id: 'spotify', name: 'Spotify', badge: '◉', color: '#1db954' }
];

// 3. 初始化
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('lang') && I18N_LOCALES[params.get('lang')]) {
    state.lang = params.get('lang');
    const select = document.getElementById('langSelect');
    if (select) select.value = state.lang;
    const desktopSelect = document.getElementById('desktopLangSelect');
    if (desktopSelect) desktopSelect.value = state.lang;
  }

  if (params.has('page') && state.scenes[params.get('page')]) {
    state.currentPage = params.get('page');
  }

  if (params.has('brightness')) {
    const b = parseInt(params.get('brightness'), 10);
    if (!isNaN(b) && b >= 20 && b <= 100) {
      state.globalBrightness = b;
    }
  }

  if (params.has('master')) {
    const m = params.get('master').toLowerCase();
    if (m === '0' || m === 'false' || m === 'off') {
      state.scenes.home.enabled = false;
      const sw = document.getElementById('switch_master');
      if (sw) sw.checked = false;
    }
  }

  if (params.has('adaptive')) {
    const ad = params.get('adaptive').toLowerCase();
    state.scenes.charging.batteryAdaptive = (ad !== '0' && ad !== 'false' && ad !== 'off');
    const adSw = document.getElementById('switch_batteryAdaptive');
    if (adSw) adSw.checked = state.scenes.charging.batteryAdaptive;
  }

  // 初始化项目筛选与各项目专属模式灯效管理系统
  initProjectSystem();

  if (params.has('effect')) {
    const ef = params.get('effect');
    if (state.scenes[state.currentPage]) {
      state.scenes[state.currentPage].effect = ef;
    }
  }

  // 初始化各场景的动效和颜色
  initAllScenes();

  // 设置初始页面导航与语言
  navigateTo(state.currentPage);
  if (state.scenes[state.currentPage] && state.scenes[state.currentPage].effect) {
    selectSceneEffect(state.currentPage, state.scenes[state.currentPage].effect);
  }
  updateLanguageDisplay();
  startRealtimeClock();
  setGlobalBrightness(state.globalBrightness);
  toggleMasterPulse(state.scenes.home.enabled);
  refreshAllScenesUI();

  // 绑定所有胶囊滚动容器的双向羽化渐隐监听
  initAllScrollersOverflow();
});

/**
 * 初始化所有场景的初始状态、动效与拾色
 */
function initAllScenes() {
  Object.keys(state.scenes).forEach(sceneId => {
    const scData = state.scenes[sceneId];
    if (scData.effect) {
      applySceneEffectToMockup(sceneId, scData.effect);
    }
    if (scData.color) {
      applyHaloColor(scData.color);
    }
  });
  toggleBatteryAdaptive(state.scenes.charging.batteryAdaptive);
  updateMusicColorModules(state.scenes.music.effect);
}

/**
 * 页面平滑路由切换
 */
function navigateTo(pageId) {
  if (!state.scenes[pageId] && pageId !== 'home' && pageId !== 'active_time') return;
  state.currentPage = pageId;

  // 1. 切换视图显隐
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });
  const targetView = document.getElementById(`view_${pageId}`);
  if (targetView) {
    targetView.classList.add('active');
    targetView.scrollTop = 0;
  }

  // 2. 控制顶部导航栏显隐（主页隐藏导航栏直入硬件模块，二级页面显示返回箭头与标题）
  const navBar = document.getElementById('mainNavBar');
  if (navBar) {
    navBar.style.display = pageId === 'home' ? 'none' : 'flex';
  }
  const btnBack = document.getElementById('btnNavBack');
  if (btnBack) {
    btnBack.style.display = pageId === 'home' ? 'none' : 'flex';
  }

  // 3. 动态更新顶部标题
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const titleElem = document.getElementById('navTitle');
  if (titleElem) {
    titleElem.textContent = dict[`page_${pageId}`] || '幻彩脉动';
  }

  // 4. 同步侧边栏控制台激活按钮
  document.querySelectorAll('.page-picker-toggles .mode-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const curNavBtn = document.getElementById(`btnNav_${pageId}`);
  if (curNavBtn) curNavBtn.classList.add('active');

  // 5. 更新状态栏胶囊与当前场景的发光环颜色动效
  if (state.scenes[pageId]) {
    const curColor = (pageId === 'charging' && state.scenes.charging.batteryAdaptive)
      ? '#00e600'
      : (state.scenes[pageId].color || '#00e600');
    applyHaloColor(curColor);
    applySceneEffectToMockup(pageId, state.scenes[pageId].effect);
  }

  // 音乐场景专属：更新调色盘显隐
  if (pageId === 'music') {
    updateMusicColorModules(state.scenes.music.effect);
  }
  updateStatusChips();

  // 6. 检查胶囊溢出状态
  setTimeout(() => {
    checkCapsuleOverflowForScene(pageId);
  }, 50);
}

/**
 * 返回到主首页
 */
function goBackToHome() {
  navigateTo('home');
}

// 四色律动专属的 4 组四色调色方案 (每次只显示一个颜色，每熄灭一次换一个颜色)
const FOUR_COLOR_PALETTES = [
  { c1: '#ff69ef', c2: '#63f2ff', c3: '#ffffff', c4: '#fffd63' }, // 配色一：粉、青、白、黄
  { c1: '#63f2ff', c2: '#fffd63', c3: '#ffb063', c4: '#ffffff' }, // 配色二：青、黄、橙、白
  { c1: '#ffb063', c2: '#fffd41', c3: '#2af72e', c4: '#ff5400' }, // 配色三：橙、黄、绿、红
  { c1: '#fffd62', c2: '#ff5f10', c3: '#2dffee', c4: '#2af72e' }  // 配色四：黄、橙红、青、绿
];

/**
 * 选择音乐场景的四色律动专属配色方案 (0..3)
 */
function selectMusicFourColorPalette(index) {
  state.scenes.music.fourColorPalette = index;
  document.querySelectorAll('#fourColorPresets_music .four-color-disc').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
  const pal = FOUR_COLOR_PALETTES[index] || FOUR_COLOR_PALETTES[3];
  const root = document.documentElement;
  root.style.setProperty('--music-c1', pal.c1);
  root.style.setProperty('--music-c2', pal.c2);
  root.style.setProperty('--music-c3', pal.c3);
  root.style.setProperty('--music-c4', pal.c4);
  updateStatusChips();
}

/**
 * 音乐场景：根据当前选中的灯效动态控制颜色选择模块显隐
 * - 彩色律动：不可以选择颜色（隐藏所有调色盘）
 * - 四色律动：展示四色律动专属配色盘（4组扇形色盘）
 * - 呼吸 / 律动：展示与其他场景相同的标准单色颜色选择（6中空环预设 + 拾色大圆盘）
 */
function updateMusicColorModules(effectName) {
  const fourColorMod = document.getElementById('colorModule_music_four_color');
  const singleColorMod = document.getElementById('colorModule_music_single');

  if (effectName === 'color_rhythm') {
    if (fourColorMod) fourColorMod.style.display = 'none';
    if (singleColorMod) singleColorMod.style.display = 'none';
  } else if (effectName === 'four_color') {
    if (fourColorMod) fourColorMod.style.display = 'block';
    if (singleColorMod) singleColorMod.style.display = 'none';
    const pIdx = state.scenes.music.fourColorPalette !== undefined ? state.scenes.music.fourColorPalette : 3;
    selectMusicFourColorPalette(pIdx);
  } else if (effectName === 'breathing' || effectName === 'rhythm') {
    if (fourColorMod) fourColorMod.style.display = 'none';
    if (singleColorMod) singleColorMod.style.display = 'block';
    applyHaloColor(state.scenes.music.color || '#00e600');
  }
}

// 各场景候选的全部专属灯效配置表
const SCENE_ALL_CANDIDATE_EFFECTS = {
  call: ['breathing', 'pulsing'],
  notification: ['breathing', 'pulsing'],
  charging: ['waterflow', 'streamer', 'breathing', 'pulsing'],
  music: ['color_rhythm', 'four_color', 'breathing', 'rhythm'],
  power: ['breathing', 'pulsing']
};

// 保持向下兼容别名
const SCENE_ALLOWED_EFFECTS = SCENE_ALL_CANDIDATE_EFFECTS;

/**
 * 获取指定项目在各场景下启用的灯效列表 (白名单多选)
 */
function getProjectEnabledEffects(projectId) {
  if (!state.projectEnabledEffects) state.projectEnabledEffects = {};
  if (!state.projectEnabledEffects[projectId]) {
    // 默认全选所有候选灯效
    state.projectEnabledEffects[projectId] = JSON.parse(JSON.stringify(SCENE_ALL_CANDIDATE_EFFECTS));
  }
  return state.projectEnabledEffects[projectId];
}

/**
 * 保存指定项目在各场景下启用的灯效列表
 */
function saveProjectEnabledEffects(projectId, enabledMap) {
  if (!state.projectEnabledEffects) state.projectEnabledEffects = {};
  state.projectEnabledEffects[projectId] = enabledMap;
  try {
    localStorage.setItem('ambient_light_project_enabled_effects', JSON.stringify(state.projectEnabledEffects));
  } catch (e) {
    console.warn('Failed to save project enabled effects', e);
  }
}

/**
 * 切换指定项目在指定模式下某个灯效的启用状态（多选配置）
 * 选中的灯效才会在 APP 设置页中出现，没选中的不出现
 */
function toggleProjectSceneEffect(sceneId, effectName) {
  const project = state.currentProject;
  const enabledMap = getProjectEnabledEffects(project);
  if (!enabledMap[sceneId]) {
    enabledMap[sceneId] = [...(SCENE_ALL_CANDIDATE_EFFECTS[sceneId] || [])];
  }

  const list = enabledMap[sceneId];
  const idx = list.indexOf(effectName);

  if (idx >= 0) {
    // 试图取消勾选
    // 至少保留一项可用灯效，防止全部取消导致界面空白
    if (list.length <= 1) {
      const isZh = state.lang === 'zh-CN';
      showUploadToast(isZh ? '每个模式请至少保留一种灯效' : 'Please keep at least one effect for each mode');
      return;
    }
    list.splice(idx, 1);
  } else {
    // 勾选启用该灯效
    list.push(effectName);
    // 按候选默认顺序排列保持整洁
    const order = SCENE_ALL_CANDIDATE_EFFECTS[sceneId] || [];
    list.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }

  saveProjectEnabledEffects(project, enabledMap);

  // 1. 如果当前场景正在生效的灯效被取消了，自动切换到剩余选中的第一个灯效
  const curEffect = state.scenes[sceneId]?.effect;
  if (!list.includes(curEffect)) {
    const nextEffect = list[0];
    selectSceneEffect(sceneId, nextEffect);
  }

  // 2. 联动更新手机 APP 设置页里各场景胶囊按钮的显隐（选中的出现，没选中的不出现）
  updateAllSceneCapsulesVisibility();

  // 3. 重新渲染弹窗列表
  renderProjectEffectsModal();
}

/**
 * 刷新手机 APP 设置页内所有场景的灯效胶囊显隐
 * 严格遵从：用户选中的灯效才会在 APP 设置页出现，没选中的不出现
 */
function updateAllSceneCapsulesVisibility() {
  const project = state.currentProject;
  const enabledMap = getProjectEnabledEffects(project);
  const scenes = ['call', 'notification', 'charging', 'music', 'power'];
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];

  scenes.forEach(sceneId => {
    const track = document.getElementById(`capsulesTrack_${sceneId}`);
    if (!track) return;

    const allowed = enabledMap[sceneId] || SCENE_ALL_CANDIDATE_EFFECTS[sceneId] || [];
    const buttons = track.querySelectorAll('.capsule-btn');

    buttons.forEach(btn => {
      const eff = btn.getAttribute('data-effect');
      const isAllowed = allowed.includes(eff);
      // 选中的才在 app 设置页里面出现，没选中的不出现！
      btn.style.display = isAllowed ? '' : 'none';
    });

    // 检查当前场景生效的灯效是否在 allowed 中
    let curEffect = state.scenes[sceneId]?.effect;
    if (!allowed.includes(curEffect) && allowed.length > 0) {
      curEffect = allowed[0];
      state.scenes[sceneId].effect = curEffect;
      applySceneEffectToMockup(sceneId, curEffect);
    }

    // 保持高亮态与提示文字一致
    buttons.forEach(btn => {
      const isCur = btn.getAttribute('data-effect') === curEffect;
      btn.classList.toggle('active', isCur);
    });

    const hint = document.getElementById(`effectHint_${sceneId}`);
    if (hint && curEffect) {
      hint.textContent = dict[`effect_${curEffect}`] || curEffect;
    }
  });
}

/**
 * 选择各场景的灯效（严格遵循各场景支持的灯效列表，并按项目独立保存与确认）
 */
function selectSceneEffect(sceneId, effectName, fromModal = false) {
  const scData = state.scenes[sceneId];
  if (!scData || !scData.enabled) return;

  const enabledMap = getProjectEnabledEffects(state.currentProject);
  const allowed = enabledMap[sceneId] || SCENE_ALL_CANDIDATE_EFFECTS[sceneId];
  if (allowed && !allowed.includes(effectName)) {
    return;
  }

  scData.effect = effectName;

  // 同步保存当前项目的模式灯效方案
  saveCurrentProjectScenes();

  // 1. 更新当前场景内胶囊的高亮选中态
  const track = document.getElementById(`capsulesTrack_${sceneId}`);
  if (track) {
    track.querySelectorAll('.capsule-btn').forEach(btn => {
      const isCur = btn.getAttribute('data-effect') === effectName;
      btn.classList.toggle('active', isCur);
      if (isCur && !fromModal) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // 2. 更新该场景顶部 DYNAMIC SOUND 设备动效
  applySceneEffectToMockup(sceneId, effectName);

  // 3. 同步联动颜色选择中的光环预设选中态（单色 vs 彩色 vs 四色）
  const presetsRow = document.getElementById(`colorPresets_${sceneId}_main`);
  if (presetsRow) {
    if (effectName === 'color_rhythm') {
      presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
      const rainbowBtn = presetsRow.querySelector('.color-ring-btn.ring-rainbow');
      if (rainbowBtn) rainbowBtn.classList.add('active');
    } else if (effectName === 'four_color') {
      presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
      const fourBtn = presetsRow.querySelector('.color-ring-btn.ring-four-color');
      if (fourBtn) fourBtn.classList.add('active');
    } else {
      presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === scData.color);
      });
    }
  }

  // 4. 更新提示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hintElem = document.getElementById(`effectHint_${sceneId}`);
  if (hintElem && dict[`effect_${effectName}`]) {
    hintElem.textContent = dict[`effect_${effectName}`];
  }

  // 5. 音乐场景专属：按动效切换颜色选择区（彩色律动无选色、四色律动展示四色盘、呼吸展示单色盘）
  if (sceneId === 'music') {
    updateMusicColorModules(effectName);
  }

  updateStatusChips();

  // 6. 若模式灯效弹窗已展开，实时刷新弹窗内选中态
  if (isProjectEffectsModalOpen()) {
    renderProjectEffectsModal();
  }

  // 7. 弹出明确的模式灯效确认 Toast
  const sceneName = dict[`scene_${sceneId}`] || dict[`page_${sceneId}`] || sceneId;
  const effectTitle = dict[`effect_${effectName}`] || effectName;
  const confirmMsg = (state.lang === 'zh-CN')
    ? `已确认 [${state.currentProject}] ${sceneName} 灯效为: ${effectTitle}`
    : `Confirmed [${state.currentProject}] ${sceneName} effect: ${effectTitle}`;
  showUploadToast(confirmMsg);
}

/**
 * 应用动效类名到具体场景的设备发光环
 */
function applySceneEffectToMockup(sceneId, effectName) {
  const mockup = document.getElementById(`mockup_${sceneId}`);
  if (!mockup) return;

  mockup.classList.remove(
    'fx-breathing',
    'fx-pulsing',
    'fx-streamer',
    'fx-waterflow',
    'fx-color_rhythm',
    'fx-four_color',
    'fx-rhythm',
    'fx-blinking',
    'fx-off'
  );

  const scData = state.scenes[sceneId];
  if (!scData || !scData.enabled) {
    mockup.classList.add('fx-off');
    return;
  }

  mockup.classList.add(`fx-${effectName}`);
}

/**
 * 点击颜色选择中的多色圆环（彩色律动 / 四色律动）
 */
function selectSceneColorRing(sceneId, ringType, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  const boxId = `${sceneId}_${subKey}`;
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
    const targetClass = (ringType === 'four_color' || ringType === 'four-color') ? 'ring-four-color' : `ring-${ringType}`;
    const targetBtn = presetsRow.querySelector(`.color-ring-btn.${targetClass}`);
    if (targetBtn) targetBtn.classList.add('active');
  }

  const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
  if (ringType === 'rainbow') {
    if (allowed && allowed.includes('color_rhythm')) {
      selectSceneEffect(sceneId, 'color_rhythm');
    }
  } else if (ringType === 'four_color') {
    if (allowed && allowed.includes('four_color')) {
      selectSceneEffect(sceneId, 'four_color');
    }
  }
}

/**
 * 场景内点击纯色中空环预设
 */
function selectSceneColor(sceneId, colorHex, colorKey, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  if (subKey === 'incall') {
    scData.inCallColor = colorHex;
    scData.inCallColorKey = colorKey;
  } else {
    scData.color = colorHex;
    scData.colorKey = colorKey;
    // 若原先是彩色律动或四色律动，切换到纯色时恢复单色呼吸效果（若支持）或首选允许效果
    if (scData.effect === 'color_rhythm' || scData.effect === 'four_color') {
      const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
      const fallbackEffect = (allowed && allowed.includes('breathing')) ? 'breathing' : (allowed ? allowed[0] : 'breathing');
      scData.effect = fallbackEffect;
      applySceneEffectToMockup(sceneId, fallbackEffect);
      const track = document.getElementById(`capsulesTrack_${sceneId}`);
      if (track) {
        track.querySelectorAll('.capsule-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-effect') === fallbackEffect);
        });
      }
    }
  }

  // 1. 更新预设圆环高亮
  const boxId = `${sceneId}_${subKey}`;
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-color') === colorHex);
    });
  }

  // 2. 同步更新色轮把手
  updateWheelThumb(boxId, colorHex);

  // 3. 更新提示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hint = document.getElementById(`colorHint_${boxId}`);
  if (hint && dict[colorKey]) {
    hint.textContent = dict[colorKey];
  }

  // 4. 应用颜色到发光环及胶囊联动描边
  applyHaloColor(colorHex);
  updateStatusChips();
  saveCurrentProjectScenes();
}

/**
 * 在色轮上取色
 */
function pickSceneWheelColor(e, sceneId, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  const boxId = `${sceneId}_${subKey}`;
  const box = document.getElementById(`colorWheel_${boxId}`);
  if (!box) return;

  const rect = box.getBoundingClientRect();
  const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
  const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.hypot(dx, dy);
  const maxRadius = rect.width / 2;

  const clampedDist = Math.min(dist, maxRadius - 2);
  const angleRad = Math.atan2(dy, dx);
  const thumbX = cx + Math.cos(angleRad) * clampedDist;
  const thumbY = cy + Math.sin(angleRad) * clampedDist;

  const thumb = document.getElementById(`wheelThumb_${boxId}`);
  const thumbCore = document.getElementById(`thumbCore_${boxId}`);
  if (thumb) {
    thumb.style.left = `${(thumbX / rect.width) * 100}%`;
    thumb.style.top = `${(thumbY / rect.height) * 100}%`;
  }

  let deg = (angleRad * 180) / Math.PI;
  if (deg < 0) deg += 360;

  const sat = Math.min(1, dist / maxRadius);
  const pickedHex = hslToHex(deg, sat * 100, 50);

  if (subKey === 'incall') {
    scData.inCallColor = pickedHex;
    scData.inCallColorKey = 'color_custom';
  } else {
    scData.color = pickedHex;
    scData.colorKey = 'color_custom';
    if (scData.effect === 'color_rhythm' || scData.effect === 'four_color') {
      const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
      const fallbackEffect = (allowed && allowed.includes('breathing')) ? 'breathing' : (allowed ? allowed[0] : 'breathing');
      scData.effect = fallbackEffect;
      applySceneEffectToMockup(sceneId, fallbackEffect);
      const track = document.getElementById(`capsulesTrack_${sceneId}`);
      if (track) {
        track.querySelectorAll('.capsule-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-effect') === fallbackEffect);
        });
      }
    }
  }

  if (thumbCore) thumbCore.style.backgroundColor = pickedHex;

  // 联动快捷圆环选中态
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-color') === pickedHex);
    });
  }

  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hint = document.getElementById(`colorHint_${boxId}`);
  if (hint) hint.textContent = dict['color_custom'] || '自定义';

  applyHaloColor(pickedHex);
  updateStatusChips();
  saveCurrentProjectScenes();
}

function updateWheelThumb(boxId, colorHex) {
  const presetPositions = {
    '#00e600': { left: '35%', top: '90%' },
    '#ffa850': { left: '80%', top: '74%' },
    '#4ca8ff': { left: '22%', top: '30%' },
    '#00f5e6': { left: '16%', top: '55%' }
  };
  const pos = presetPositions[colorHex] || { left: '35%', top: '90%' };
  const thumb = document.getElementById(`wheelThumb_${boxId}`);
  const thumbCore = document.getElementById(`thumbCore_${boxId}`);
  if (thumb) {
    thumb.style.left = pos.left;
    thumb.style.top = pos.top;
  }
  if (thumbCore) {
    thumbCore.style.backgroundColor = colorHex;
  }
}

/**
 * 幻彩脉动总开关
 * 关闭时：示意图不亮（发光环熄灭 + 切换至未通电物理网罩），其他区域全部置灰并禁用操作
 */
function toggleMasterPulse(checked) {
  state.scenes.home.enabled = checked;
  const viewHome = document.getElementById('view_home');
  const mockup = document.getElementById('mockup_home');
  const mockupImg = mockup ? mockup.querySelector('.device-clean-img') : null;

  if (viewHome) {
    viewHome.classList.toggle('master-off', !checked);
  }

  if (mockup) {
    mockup.classList.toggle('fx-off', !checked);
  }

  if (mockupImg) {
    mockupImg.src = getProjectMockupSrc('home', !checked);
  }

  // 禁用/启用受控控件
  const partySwitch = document.getElementById('switch_party');
  if (partySwitch) partySwitch.disabled = !checked;
  const slider = document.getElementById('homeBrightnessSlider');
  if (slider) slider.disabled = !checked;
  document.querySelectorAll('#masterControlledContent button').forEach(btn => btn.disabled = !checked);
  saveCurrentProjectScenes();
}

/**
 * 启用时段点击拦截（总开关关闭时禁止进入）
 */
function handleActiveTimeRowClick() {
  if (!state.scenes.home.enabled) return;
  navigateTo('active_time');
}

/**
 * 场景行点击拦截（总开关关闭时禁止进入）
 */
function handleSceneRowClick(sceneId) {
  if (!state.scenes.home.enabled) return;
  navigateTo(sceneId);
}

/**
 * 派对模式开关
 */
function togglePartyMode(checked) {
  state.scenes.home.partyEnabled = checked;
  const mockup = document.getElementById('mockup_home');
  if (mockup) {
    if (checked) {
      mockup.classList.remove('fx-off');
      mockup.classList.add('fx-color_rhythm');
    } else {
      mockup.classList.remove('fx-color_rhythm');
      mockup.classList.add('fx-breathing');
    }
  }
  saveCurrentProjectScenes();
}

/**
 * 场景开关切换 (来电, 通知, 充电, 音乐, 开关机)
 */
function toggleSceneSwitch(sceneId, checked) {
  const scData = state.scenes[sceneId];
  if (!scData) return;
  scData.enabled = checked;

  // 更新首页状态指示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const statusElem = document.getElementById(`statusText_${sceneId}`);
  if (statusElem) {
    statusElem.textContent = checked ? (dict['status_enabled'] || '已开启') : (dict['status_disabled'] || '已关闭');
  }

  // 更新当前页面设备环状态
  const mockup = document.getElementById(`mockup_${sceneId}`);
  const mockupImg = mockup ? mockup.querySelector('.device-clean-img') : null;
  if (mockup) {
    if (!checked) {
      mockup.classList.add('fx-off');
      if (mockupImg) mockupImg.src = getProjectMockupSrc(sceneId, true);
    } else {
      mockup.classList.remove('fx-off');
      if (mockupImg) mockupImg.src = getProjectMockupSrc(sceneId, false);
      applySceneEffectToMockup(sceneId, scData.effect);
    }
  }

  // 若为来电场景，当来电开关关闭时禁用通话中呼吸
  if (sceneId === 'call') {
    const inCallSw = document.getElementById('switch_inCallBreathe');
    const inCallRow = document.getElementById('row_inCallBreathe');
    if (inCallSw) inCallSw.disabled = !checked;
    if (inCallRow) {
      inCallRow.style.opacity = checked ? '1' : '0.4';
      inCallRow.style.pointerEvents = checked ? 'auto' : 'none';
    }
  }
  saveCurrentProjectScenes();
}

function toggleInCallBreathe(checked) {
  state.scenes.call.inCallBreathe = checked;
  saveCurrentProjectScenes();
}

function toggleBatteryAdaptive(checked) {
  state.scenes.charging.batteryAdaptive = checked;
  const colorModule = document.getElementById('colorModule_charging');
  if (colorModule) {
    colorModule.style.display = checked ? 'none' : 'block';
  }
  if (checked) {
    applyHaloColor('#00e600');
  } else {
    applyHaloColor(state.scenes.charging.color || '#00e600');
  }
  updateStatusChips();
  saveCurrentProjectScenes();
}

/**
 * 全局亮度调节（线条实时跟随 + 顶部灯光亮度和光晕毫秒级实时驱动）
 */
function handleBrightnessInput(val) {
  const num = parseFloat(val);
  state.globalBrightness = Math.round(num);

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'none';
  }

  updateSliderTrackLine(num);
  applyHaloBrightness(num);
  updateStatusChips();
}

/**
 * 释放滑块时吸附到最近的 5 档档位 (20%, 40%, 60%, 80%, 100%)
 */
function handleBrightnessChange(val) {
  const num = parseFloat(val);
  const nearest = Math.max(20, Math.min(100, Math.round(num / 20) * 20));

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'width 0.2s cubic-bezier(0.2, 0, 0.2, 1)';
  }

  setBrightnessGear(nearest);
}

/**
 * 档位设定（点击太阳图标或吸附归位）
 */
function setBrightnessGear(val) {
  const num = Math.max(20, Math.min(100, parseInt(val, 10)));
  state.globalBrightness = num;

  const slider = document.getElementById('homeBrightnessSlider');
  if (slider) {
    slider.value = num;
  }

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'width 0.2s cubic-bezier(0.2, 0, 0.2, 1)';
  }

  updateSliderTrackLine(num);
  applyHaloBrightness(num);
  updateStatusChips();
}

function setGlobalBrightness(val) {
  setBrightnessGear(val);
}

/**
 * 更新胶囊滑块蓝色填充线条与圆点状态 (1:1对齐参考图：同心圆钮嵌入蓝色端头)
 */
function updateSliderTrackLine(val) {
  const num = parseFloat(val);
  const ratio = Math.max(0, Math.min(1, (num - 20) / 80));

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    // 胶囊高度 24px，圆角半径 12px；白色圆钮直径 12px，两边内边距 6px
    // 最小宽度为 24px (20% 档)，最大为 100% (100% 档)
    fillLine.style.width = `calc(24px + (100% - 24px) * ${ratio})`;
  }
}

/**
 * 驱动顶部发光环真实灯光亮度和范围跟随调节
 */
function applyHaloBrightness(num) {
  const factor = Math.max(0, Math.min(1, (num - 20) / 80)); // 0.0 ~ 1.0

  // 视觉参数阶梯：20% 时微弱柔暗，100% 时高亮炫目漫射
  const brightnessVal = (0.32 + factor * 0.88).toFixed(3); // 0.32 ~ 1.20
  const opacityVal = (0.22 + factor * 0.78).toFixed(3);    // 0.22 ~ 1.00
  const glowScaleVal = (0.65 + factor * 0.55).toFixed(3);  // 0.65 ~ 1.20
  const glowOpacity = (0.20 + factor * 0.80).toFixed(3);   // 0.20 ~ 1.00

  document.documentElement.style.setProperty('--device-halo-brightness', brightnessVal);
  document.documentElement.style.setProperty('--device-halo-opacity', opacityVal);
  document.documentElement.style.setProperty('--device-halo-glow-scale', glowScaleVal);
  document.documentElement.style.setProperty('--brightness-pct', `${Math.round(num)}%`);

  // 直接驱动所有场景的 emitter 与 ambient glow
  document.querySelectorAll('.halo-ring-emitter').forEach(emitter => {
    emitter.style.opacity = opacityVal;
    emitter.style.filter = `brightness(${brightnessVal})`;
  });

  document.querySelectorAll('.halo-ambient-glow').forEach(glow => {
    glow.style.transform = `scale(${glowScaleVal})`;
    glow.style.opacity = glowOpacity;
  });
}

/**
 * 设置全局 CSS 颜色变量（驱动描边随选色动态联动）
 */
function applyHaloColor(hexColor) {
  document.documentElement.style.setProperty('--active-halo-color', hexColor);
  const cleanHex = hexColor.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 168;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 56;
  document.documentElement.style.setProperty('--active-halo-rgb', `${r}, ${g}, ${b}`);
}

/**
 * 切换多语言
 */
function switchLanguage(langCode) {
  if (!I18N_LOCALES[langCode]) return;
  state.lang = langCode;

  const desktopSelect = document.getElementById('desktopLangSelect');
  if (desktopSelect) desktopSelect.value = langCode;

  document.querySelectorAll('.sheet-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === langCode);
  });

  updateLanguageDisplay();
}

/**
 * 移动端语言选择底部抽屉
 */
function toggleLanguageSheet(show) {
  const backdrop = document.getElementById('langModalBackdrop');
  if (!backdrop) return;
  if (show === undefined) {
    show = !backdrop.classList.contains('active');
  }
  if (show) {
    backdrop.style.display = 'flex';
    void backdrop.offsetWidth;
    backdrop.classList.add('active');
  } else {
    backdrop.classList.remove('active');
    setTimeout(() => {
      if (!backdrop.classList.contains('active')) {
        backdrop.style.display = 'none';
      }
    }, 250);
  }
}

function selectAppLanguage(langCode) {
  switchLanguage(langCode);
  toggleLanguageSheet(false);
}

/**
 * 将当前语言应用到所有带 data-i18n 的元素
 */
function updateLanguageDisplay() {
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // 更新导航栏标题
  const titleElem = document.getElementById('navTitle');
  if (titleElem) {
    titleElem.textContent = dict[`page_${state.currentPage}`] || '幻彩脉动';
  }

  // 更新场景状态已开启/已关闭
  ['call', 'notification', 'charging', 'music', 'power'].forEach(sc => {
    const stElem = document.getElementById(`statusText_${sc}`);
    if (stElem) {
      const isEnabled = state.scenes[sc]?.enabled;
      stElem.textContent = isEnabled ? (dict['status_enabled'] || '已开启') : (dict['status_disabled'] || '已关闭');
    }
  });

  updateStatusChips();
  renderProjectOptions();
  updateAllSceneCapsulesVisibility();
  if (isProjectEffectsModalOpen()) {
    renderProjectEffectsModal();
  }
}

/**
 * 更新左侧控制台的状态胶囊
 */
function updateStatusChips() {
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const curScene = state.scenes[state.currentPage] || state.scenes.home;

  const chipPage = document.getElementById('chipPage');
  if (chipPage) chipPage.textContent = `页面: ${dict['page_' + state.currentPage] || state.currentPage}`;

  const chipEffect = document.getElementById('chipEffect');
  if (chipEffect) chipEffect.textContent = `灯效: ${dict['effect_' + curScene.effect] || curScene.effect || '呼吸'}`;

  const chipColor = document.getElementById('chipColor');
  if (chipColor) chipColor.textContent = `颜色: ${dict[curScene.colorKey] || curScene.color || '深绿'}`;

  const chipBrightness = document.getElementById('chipBrightness');
  if (chipBrightness) chipBrightness.textContent = `亮度: ${state.globalBrightness}%`;
}

/**
 * 监听所有胶囊滚动容器横向滚动事件，动态控制左/右双向羽化渐隐
 */
function initAllScrollersOverflow() {
  ['call', 'notification', 'charging', 'music', 'power'].forEach(sceneId => {
    const track = document.getElementById(`capsulesTrack_${sceneId}`);
    if (track) {
      track.addEventListener('scroll', () => {
        checkCapsuleOverflowForScene(sceneId);
      }, { passive: true });
    }
  });
}

function checkCapsuleOverflowForScene(sceneId) {
  const scroller = document.getElementById(`capsulesWrap_${sceneId}`);
  const track = document.getElementById(`capsulesTrack_${sceneId}`);
  if (!scroller || !track) return;

  const scrollLeft = track.scrollLeft;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const hasOverflow = maxScroll > 2;

  scroller.classList.toggle('has-overflow', hasOverflow);
  scroller.classList.toggle('mask-left', hasOverflow && scrollLeft > 3);
  scroller.classList.toggle('mask-right', hasOverflow && scrollLeft < maxScroll - 3);
}

/**
 * 实时更新状态栏时间
 */
function startRealtimeClock() {
  const timeElem = document.getElementById('statusTime');
  const update = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    if (timeElem) timeElem.textContent = `${h}:${m}`;
  };
  update();
  setInterval(update, 30000);
}

/**
 * HSL 转 HEX 工具函数
 */
function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * 启用时段设置：切换全天启用 / 定时启用
 */
function setActiveTimeMode(mode) {
  state.schedule.mode = mode;
  const radioAllDay = document.getElementById('radio_all_day');
  const radioSched = document.getElementById('radio_scheduled');
  if (radioAllDay) radioAllDay.checked = (mode === 'all_day');
  if (radioSched) radioSched.checked = (mode === 'scheduled');

  const cardPicker = document.getElementById('card_time_picker');
  if (cardPicker) {
    cardPicker.style.display = (mode === 'scheduled') ? 'block' : 'none';
  }

  updateActiveTimeSummary();
}

/**
 * 触发时间修改
 */
function triggerTimeEdit(type) {
  const input = document.getElementById(`input_${type}_time`);
  if (!input) return;
  if (input.showPicker) {
    input.showPicker();
  } else {
    input.focus();
    input.click();
  }
}

/**
 * 更新设定的时间数值
 */
function updateScheduledTime(type, val) {
  if (!val) return;
  if (type === 'start') {
    state.schedule.startTime = val;
    const txt = document.getElementById('text_start_time');
    if (txt) txt.textContent = val;
  } else {
    state.schedule.endTime = val;
    const txt = document.getElementById('text_end_time');
    if (txt) txt.textContent = val;
  }
  updateActiveTimeSummary();
}

/**
 * 同步主首页上的启用时段摘要文案
 */
function updateActiveTimeSummary() {
  const summaryElem = document.getElementById('homeActiveTimeSummary');
  if (!summaryElem) return;
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  if (state.schedule.mode === 'all_day') {
    summaryElem.textContent = dict['active_time_all_day'] || '全天启用';
  } else {
    summaryElem.textContent = `${state.schedule.startTime} - ${state.schedule.endTime}`;
  }
}

/**
 * 充电时间显示时长抽屉控制与选定
 */
function openChargingDurationSheet() {
  toggleDurationSheet(true);
}

function toggleDurationSheet(show) {
  const el = document.getElementById('durationModalBackdrop');
  if (el) el.classList.toggle('active', !!show);
}

function selectChargingDuration(durKey) {
  state.scenes.charging.duration = durKey;
  ['15s', '30s', '1m', 'always'].forEach(k => {
    const opt = document.getElementById(`opt_duration_${k}`);
    if (opt) opt.classList.toggle('active', k === durKey);
  });
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const statusElem = document.getElementById('statusText_charging_duration');
  if (statusElem) {
    statusElem.setAttribute('data-i18n', `charging_duration_${durKey}`);
    statusElem.textContent = dict[`charging_duration_${durKey}`] || durKey;
  }
  toggleDurationSheet(false);
}

/**
 * 生效应用列表抽屉控制与交互
 */
let curAppsType = 'notification';

function openEffectiveAppsSheet(type) {
  curAppsType = type;
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const title = document.getElementById('appsSheetTitle');
  const sub = document.getElementById('appsSheetSubtitle');
  if (title) title.textContent = dict[`apps_${type}_title`] || (type === 'notification' ? '生效的应用 (通知)' : '生效的应用 (音乐)');
  if (sub) sub.textContent = dict[`apps_${type}_subtitle`] || (type === 'notification' ? '收到通知时氛围灯将闪烁提示' : '播放音乐时氛围灯将跟随节奏律动');

  renderAppsList(type);
  toggleAppsSheet(true);
}

function toggleAppsSheet(show) {
  const el = document.getElementById('appsModalBackdrop');
  if (el) el.classList.toggle('active', !!show);
}

function renderAppsList(type) {
  const container = document.getElementById('appsListContainer');
  if (!container) return;
  const apps = type === 'notification' ? NOTIFICATION_APPS : MUSIC_APPS;
  const appState = state.effectiveApps[type];

  // 同步全选开关
  const allSw = document.getElementById('switch_apps_select_all');
  if (allSw) allSw.checked = appState.all;

  container.innerHTML = apps.map(app => {
    const isChecked = appState.items[app.id] !== false;
    return `
      <div class="app-item-row">
        <div class="app-item-left">
          <div class="app-icon-badge" style="background-color: ${app.color};">${app.badge}</div>
          <span class="app-name">${app.name}</span>
        </div>
        <label class="switch-toggle">
          <input type="checkbox" id="switch_app_${app.id}" ${isChecked ? 'checked' : ''} onchange="toggleAppItem('${type}', '${app.id}', this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </div>
    `;
  }).join('');
}

function toggleAppItem(type, appId, checked) {
  state.effectiveApps[type].items[appId] = checked;
  const apps = type === 'notification' ? NOTIFICATION_APPS : MUSIC_APPS;
  const allChecked = apps.every(a => state.effectiveApps[type].items[a.id] !== false);
  state.effectiveApps[type].all = allChecked;
  const allSw = document.getElementById('switch_apps_select_all');
  if (allSw) allSw.checked = allChecked;
}

function toggleAllApps(checked) {
  const type = curAppsType;
  state.effectiveApps[type].all = checked;
  const apps = type === 'notification' ? NOTIFICATION_APPS : MUSIC_APPS;
  apps.forEach(a => {
    state.effectiveApps[type].items[a.id] = checked;
    const sw = document.getElementById(`switch_app_${a.id}`);
    if (sw) sw.checked = checked;
  });
}

// ==========================================================================
// 项目筛选与示意图管理系统（含发光区域智能识别与可视化微调）
// ==========================================================================

/**
 * 获取指定项目的发光灯位与缩放配置
 */
function getProjectLightConfig(projectId) {
  if (state.projectLightConfigs && state.projectLightConfigs[projectId]) {
    const cfg = { ...state.projectLightConfigs[projectId] };
    if (cfg.ringWidth === undefined) {
      cfg.ringWidth = projectId === '3137' ? 24 : 28;
    }
    return cfg;
  }
  if (DEFAULT_PROJECT_LIGHT_CONFIGS[projectId]) {
    return { ...DEFAULT_PROJECT_LIGHT_CONFIGS[projectId] };
  }
  return {
    left: '50.0%',
    top: '50.0%',
    width: '20.0%',
    scale: 1.0,
    ringWidth: 25
  };
}

/**
 * 保存指定项目的发光灯位与缩放配置
 */
function saveProjectLightConfig(projectId, config) {
  if (!state.projectLightConfigs) state.projectLightConfigs = {};
  state.projectLightConfigs[projectId] = { ...config };
  try {
    localStorage.setItem('ambient_light_project_configs', JSON.stringify(state.projectLightConfigs));
  } catch (e) {
    console.warn('Failed to save project light config', e);
  }
}

/**
 * 将发光区域配置应用到所有场景的发光环与示意图缩放
 */
function applyProjectLightConfig(projectId) {
  const config = getProjectLightConfig(projectId);
  const root = document.documentElement;

  root.style.setProperty('--emitter-left', config.left);
  root.style.setProperty('--emitter-top', config.top);
  root.style.setProperty('--emitter-size', config.width);
  const scaleVal = config.scale !== undefined ? config.scale : 1.0;
  root.style.setProperty('--schematic-scale', scaleVal);

  const ringW = config.ringWidth !== undefined ? parseFloat(config.ringWidth) : 28;
  const outerPct = 94;
  const innerPct = Math.max(10, Math.min(90, outerPct - ringW));
  root.style.setProperty('--emitter-mask-inner', `${innerPct}%`);
  root.style.setProperty('--emitter-mask-outer', `${outerPct}%`);
  root.style.setProperty('--emitter-ring-width', `${ringW}%`);

  const scenes = ['home', 'call', 'notification', 'charging', 'music', 'power'];
  scenes.forEach(s => {
    const emitter = document.getElementById(`haloEmitter_${s}`);
    if (emitter) {
      emitter.style.left = config.left;
      emitter.style.top = config.top;
      emitter.style.width = config.width;
    }
    const mockup = document.getElementById(`mockup_${s}`);
    if (mockup) {
      mockup.style.transform = `scale(${scaleVal})`;
    }
  });

  syncSlidersWithConfig(config);
}

/**
 * 同步微调控制面板滑块数值与显示标签
 */
function syncSlidersWithConfig(config) {
  const tag = document.getElementById('adjustCurrentProjectTag');
  if (tag) tag.textContent = state.currentProject;

  const numX = parseFloat(config.left) || 50;
  const numY = parseFloat(config.top) || 50;
  const numSize = parseFloat(config.width) || 20;
  const numScale = config.scale !== undefined ? parseFloat(config.scale) : 1.0;
  const numRingWidth = config.ringWidth !== undefined ? parseFloat(config.ringWidth) : 28;

  const sliderX = document.getElementById('sliderLightX');
  const sliderY = document.getElementById('sliderLightY');
  const sliderSize = document.getElementById('sliderLightSize');
  const sliderScale = document.getElementById('sliderLightScale');
  const sliderRingWidth = document.getElementById('sliderLightRingWidth');

  const valX = document.getElementById('valLightX');
  const valY = document.getElementById('valLightY');
  const valSize = document.getElementById('valLightSize');
  const valScale = document.getElementById('valLightScale');
  const valRingWidth = document.getElementById('valLightRingWidth');

  if (sliderX) sliderX.value = numX;
  if (sliderY) sliderY.value = numY;
  if (sliderSize) sliderSize.value = numSize;
  if (sliderScale) sliderScale.value = numScale;
  if (sliderRingWidth) sliderRingWidth.value = numRingWidth;

  if (valX) valX.textContent = `${numX.toFixed(1)}%`;
  if (valY) valY.textContent = `${numY.toFixed(1)}%`;
  if (valSize) valSize.textContent = `${numSize.toFixed(1)}%`;
  if (valScale) valScale.textContent = `${Math.round(numScale * 100)}%`;
  if (valRingWidth) valRingWidth.textContent = `${Math.round(numRingWidth)}%`;
}

/**
 * 展开/收起发光区域与尺寸可视化微调面板
 */
function toggleLightAdjustPanel(forceState) {
  const panel = document.getElementById('lightAdjustPanel');
  const btn = document.getElementById('btnToggleLightAdjust');
  if (!panel) return;

  const isVisible = forceState !== undefined ? forceState : panel.style.display === 'none';
  panel.style.display = isVisible ? 'flex' : 'none';
  if (btn) btn.classList.toggle('active', isVisible);
  state.isCalibratingLight = isVisible;

  if (isVisible) {
    toggleProjectEffectsModal(false);
  }

  document.querySelectorAll('.device-mockup-new').forEach(mockup => {
    mockup.classList.toggle('calibrating-active', isVisible);
  });

  if (isVisible) {
    applyProjectLightConfig(state.currentProject);
  }
}

/**
 * 响应滑块拖动调整发光参数
 */
function handleLightParamChange() {
  const sliderX = document.getElementById('sliderLightX');
  const sliderY = document.getElementById('sliderLightY');
  const sliderSize = document.getElementById('sliderLightSize');
  const sliderScale = document.getElementById('sliderLightScale');
  const sliderRingWidth = document.getElementById('sliderLightRingWidth');

  const numX = parseFloat(sliderX?.value || 50);
  const numY = parseFloat(sliderY?.value || 50);
  const numSize = parseFloat(sliderSize?.value || 20);
  const numScale = parseFloat(sliderScale?.value || 1.0);
  const numRingWidth = parseFloat(sliderRingWidth?.value || 28);

  const config = {
    left: `${numX.toFixed(1)}%`,
    top: `${numY.toFixed(1)}%`,
    width: `${numSize.toFixed(1)}%`,
    scale: numScale,
    ringWidth: numRingWidth
  };

  saveProjectLightConfig(state.currentProject, config);
  applyProjectLightConfig(state.currentProject);
}

/**
 * 重置当前项目的发光参数为默认预置值
 */
function resetCurrentProjectLightConfig() {
  if (DEFAULT_PROJECT_LIGHT_CONFIGS[state.currentProject]) {
    saveProjectLightConfig(state.currentProject, { ...DEFAULT_PROJECT_LIGHT_CONFIGS[state.currentProject] });
  } else {
    saveProjectLightConfig(state.currentProject, {
      left: '50.0%',
      top: '50.0%',
      width: '20.0%',
      scale: 1.0,
      ringWidth: 25
    });
  }
  applyProjectLightConfig(state.currentProject);
  showUploadToast((state.lang === 'zh-CN' ? '已恢复 ' : 'Reset config for ') + state.currentProject + (state.lang === 'zh-CN' ? ' 默认灯位与宽度' : ' default light position & width'));
}

/**
 * 自动识别图片中的彩色发光环中心坐标及外径
 * 基于 Canvas 色度方差扫描与聚类算法
 */
function autoDetectLightRingFromImage(imgElement) {
  try {
    const canvas = document.createElement('canvas');
    const w = imgElement.naturalWidth || imgElement.width;
    const h = imgElement.naturalHeight || imgElement.height;
    if (!w || !h) return null;

    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgElement, 0, 0);
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    const coloredPts = [];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        if (a > 40) {
          const maxVal = Math.max(r, g, b);
          const minVal = Math.min(r, g, b);
          const diff = maxVal - minVal;
          // 手机线稿为中性灰黑白，灯环为高饱和彩色像素
          if (diff >= 18) {
            coloredPts.push({ x, y, diff });
          }
        }
      }
    }

    if (coloredPts.length < 8) {
      return null;
    }

    // 聚类提取中心，剔除边缘离散噪点
    let sumX = 0, sumY = 0;
    coloredPts.forEach(pt => {
      sumX += pt.x;
      sumY += pt.y;
    });
    const avgX = sumX / coloredPts.length;
    const avgY = sumY / coloredPts.length;

    let totalDist = 0;
    coloredPts.forEach(pt => {
      totalDist += Math.hypot(pt.x - avgX, pt.y - avgY);
    });
    const avgDist = totalDist / coloredPts.length;
    const inliers = coloredPts.filter(pt => Math.hypot(pt.x - avgX, pt.y - avgY) <= avgDist * 2.2);

    if (inliers.length < 6) return null;

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    inliers.forEach(pt => {
      if (pt.x < minX) minX = pt.x;
      if (pt.x > maxX) maxX = pt.x;
      if (pt.y < minY) minY = pt.y;
      if (pt.y > maxY) maxY = pt.y;
    });

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const diameter = Math.max(maxX - minX + 1, maxY - minY + 1);

    const leftPct = ((cx / w) * 100).toFixed(2) + '%';
    const topPct = ((cy / h) * 100).toFixed(2) + '%';
    const widthPct = ((diameter / w) * 100).toFixed(2) + '%';

    // 估算发光环宽度（环厚度）
    let maxDist = 0, minDist = Infinity;
    inliers.forEach(pt => {
      const d = Math.hypot(pt.x - cx, pt.y - cy);
      if (d > maxDist) maxDist = d;
      if (d < minDist) minDist = d;
    });
    let detectedRingWidth = 25;
    if (maxDist > 4 && minDist < maxDist) {
      const calcW = Math.round((1 - minDist / maxDist) * 94);
      if (calcW >= 6 && calcW <= 50) {
        detectedRingWidth = calcW;
      }
    }

    // 自动将底图中被检测出的彩色标记光圈清洗为中性底色，彻底杜绝“底图印死的光圈 + CSS动态变色光圈”造成重叠双圈
    for (let i = 0; i < inliers.length; i++) {
      const pt = inliers[i];
      const idx = (pt.y * w + pt.x) * 4;
      data[idx] = 40;
      data[idx + 1] = 40;
      data[idx + 2] = 42;
    }
    ctx.putImageData(imgData, 0, 0);
    const cleanedDataUrl = canvas.toDataURL('image/png');

    return {
      left: leftPct,
      top: topPct,
      width: widthPct,
      ringWidth: detectedRingWidth,
      cleanedDataUrl: cleanedDataUrl
    };
  } catch (err) {
    console.warn('Auto detect failed:', err);
    return null;
  }
}

/**
 * 清除图片中自带的高饱和度指示色环，将其转化为中性深色线稿，确保变色时只呈现单一动态光圈
 */
function cleanIndicatorRingsFromImage(dataUrl, callback) {
  if (!dataUrl) return callback(dataUrl);
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    const canvas = document.createElement('canvas');
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) return callback(dataUrl);
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;
    let modified = false;

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a > 30) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        if (maxVal - minVal > 20) {
          data[i] = 40;
          data[i + 1] = 40;
          data[i + 2] = 42;
          modified = true;
        }
      }
    }

    if (modified) {
      ctx.putImageData(imgData, 0, 0);
      callback(canvas.toDataURL('image/png'));
    } else {
      callback(dataUrl);
    }
  };
  img.onerror = function() {
    callback(dataUrl);
  };
  img.src = dataUrl;
}

/**
 * 触发对当前示意图进行重新智能识别
 */
function autoDetectLightRegionForCurrent() {
  const currentSrc = getProjectMockupSrc(state.currentPage, false);
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    const detected = autoDetectLightRingFromImage(img);
    if (detected) {
      const curConf = getProjectLightConfig(state.currentProject);
      curConf.left = detected.left;
      curConf.top = detected.top;
      curConf.width = detected.width;
      if (detected.ringWidth !== undefined) {
        curConf.ringWidth = detected.ringWidth;
      }
      saveProjectLightConfig(state.currentProject, curConf);
      applyProjectLightConfig(state.currentProject);
      showUploadToast((state.lang === 'zh-CN' ? '✨ 智能检测成功: ' : '✨ Auto-detected: ') + `${detected.left}, ${detected.top}`);
    } else {
      showUploadToast(state.lang === 'zh-CN' ? '未能从图中提取到发光圈，可手动点击示意图设定' : 'Could not detect ring. Click on schematic to place');
    }
  };
  img.src = currentSrc;
}

/**
 * 绑定示意图点击直接拾取发光中心点交互
 */
function setupMockupClickCalibration() {
  const scenes = ['home', 'call', 'notification', 'charging', 'music', 'power'];
  scenes.forEach(s => {
    const mockup = document.getElementById(`mockup_${s}`);
    if (mockup) {
      mockup.addEventListener('click', function(e) {
        if (!state.isCalibratingLight) return;
        const rect = mockup.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const leftPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100)).toFixed(1) + '%';
        const topPct = Math.max(0, Math.min(100, (clickY / rect.height) * 100)).toFixed(1) + '%';

        const curConf = getProjectLightConfig(state.currentProject);
        curConf.left = leftPct;
        curConf.top = topPct;
        saveProjectLightConfig(state.currentProject, curConf);
        applyProjectLightConfig(state.currentProject);

        showUploadToast((state.lang === 'zh-CN' ? '已定焦灯位中心: ' : 'Light centered: ') + `${leftPct}, ${topPct}`);
      });
    }
  });
}

/**
 * 确保所有注册的项目均具备合法的模式灯效配置
 */
function ensureAllProjectsHaveScenes() {
  if (!state.projectScenes || typeof state.projectScenes !== 'object') {
    state.projectScenes = {};
  }
  if (!state.projectScenes['GQ5023']) {
    state.projectScenes['GQ5023'] = JSON.parse(JSON.stringify(DEFAULT_PROJECT_SCENES['GQ5023']));
  }
  if (!state.projectScenes['3137']) {
    state.projectScenes['3137'] = JSON.parse(JSON.stringify(DEFAULT_PROJECT_SCENES['3137']));
  }
  state.projects.forEach(p => {
    if (!state.projectScenes[p]) {
      state.projectScenes[p] = JSON.parse(JSON.stringify(DEFAULT_PROJECT_SCENES['GQ5023']));
    }
  });
}

/**
 * 载入当前项目的专属各模式灯效与配置
 */
function loadCurrentProjectScenes() {
  ensureAllProjectsHaveScenes();
  const curData = state.projectScenes[state.currentProject];
  if (curData) {
    state.scenes = JSON.parse(JSON.stringify(curData));
  }
}

/**
 * 保存当前项目下所有模式的灯效与状态到 localStorage
 */
function saveCurrentProjectScenes() {
  if (!state.projectScenes) state.projectScenes = {};
  state.projectScenes[state.currentProject] = JSON.parse(JSON.stringify(state.scenes));
  try {
    localStorage.setItem('ambient_light_project_scenes', JSON.stringify(state.projectScenes));
  } catch (e) {
    console.warn('Failed to save project scenes to localStorage', e);
  }
}

/**
 * 刷新所有场景页面的 UI 元素（胶囊选中态、右上角提示文案、示意图动效、选色高亮态等）
 */
function refreshAllScenesUI() {
  const scenes = ['call', 'notification', 'charging', 'music', 'power'];
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];

  scenes.forEach(scId => {
    const scData = state.scenes[scId];
    if (!scData) return;

    // 1. 刷新胶囊选中态
    const track = document.getElementById(`capsulesTrack_${scId}`);
    if (track) {
      track.querySelectorAll('.capsule-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-effect') === scData.effect);
      });
    }

    // 2. 刷新右上角灯效文案提示
    const hintElem = document.getElementById(`effectHint_${scId}`);
    if (hintElem && scData.effect && dict[`effect_${scData.effect}`]) {
      hintElem.textContent = dict[`effect_${scData.effect}`];
    }

    // 3. 刷新该场景示意图动效类名
    applySceneEffectToMockup(scId, scData.effect);

    // 4. 刷新选色盘高亮态
    const presetsRow = document.getElementById(`colorPresets_${scId}_main`);
    if (presetsRow) {
      presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === scData.color);
      });
    }

    // 5. 刷新具体场景特性
    if (scId === 'music') {
      updateMusicColorModules(scData.effect);
    }
    if (scId === 'charging') {
      const adSw = document.getElementById('switch_batteryAdaptive');
      if (adSw) adSw.checked = !!scData.batteryAdaptive;
      toggleBatteryAdaptive(scData.batteryAdaptive);
    }
    if (scId === 'call') {
      const callSw = document.getElementById('switch_inCallBreathe');
      if (callSw) callSw.checked = !!scData.inCallBreathe;
    }
  });

  // 主页动效与颜色
  if (state.currentPage === 'home') {
    applySceneEffectToMockup('home', state.scenes.home.effect || 'color_rhythm');
    if (state.scenes.home.color) applyHaloColor(state.scenes.home.color);
  } else if (state.scenes[state.currentPage]) {
    applySceneEffectToMockup(state.currentPage, state.scenes[state.currentPage].effect);
    if (state.scenes[state.currentPage].color) applyHaloColor(state.scenes[state.currentPage].color);
  }

  updateStatusChips();
  renderProjectOptions();
  updateAllSceneCapsulesVisibility();
  if (isProjectEffectsModalOpen()) {
    renderProjectEffectsModal();
  }
}

/**
 * 判断模式灯效弹窗是否展开
 */
function isProjectEffectsModalOpen() {
  const modal = document.getElementById('projectEffectsModal');
  return modal && modal.style.display !== 'none';
}

/**
 * 展开/收起项目模式灯效确认弹窗
 */
function toggleProjectEffectsModal(forceState) {
  const modal = document.getElementById('projectEffectsModal');
  const btn = document.getElementById('btnToggleProjectEffects');
  if (!modal) return;

  const isVisible = (forceState !== undefined) ? forceState : (modal.style.display === 'none');
  modal.style.display = isVisible ? 'flex' : 'none';
  if (btn) btn.classList.toggle('active', isVisible);

  if (isVisible) {
    toggleLightAdjustPanel(false);
    renderProjectEffectsModal();
  }
}

/**
 * 渲染项目模式灯效确认弹窗列表 (多选配置：选中的灯效才会在 APP 设置页出现，没选中的不出现)
 */
function renderProjectEffectsModal() {
  const tag = document.getElementById('effectsModalProjectTag');
  if (tag) tag.textContent = state.currentProject;

  const container = document.getElementById('projectEffectsList');
  if (!container) return;

  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const modes = [
    { id: 'call', icon: '📞', name: dict.scene_call || '来电' },
    { id: 'notification', icon: '🔔', name: dict.scene_notification || '通知' },
    { id: 'charging', icon: '⚡', name: dict.scene_charging || '充电' },
    { id: 'music', icon: '🎵', name: dict.scene_music || '音乐' },
    { id: 'power', icon: '⏻', name: dict.scene_power || '开关机' }
  ];

  const enabledMap = getProjectEnabledEffects(state.currentProject);
  container.innerHTML = '';

  modes.forEach(m => {
    const selectedList = enabledMap[m.id] || SCENE_ALL_CANDIDATE_EFFECTS[m.id] || [];
    const allCandidates = SCENE_ALL_CANDIDATE_EFFECTS[m.id] || ['breathing', 'pulsing'];

    // 标签文字：全部启用或已选项详情
    let tagText = '';
    if (selectedList.length === allCandidates.length) {
      tagText = dict.effects_all_enabled || (state.lang === 'zh-CN' ? '全部启用' : 'All Enabled');
    } else {
      const selectedNames = selectedList.map(eff => dict[`effect_${eff}`] || eff).join('、');
      tagText = selectedNames || (dict.effects_selected_count ? dict.effects_selected_count.replace('{n}', selectedList.length) : `已选 ${selectedList.length} 项`);
    }

    const card = document.createElement('div');
    card.className = 'effect-mode-card';

    const header = document.createElement('div');
    header.className = 'effect-mode-header';
    header.innerHTML = `
      <div class="effect-mode-title">
        <span>${m.icon}</span>
        <span>${m.name}</span>
      </div>
      <span class="effect-mode-current-tag">${tagText}</span>
    `;
    card.appendChild(header);

    const chipsGroup = document.createElement('div');
    chipsGroup.className = 'mode-chips-group';

    allCandidates.forEach(eff => {
      const isSelected = selectedList.includes(eff);
      const effName = dict[`effect_${eff}`] || eff;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mode-chip-btn' + (isSelected ? ' active' : '');
      btn.innerHTML = `${isSelected ? '✓ ' : ''}${effName}`;
      btn.title = isSelected ? (state.lang === 'zh-CN' ? '点击在 APP 设置页中隐藏该灯效' : 'Click to hide in APP settings') : (state.lang === 'zh-CN' ? '点击在 APP 设置页中显示该灯效' : 'Click to show in APP settings');
      btn.onclick = () => {
        toggleProjectSceneEffect(m.id, eff);
      };
      chipsGroup.appendChild(btn);
    });

    card.appendChild(chipsGroup);
    container.appendChild(card);
  });
}

/**
 * 确认并关闭项目模式灯效弹窗
 */
function confirmAndCloseProjectEffectsModal() {
  toggleProjectEffectsModal(false);
  const isZh = state.lang === 'zh-CN';
  showUploadToast(isZh ? `已确认并保存 [${state.currentProject}] 模式灯效配置` : `Confirmed and saved mode effects for [${state.currentProject}]`);
}

/**
 * 初始化项目筛选器与示意图缓存
 */
function initProjectSystem() {
  try {
    const savedProjects = localStorage.getItem('ambient_light_projects_list');
    if (savedProjects) {
      const parsed = JSON.parse(savedProjects);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // 保证预设项目 GQ5023 和 3137 均包含在内
        const merged = Array.from(new Set(['GQ5023', '3137', ...parsed]));
        state.projects = merged;
      }
    }
    const savedCustom = localStorage.getItem('ambient_light_custom_diagrams');
    if (savedCustom) {
      state.customDiagrams = JSON.parse(savedCustom) || {};
    }
    // 3137 项目默认集成官方 2K 16:9 纯净超清矢量级底图，清理残留的老版本低清截屏缓存
    if (state.customDiagrams && state.customDiagrams['3137']) {
      delete state.customDiagrams['3137'];
      try {
        localStorage.setItem('ambient_light_custom_diagrams', JSON.stringify(state.customDiagrams));
      } catch (e) {}
    }
    const savedConfigs = localStorage.getItem('ambient_light_project_configs');
    if (savedConfigs) {
      state.projectLightConfigs = JSON.parse(savedConfigs) || {};
    }
    // 校验 3137 配置，若存在老版本缩放或错误尺寸，自动平滑升级为官方超清精准定位
    if (state.projectLightConfigs && state.projectLightConfigs['3137']) {
      const cfg = state.projectLightConfigs['3137'];
      if (cfg.scale === 1.6 || cfg.width === '13.60%' || cfg.left === '44.55%') {
        state.projectLightConfigs['3137'] = { ...DEFAULT_PROJECT_LIGHT_CONFIGS['3137'] };
        try {
          localStorage.setItem('ambient_light_project_configs', JSON.stringify(state.projectLightConfigs));
        } catch (e) {}
      }
    }
    const savedCurrent = localStorage.getItem('ambient_light_current_project');
    if (savedCurrent && state.projects.includes(savedCurrent)) {
      state.currentProject = savedCurrent;
    }

    // 读取多项目专属模式灯效方案
    const savedProjectScenes = localStorage.getItem('ambient_light_project_scenes');
    if (savedProjectScenes) {
      state.projectScenes = JSON.parse(savedProjectScenes) || {};
    }

    // 读取多项目专属已启用的模式灯效配置 (白名单多选)
    const savedEnabled = localStorage.getItem('ambient_light_project_enabled_effects');
    if (savedEnabled) {
      state.projectEnabledEffects = JSON.parse(savedEnabled) || {};
    }
    // 升级充电模式与音乐模式的候选灯效列表，确保新增的呼吸、脉动和律动能够平滑默认支持
    if (state.projectEnabledEffects) {
      Object.keys(state.projectEnabledEffects).forEach(pId => {
        const pMap = state.projectEnabledEffects[pId];
        if (pMap && pMap.charging) {
          ['breathing', 'pulsing'].forEach(eff => {
            if (!pMap.charging.includes(eff)) {
              pMap.charging.push(eff);
            }
          });
        }
        if (pMap && pMap.music) {
          if (!pMap.music.includes('rhythm')) {
            pMap.music.push('rhythm');
          }
        }
      });
    }
  } catch (e) {
    console.warn('Error reading project storage', e);
  }

  ensureAllProjectsHaveScenes();
  loadCurrentProjectScenes();

  renderProjectOptions();
  updateResetDiagramButtonVisibility();
  applyProjectLightConfig(state.currentProject);
  updateAllMockupImages();
  setupMockupClickCalibration();
  refreshAllScenesUI();
  updateAllSceneCapsulesVisibility();
}

/**
 * 渲染项目下拉选项列表
 */
function renderProjectOptions() {
  const select = document.getElementById('desktopProjectSelect');
  if (!select) return;
  const currentVal = state.currentProject;
  const isZh = state.lang === 'zh-CN';
  select.innerHTML = '';

  state.projects.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    select.appendChild(opt);
  });

  const optUpload = document.createElement('option');
  optUpload.value = '__upload__';
  optUpload.textContent = isZh ? '📁 更换示意图...' : '📁 Change Diagram...';
  select.appendChild(optUpload);

  const optNew = document.createElement('option');
  optNew.value = '__new_project__';
  optNew.textContent = isZh ? '➕ 新增项目型号...' : '➕ New Project...';
  select.appendChild(optNew);

  select.value = currentVal;
}

/**
 * 响应项目下拉菜单选择变化
 */
function handleProjectDropdownChange(val) {
  const select = document.getElementById('desktopProjectSelect');
  if (val === '__upload__') {
    if (select) select.value = state.currentProject;
    const fileInput = document.getElementById('projectDiagramUploader');
    if (fileInput) fileInput.click();
    return;
  }
  if (val === '__new_project__') {
    if (select) select.value = state.currentProject;
    const isZh = state.lang === 'zh-CN';
    const newName = prompt(isZh ? '请输入新项目型号名称 (如 GQ5024):' : 'Enter new project model name (e.g. GQ5024):', '');
    if (newName && newName.trim()) {
      addNewProject(newName.trim());
    }
    return;
  }
  switchProject(val);
}

/**
 * 切换当前项目型号
 */
function switchProject(projectId) {
  // 1. 保存前一个项目的各模式配置
  saveCurrentProjectScenes();

  // 2. 切换当前项目
  state.currentProject = projectId;
  try {
    localStorage.setItem('ambient_light_current_project', projectId);
  } catch (e) {}
  const select = document.getElementById('desktopProjectSelect');
  if (select) select.value = projectId;

  // 3. 载入新项目的专属各模式灯效与配置
  loadCurrentProjectScenes();

  // 4. 更新示意图、灯圈物理位置
  updateResetDiagramButtonVisibility();
  applyProjectLightConfig(projectId);
  updateAllMockupImages();

  // 5. 全面刷新所有场景模式的 UI 胶囊选中态、右上角提示文本、Mockup 动效与胶囊显隐
  refreshAllScenesUI();
  updateAllSceneCapsulesVisibility();

  // 6. 如果模式灯效弹窗已展开，实时刷新弹窗
  if (isProjectEffectsModalOpen()) {
    renderProjectEffectsModal();
  }

  // 7. Toast 提示
  const isZh = state.lang === 'zh-CN';
  showUploadToast(isZh ? `已切换至项目 ${projectId}，已载入该项目的专属模式灯效` : `Switched to project ${projectId}, loaded project mode effects`);
}

/**
 * 新增项目型号
 */
function addNewProject(projectName) {
  if (!state.projects.includes(projectName)) {
    state.projects.push(projectName);
    try {
      localStorage.setItem('ambient_light_projects_list', JSON.stringify(state.projects));
    } catch (e) {
      console.warn('Failed to save project list', e);
    }
    // 为新项目初始化独立的模式灯效配置
    if (!state.projectScenes[projectName]) {
      state.projectScenes[projectName] = JSON.parse(JSON.stringify(DEFAULT_PROJECT_SCENES['GQ5023']));
      try {
        localStorage.setItem('ambient_light_project_scenes', JSON.stringify(state.projectScenes));
      } catch (e) {}
    }
    renderProjectOptions();
  }
  switchProject(projectName);
  showUploadToast((state.lang === 'zh-CN' ? '已创建项目 ' : 'Project created: ') + projectName);
}

/**
 * 处理用户上传自定义示意图并自动识别发光灯位与尺寸
 */
function handleProjectDiagramUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    state.customDiagrams[state.currentProject] = dataUrl;
    try {
      localStorage.setItem('ambient_light_custom_diagrams', JSON.stringify(state.customDiagrams));
    } catch (err) {
      console.warn('localStorage quota exceeded for custom diagram', err);
    }

    // 载入新上传图片并自动识别发光区域
    const tempImg = new Image();
    tempImg.onload = function() {
      const detected = autoDetectLightRingFromImage(tempImg);
      const curConf = getProjectLightConfig(state.currentProject);
      if (detected) {
        curConf.left = detected.left;
        curConf.top = detected.top;
        curConf.width = detected.width;
        curConf.scale = 1.0;
        // 如果检测到并清除了原图中的彩色指示圈，保存无双圈的干净底图
        if (detected.cleanedDataUrl) {
          state.customDiagrams[state.currentProject] = detected.cleanedDataUrl;
          try {
            localStorage.setItem('ambient_light_custom_diagrams', JSON.stringify(state.customDiagrams));
          } catch (e) {}
        }
        saveProjectLightConfig(state.currentProject, curConf);
        applyProjectLightConfig(state.currentProject);
        showUploadToast((state.lang === 'zh-CN' ? '已自动识别灯位并消减双圈: ' : 'Auto-detected light (single ring): ') + `${detected.left}, ${detected.top}`);
      } else {
        curConf.scale = 1.0;
        saveProjectLightConfig(state.currentProject, curConf);
        applyProjectLightConfig(state.currentProject);
        showUploadToast(state.lang === 'zh-CN' ? '已更新示意图，可点击【🎯 调整灯位】快速对齐' : 'Diagram updated. Click Adjust Light to calibrate');
      }
      updateResetDiagramButtonVisibility();
      updateAllMockupImages();
    };
    tempImg.src = dataUrl;
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

/**
 * 恢复当前项目的默认示意图及灯位
 */
function resetCurrentProjectDiagram() {
  if (state.customDiagrams[state.currentProject]) {
    delete state.customDiagrams[state.currentProject];
    try {
      localStorage.setItem('ambient_light_custom_diagrams', JSON.stringify(state.customDiagrams));
    } catch (e) {
      console.warn(e);
    }
  }

  resetCurrentProjectLightConfig();
  updateResetDiagramButtonVisibility();
  updateAllMockupImages();
  showUploadToast((state.lang === 'zh-CN' ? '已恢复 ' : 'Reset diagram for ') + state.currentProject + (state.lang === 'zh-CN' ? ' 默认示意图与灯位' : ' default diagram & light'));
}

/**
 * 根据是否包含自定义示意图决定是否显示恢复默认按钮
 */
function updateResetDiagramButtonVisibility() {
  const btn = document.getElementById('btnResetProjectDiagram');
  if (!btn) return;
  const hasCustom = !!state.customDiagrams[state.currentProject];
  btn.style.display = hasCustom ? 'inline-flex' : 'none';
}

/**
 * 获取指定场景和通断状态下的示意图路径
 */
function getProjectMockupSrc(sceneId, isOff) {
  const customImg = state.customDiagrams[state.currentProject];
  if (customImg) {
    return customImg;
  }
  if (state.currentProject === '3137') {
    return './assets/device_3137.png';
  }
  return isOff ? './assets/device_clean_off.png' : './assets/device_clean.png';
}

/**
 * 更新所有场景中的物理示意图
 */
function updateAllMockupImages() {
  const scenes = ['home', 'call', 'notification', 'charging', 'music', 'power'];
  scenes.forEach(sceneId => {
    const mockup = document.getElementById(`mockup_${sceneId}`);
    if (!mockup) return;
    const img = mockup.querySelector('.device-clean-img');
    if (!img) return;

    let isOff = false;
    if (sceneId === 'home') {
      isOff = !state.scenes.home.enabled;
    } else {
      isOff = !state.scenes[sceneId]?.enabled;
    }
    img.src = getProjectMockupSrc(sceneId, isOff);
  });
}

/**
 * 浮动 Toast 提示
 */
function showUploadToast(message) {
  let toast = document.getElementById('floatingUploadToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'floatingUploadToast';
    toast.className = 'floating-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}
