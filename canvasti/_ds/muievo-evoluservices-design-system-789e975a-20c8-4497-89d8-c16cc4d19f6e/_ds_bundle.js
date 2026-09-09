/* @ds-bundle: {"format":3,"namespace":"MuiEVOEvoluServicesDesignSystem_789e97","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"CircularProgress","sourcePath":"components/feedback/CircularProgress.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"AppBar","sourcePath":"components/surfaces/AppBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Table","sourcePath":"components/surfaces/Table.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8ba8eadac2de","components/core/Button.jsx":"c79aa4681349","components/core/Chip.jsx":"9b899803703d","components/core/IconButton.jsx":"3a34b91a4d26","components/feedback/Alert.jsx":"7c58ce2d7bdd","components/feedback/CircularProgress.jsx":"354da868c1fa","components/feedback/Dialog.jsx":"3404387a0464","components/feedback/Tooltip.jsx":"5b1109f92663","components/forms/Checkbox.jsx":"6360fcc80c19","components/forms/RadioGroup.jsx":"a0cde34f8bc0","components/forms/Select.jsx":"554a8c7b5c53","components/forms/Switch.jsx":"268c46f2fad6","components/forms/TextField.jsx":"f08eb97558f0","components/surfaces/AppBar.jsx":"dfd5e1bece5f","components/surfaces/Card.jsx":"0b0fd6e4b9dc","components/surfaces/Table.jsx":"c58cbef4b829","components/surfaces/Tabs.jsx":"fed915fb758c","ui_kits/merchant/App.jsx":"cfeb8dd29f74","ui_kits/merchant/DashboardScreen.jsx":"efcc014b74dd","ui_kits/merchant/LoginScreen.jsx":"03f1b330a0da","ui_kits/merchant/SalesScreen.jsx":"4e7f8aa2173c","ui_kits/merchant/data.js":"6ae5762ba710"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MuiEVOEvoluServicesDesignSystem_789e97 = window.MuiEVOEvoluServicesDesignSystem_789e97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const CSS = `
.evo-badge { position: relative; display: inline-flex; }
.evo-badge__dot {
  position: absolute; top: 0; right: 0; transform: translate(50%, -50%);
  font-family: var(--evo-font-family); font-size: 11px; font-weight: var(--evo-fw-semibold);
  min-width: 20px; height: 20px; padding: 0 6px; border-radius: var(--evo-radius-pill);
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--evo-secondary-main); color: #fff; line-height: 1;
}
.evo-badge__dot--primary { background: var(--evo-primary-main); }
.evo-badge__dot--error { background: var(--evo-error-main); }
.evo-badge__dot--success { background: var(--evo-success-main); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'badge');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  badgeContent = 0,
  color = 'secondary',
  max = 99,
  showZero = false,
  children
}) {
  useStyles();
  const display = badgeContent > max ? `${max}+` : badgeContent;
  const visible = badgeContent > 0 || showZero;
  return /*#__PURE__*/React.createElement("span", {
    className: "evo-badge"
  }, children, visible && /*#__PURE__*/React.createElement("span", {
    className: ['evo-badge__dot', color !== 'secondary' ? `evo-badge__dot--${color}` : ''].filter(Boolean).join(' ')
  }, display));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-btn {
  font-family: var(--evo-font-family);
  font-size: var(--evo-button-size);
  font-weight: var(--evo-button-weight);
  letter-spacing: var(--evo-button-spacing);
  line-height: var(--evo-button-line);
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: var(--evo-radius-button);
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color var(--evo-duration-short) var(--evo-ease-standard),
              border-color var(--evo-duration-short) var(--evo-ease-standard),
              color var(--evo-duration-short) var(--evo-ease-standard);
}
.evo-btn--md { min-height: 36px; padding: 6px 16px; }
.evo-btn--sm { min-height: 30px; padding: 4px 10px; font-size: 11px; }
.evo-btn--lg { min-height: 42px; padding: 8px 22px; font-size: 13px; }
.evo-btn--full { width: 100%; }
.evo-btn:disabled { cursor: default; pointer-events: none; }

/* contained */
.evo-btn--contained.evo-btn--primary { background: var(--evo-primary-main); color: var(--evo-primary-contrast); }
.evo-btn--contained.evo-btn--primary:hover { background: var(--evo-primary-dark); }
.evo-btn--contained.evo-btn--secondary { background: var(--evo-secondary-main); color: var(--evo-secondary-contrast); }
.evo-btn--contained.evo-btn--secondary:hover { background: #cf6217; }
.evo-btn--contained.evo-btn--destructive { background: var(--evo-error-main); color: var(--evo-error-contrast); }
.evo-btn--contained.evo-btn--destructive:hover { background: var(--evo-error-dark); }
.evo-btn--contained:disabled { background: var(--evo-action-disabled-bg); color: var(--evo-text-disabled); }

/* outlined */
.evo-btn--outlined { background: transparent; border-color: var(--evo-divider); }
.evo-btn--outlined.evo-btn--primary { color: var(--evo-primary-main); }
.evo-btn--outlined.evo-btn--secondary { color: var(--evo-secondary-main); }
.evo-btn--outlined.evo-btn--destructive { color: var(--evo-error-main); }
.evo-btn--outlined:hover { background: var(--evo-action-hover); border-color: var(--evo-divider); }
.evo-btn--outlined:disabled { color: var(--evo-text-disabled); border-color: var(--evo-divider); }

/* text */
.evo-btn--text { background: transparent; }
.evo-btn--text.evo-btn--primary { color: var(--evo-primary-main); }
.evo-btn--text.evo-btn--secondary { color: var(--evo-secondary-main); }
.evo-btn--text.evo-btn--destructive { color: var(--evo-error-main); }
.evo-btn--text:hover { background: var(--evo-action-hover); }
.evo-btn--text:disabled { color: var(--evo-text-disabled); }

.evo-btn--inherit { color: inherit; }
.evo-btn--contained.evo-btn--inherit { background: rgba(0,0,0,0.08); }

.evo-btn__spinner {
  width: 16px; height: 16px; flex: none;
  border: 2px solid currentColor; border-right-color: transparent;
  border-radius: 50%; animation: evo-btn-spin 0.7s linear infinite;
}
@keyframes evo-btn-spin { to { transform: rotate(360deg); } }
.evo-btn__icon { display: inline-flex; font-size: 18px; line-height: 0; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'button');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  label,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  type = 'button',
  href,
  target,
  onClick,
  ...rest
}) {
  useStyles();
  const sizeClass = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const className = ['evo-btn', `evo-btn--${variant}`, `evo-btn--${color}`, `evo-btn--${sizeClass}`, fullWidth ? 'evo-btn--full' : ''].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("span", {
    className: "evo-btn__spinner",
    "aria-hidden": "true"
  }), !loading && startIcon && /*#__PURE__*/React.createElement("span", {
    className: "evo-btn__icon"
  }, startIcon), /*#__PURE__*/React.createElement("span", null, label), !loading && endIcon && /*#__PURE__*/React.createElement("span", {
    className: "evo-btn__icon"
  }, endIcon));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: className,
      href: href,
      target: target,
      rel: target === '_blank' ? 'noopener noreferrer' : undefined,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    type: type,
    disabled: disabled || loading,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-chip {
  font-family: var(--evo-font-family);
  display: inline-flex; align-items: center; gap: 6px;
  height: 24px; padding: 0 10px; border-radius: var(--evo-radius-pill);
  font-size: 13px; font-weight: var(--evo-fw-regular); line-height: 1;
  border: 1px solid transparent; white-space: nowrap;
}
.evo-chip--sm { height: 20px; padding: 0 8px; font-size: 12px; }
.evo-chip__icon { font-size: 16px; line-height: 0; display: inline-flex; margin-left: -2px; }
.evo-chip__del {
  font-size: 16px; line-height: 0; display: inline-flex; cursor: pointer;
  margin-right: -4px; opacity: 0.6; border: none; background: none; padding: 0; color: inherit;
}
.evo-chip__del:hover { opacity: 1; }

/* filled */
.evo-chip--filled.evo-chip--default { background: var(--evo-action-disabled-bg); color: var(--evo-text-primary); }
.evo-chip--filled.evo-chip--primary { background: var(--evo-primary-main); color: #fff; }
.evo-chip--filled.evo-chip--secondary { background: var(--evo-secondary-main); color: #fff; }
.evo-chip--filled.evo-chip--success { background: var(--evo-success-light); color: var(--evo-success-dark); }
.evo-chip--filled.evo-chip--warning { background: var(--evo-warning-light); color: var(--evo-warning-dark); }
.evo-chip--filled.evo-chip--error { background: var(--evo-error-light); color: var(--evo-error-dark); }

/* outlined */
.evo-chip--outlined { background: transparent; }
.evo-chip--outlined.evo-chip--default { border-color: var(--evo-divider); color: var(--evo-text-primary); }
.evo-chip--outlined.evo-chip--primary { border-color: var(--evo-primary-main); color: var(--evo-primary-main); }
.evo-chip--outlined.evo-chip--secondary { border-color: var(--evo-secondary-main); color: var(--evo-secondary-main); }
.evo-chip--outlined.evo-chip--success { border-color: var(--evo-success-main); color: var(--evo-success-dark); }
.evo-chip--outlined.evo-chip--warning { border-color: var(--evo-warning-main); color: var(--evo-warning-dark); }
.evo-chip--outlined.evo-chip--error { border-color: var(--evo-error-main); color: var(--evo-error-dark); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'chip');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Chip({
  label,
  color = 'default',
  variant = 'filled',
  size = 'medium',
  icon,
  onDelete,
  onClick,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['evo-chip', `evo-chip--${variant}`, `evo-chip--${color}`, size === 'small' ? 'evo-chip--sm' : ''].filter(Boolean).join(' '),
    onClick: onClick,
    style: onClick ? {
      cursor: 'pointer'
    } : undefined
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "evo-chip__icon"
  }, icon), label, onDelete && /*#__PURE__*/React.createElement("button", {
    className: "evo-chip__del",
    onClick: e => {
      e.stopPropagation();
      onDelete(e);
    },
    "aria-label": "Remover"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-iconbtn {
  font-family: var(--evo-font-family);
  display: inline-flex; align-items: center; justify-content: center;
  border: none; background: transparent; cursor: pointer;
  border-radius: 50%; color: var(--evo-text-secondary);
  transition: background-color var(--evo-duration-short) var(--evo-ease-standard),
              color var(--evo-duration-short) var(--evo-ease-standard);
}
.evo-iconbtn:hover { background: var(--evo-action-hover); }
.evo-iconbtn:disabled { color: var(--evo-text-disabled); cursor: default; pointer-events: none; }
.evo-iconbtn--small { width: 30px; height: 30px; font-size: 18px; }
.evo-iconbtn--medium { width: 40px; height: 40px; font-size: 22px; }
.evo-iconbtn--large { width: 48px; height: 48px; font-size: 28px; }
.evo-iconbtn--primary { color: var(--evo-primary-main); }
.evo-iconbtn--secondary { color: var(--evo-secondary-main); }
.evo-iconbtn--error { color: var(--evo-error-main); }
.evo-iconbtn--success { color: var(--evo-success-main); }
.evo-iconbtn--warning { color: var(--evo-warning-main); }
.evo-iconbtn--inherit { color: inherit; }
.evo-iconbtn > * { line-height: 0; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'iconbutton');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  icon,
  color = 'default',
  size = 'medium',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  ...rest
}) {
  useStyles();
  const colorClass = color === 'default' ? '' : `evo-iconbtn--${color}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: ['evo-iconbtn', `evo-iconbtn--${size}`, colorClass].filter(Boolean).join(' '),
    disabled: disabled,
    onClick: onClick,
    "aria-label": ariaLabel
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ICONS = {
  error: 'error',
  info: 'info',
  success: 'check_circle',
  warning: 'warning'
};
const CSS = `
.evo-alert {
  font-family: var(--evo-font-family); display: flex; gap: 12px; align-items: flex-start;
  padding: 10px 16px; border-radius: var(--evo-radius); font-size: 14px; font-weight: var(--evo-fw-medium);
  line-height: 1.43;
}
.evo-alert__icon { line-height: 0; margin-top: 1px; }
.evo-alert__icon .material-symbols-rounded { font-size: 22px; }
.evo-alert__body { flex: 1; min-width: 0; }
.evo-alert__title { font-weight: var(--evo-fw-bold); margin-bottom: 2px; }
.evo-alert__action { margin-left: auto; line-height: 0; }
.evo-alert__close { border: none; background: none; cursor: pointer; color: inherit; opacity: .7; padding: 2px; line-height: 0; display: inline-flex; }
.evo-alert__close:hover { opacity: 1; }
.evo-alert--error { background: var(--evo-error-light); color: var(--evo-error-dark); }
.evo-alert--success { background: var(--evo-success-light); color: var(--evo-success-dark); }
.evo-alert--warning { background: var(--evo-warning-light); color: var(--evo-warning-dark); }
.evo-alert--info { background: var(--evo-info-light); color: var(--evo-primary-dark); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'alert');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Alert({
  severity = 'success',
  title,
  children,
  action,
  onClose,
  open = true
}) {
  useStyles();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `evo-alert evo-alert--${severity}`,
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "evo-alert__icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded"
  }, ICONS[severity])), /*#__PURE__*/React.createElement("div", {
    className: "evo-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "evo-alert__title"
  }, title), children), action && /*#__PURE__*/React.createElement("div", {
    className: "evo-alert__action"
  }, action), onClose && !action && /*#__PURE__*/React.createElement("button", {
    className: "evo-alert__close",
    onClick: onClose,
    "aria-label": "Fechar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20
    }
  }, "close")));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CircularProgress.jsx
try { (() => {
const CSS = `
.evo-spinner { display: inline-block; }
.evo-spinner svg { animation: evo-spin 1.4s linear infinite; }
.evo-spinner circle { animation: evo-dash 1.4s ease-in-out infinite; stroke-linecap: round; }
@keyframes evo-spin { 100% { transform: rotate(360deg); } }
@keyframes evo-dash {
  0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 100, 200; stroke-dashoffset: -15px; }
  100% { stroke-dasharray: 100, 200; stroke-dashoffset: -125px; }
}
`;
const COLORS = {
  primary: 'var(--evo-primary-main)',
  secondary: 'var(--evo-secondary-main)',
  inherit: 'currentColor'
};
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'spinner');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function CircularProgress({
  size = 40,
  thickness = 3.6,
  color = 'primary'
}) {
  useStyles();
  const r = (44 - thickness) / 2;
  return /*#__PURE__*/React.createElement("span", {
    className: "evo-spinner",
    role: "progressbar",
    style: {
      width: size,
      height: size,
      color: COLORS[color] || color
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "22 22 44 44",
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: r,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: thickness
  })));
}
Object.assign(__ds_scope, { CircularProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CircularProgress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.evo-dialog__backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1300;
  display: flex; align-items: center; justify-content: center; padding: 24px;
  animation: evo-fade var(--evo-duration-standard) var(--evo-ease-out);
}
@keyframes evo-fade { from { opacity: 0; } to { opacity: 1; } }
.evo-dialog {
  font-family: var(--evo-font-family); background: var(--surface-card); border-radius: var(--evo-radius);
  box-shadow: var(--evo-elevation-24); width: 100%; max-height: calc(100vh - 64px);
  display: flex; flex-direction: column; overflow: hidden;
  animation: evo-pop var(--evo-duration-standard) var(--evo-ease-out);
}
@keyframes evo-pop { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.evo-dialog__head { position: relative; padding: 16px 56px; text-align: center; }
.evo-dialog__title { font-size: var(--evo-h2-size); font-weight: var(--evo-h2-weight); letter-spacing: var(--evo-h2-spacing); color: var(--evo-text-primary); margin: 0; }
.evo-dialog__close { position: absolute; right: 8px; top: 10px; border: none; background: none; cursor: pointer; color: var(--evo-text-secondary); padding: 6px; border-radius: 50%; display: inline-flex; line-height: 0; }
.evo-dialog__close:hover { background: var(--evo-action-hover); }
.evo-dialog__divider { height: 1px; background: var(--evo-divider); margin: 0 16px; }
.evo-dialog__content { padding: 24px 48px; overflow-y: auto; color: var(--evo-text-primary); font-size: 14px; line-height: 1.5; }
.evo-dialog__actions { display: flex; justify-content: flex-end; gap: 24px; padding: 24px; }
`;
const WIDTHS = {
  xs: 444,
  sm: 600,
  md: 900,
  lg: 1200
};
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'dialog');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dialog({
  open,
  title,
  children,
  actions,
  width = 'sm',
  onClose
}) {
  useStyles();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog__backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose?.();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog",
    style: {
      maxWidth: WIDTHS[width]
    },
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "evo-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "evo-dialog__close",
    onClick: onClose,
    "aria-label": "Fechar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22
    }
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog__content"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "evo-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS = `
.evo-tooltip { position: relative; display: inline-flex; }
.evo-tooltip__pop {
  position: absolute; z-index: 1500; font-family: var(--evo-font-family); font-size: 11px; font-weight: var(--evo-fw-medium);
  line-height: 1.4; color: #fff; background: rgba(66,66,66,0.94); padding: 5px 9px; border-radius: var(--evo-radius-sm);
  max-width: 240px; width: max-content; pointer-events: none; opacity: 0;
  transition: opacity var(--evo-duration-short) var(--evo-ease-standard);
}
.evo-tooltip__pop--show { opacity: 1; }
.evo-tooltip__pop--top { bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%); }
.evo-tooltip__pop--bottom { top: calc(100% + 6px); left: 50%; transform: translateX(-50%); }
.evo-tooltip__pop--left { right: calc(100% + 6px); top: 50%; transform: translateY(-50%); }
.evo-tooltip__pop--right { left: calc(100% + 6px); top: 50%; transform: translateY(-50%); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'tooltip');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tooltip({
  title,
  placement = 'top',
  children
}) {
  useStyles();
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: "evo-tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, title && /*#__PURE__*/React.createElement("span", {
    className: ['evo-tooltip__pop', `evo-tooltip__pop--${placement}`, show ? 'evo-tooltip__pop--show' : ''].filter(Boolean).join(' '),
    role: "tooltip"
  }, title));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-check { font-family: var(--evo-font-family); display: inline-flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; font-size: 14px; color: var(--evo-text-primary); }
.evo-check--disabled { color: var(--evo-text-disabled); cursor: not-allowed; }
.evo-check__box {
  width: 18px; height: 18px; flex: none; border-radius: 3px; border: 2px solid var(--evo-text-secondary);
  display: inline-flex; align-items: center; justify-content: center; color: #fff;
  transition: background-color var(--evo-duration-short), border-color var(--evo-duration-short);
}
.evo-check__box .material-symbols-rounded { font-size: 16px; }
.evo-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.evo-check input:checked + .evo-check__box,
.evo-check input:indeterminate + .evo-check__box { background: var(--evo-primary-main); border-color: var(--evo-primary-main); }
.evo-check--disabled .evo-check__box { border-color: var(--evo-text-disabled); }
.evo-check--disabled input:checked + .evo-check__box { background: var(--evo-text-disabled); border-color: var(--evo-text-disabled); }
.evo-check__glyph { opacity: 0; }
.evo-check input:checked + .evo-check__box .evo-check__check,
.evo-check input:indeterminate + .evo-check__box .evo-check__dash { opacity: 1; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'checkbox');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  ...rest
}) {
  useStyles();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: ['evo-check', disabled ? 'evo-check--disabled' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange ? e => onChange(e, e.target.checked) : undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "evo-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded evo-check__glyph evo-check__check"
  }, "check"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded evo-check__glyph evo-check__dash",
    style: {
      position: 'absolute'
    }
  }, "remove")), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
const CSS = `
.evo-radio-group { font-family: var(--evo-font-family); display: flex; flex-direction: column; gap: 8px; border: none; padding: 0; margin: 0; }
.evo-radio-group--row { flex-direction: row; gap: 20px; }
.evo-radio-group__legend { font-size: 12px; font-weight: var(--evo-fw-semibold); color: var(--evo-text-secondary); margin-bottom: 4px; padding: 0; }
.evo-radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; font-size: 14px; color: var(--evo-text-primary); }
.evo-radio--disabled { color: var(--evo-text-disabled); cursor: not-allowed; }
.evo-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.evo-radio__dot { width: 18px; height: 18px; flex: none; border-radius: 50%; border: 2px solid var(--evo-text-secondary); display: inline-flex; align-items: center; justify-content: center; transition: border-color var(--evo-duration-short); }
.evo-radio__dot::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--evo-primary-main); transform: scale(0); transition: transform var(--evo-duration-short) var(--evo-ease-standard); }
.evo-radio input:checked + .evo-radio__dot { border-color: var(--evo-primary-main); }
.evo-radio input:checked + .evo-radio__dot::after { transform: scale(1); }
.evo-radio--disabled .evo-radio__dot { border-color: var(--evo-text-disabled); }
.evo-radio-group__help { font-size: 11px; color: var(--evo-text-secondary); margin-top: 6px; }
.evo-radio-group__help--err { color: var(--evo-error-main); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'radiogroup');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function RadioGroup({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  row = false,
  disabled = false,
  name,
  helperText,
  errorText
}) {
  useStyles();
  const groupName = React.useMemo(() => name || `evo-radio-${Math.random().toString(36).slice(2, 8)}`, [name]);
  const isError = !!errorText;
  return /*#__PURE__*/React.createElement("fieldset", {
    className: ['evo-radio-group', row ? 'evo-radio-group--row' : ''].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("legend", {
    className: "evo-radio-group__legend"
  }, label), options.map(opt => {
    const optDisabled = disabled || opt.disabled;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      className: ['evo-radio', optDisabled ? 'evo-radio--disabled' : ''].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      value: opt.value,
      checked: value != null ? value === opt.value : undefined,
      defaultChecked: defaultValue != null ? defaultValue === opt.value : undefined,
      disabled: optDisabled,
      onChange: onChange ? e => onChange(e, opt.value) : undefined
    }), /*#__PURE__*/React.createElement("span", {
      className: "evo-radio__dot"
    }), /*#__PURE__*/React.createElement("span", null, opt.label));
  }), (errorText || helperText) && /*#__PURE__*/React.createElement("div", {
    className: ['evo-radio-group__help', isError ? 'evo-radio-group__help--err' : ''].filter(Boolean).join(' ')
  }, errorText || helperText));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const CSS = `
.evo-select { font-family: var(--evo-font-family); display: inline-flex; flex-direction: column; position: relative; }
.evo-select--full { width: 100%; }
.evo-select__label { font-size: 12px; font-weight: var(--evo-fw-semibold); color: var(--evo-text-secondary); margin-bottom: 6px; }
.evo-select__req { color: var(--evo-error-main); margin-left: 2px; }
.evo-select__control {
  display: flex; align-items: center; gap: 8px; width: 100%;
  font-family: inherit; font-size: 14px; color: var(--evo-text-primary); text-align: left;
  background: var(--surface-card); border: 1px solid var(--evo-divider); border-radius: var(--evo-radius-sm);
  padding: 9px 12px; cursor: pointer; min-height: 40px;
  transition: border-color var(--evo-duration-short);
}
.evo-select__control:hover:not(:disabled) { border-color: rgba(0,0,0,0.4); }
.evo-select__control--open { border-color: var(--evo-primary-main); box-shadow: 0 0 0 1px var(--evo-primary-main); }
.evo-select__control--err { border-color: var(--evo-error-main); }
.evo-select__control:disabled { color: var(--evo-text-disabled); cursor: not-allowed; }
.evo-select__value { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.evo-select__value--ph { color: var(--evo-text-disabled); }
.evo-select__arrow { color: var(--evo-text-secondary); line-height: 0; transition: transform var(--evo-duration-short); }
.evo-select__control--open .evo-select__arrow { transform: rotate(180deg); }
.evo-select__menu {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 50;
  background: var(--surface-card); border-radius: var(--evo-radius-sm); box-shadow: var(--evo-elevation-1);
  padding: 4px; max-height: 280px; overflow-y: auto;
}
.evo-select__opt { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: var(--evo-radius-sm); cursor: pointer; font-size: 14px; color: var(--evo-text-primary); }
.evo-select__opt:hover { background: var(--evo-action-hover); }
.evo-select__opt--sel { background: var(--evo-primary-extralight); color: var(--evo-primary-dark); font-weight: var(--evo-fw-semibold); }
.evo-select__help { font-size: 11px; color: var(--evo-text-secondary); margin-top: 4px; }
.evo-select__help--err { color: var(--evo-error-main); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'select');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Selecione…',
  helperText,
  errorText,
  error = false,
  disabled = false,
  required = false,
  fullWidth = true,
  startAdornment
}) {
  useStyles();
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);
  const isError = error || !!errorText;
  const selected = options.find(o => o.value === value);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const pick = opt => {
    setOpen(false);
    onChange?.({
      target: {
        value: opt.value
      }
    }, opt.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    className: ['evo-select', fullWidth ? 'evo-select--full' : ''].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "evo-select__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "evo-select__req"
  }, "*")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: ['evo-select__control', open ? 'evo-select__control--open' : '', isError ? 'evo-select__control--err' : ''].filter(Boolean).join(' '),
    disabled: disabled,
    onClick: () => setOpen(o => !o)
  }, startAdornment, /*#__PURE__*/React.createElement("span", {
    className: ['evo-select__value', selected ? '' : 'evo-select__value--ph'].filter(Boolean).join(' ')
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "evo-select__arrow material-symbols-rounded",
    style: {
      fontSize: 22
    }
  }, "arrow_drop_down")), open && /*#__PURE__*/React.createElement("div", {
    className: "evo-select__menu",
    role: "listbox"
  }, options.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.value,
    role: "option",
    "aria-selected": opt.value === value,
    className: ['evo-select__opt', opt.value === value ? 'evo-select__opt--sel' : ''].filter(Boolean).join(' '),
    onClick: () => pick(opt)
  }, opt.label))), (errorText || helperText) && /*#__PURE__*/React.createElement("div", {
    className: ['evo-select__help', isError ? 'evo-select__help--err' : ''].filter(Boolean).join(' ')
  }, errorText || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-switch { font-family: var(--evo-font-family); display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 14px; color: var(--evo-text-primary); }
.evo-switch--disabled { color: var(--evo-text-disabled); cursor: not-allowed; }
.evo-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.evo-switch__track {
  width: 34px; height: 14px; border-radius: 999px; background: rgba(0,0,0,0.38); position: relative; flex: none;
  transition: background-color var(--evo-duration-short) var(--evo-ease-standard);
}
.evo-switch__thumb {
  position: absolute; top: -3px; left: -1px; width: 20px; height: 20px; border-radius: 50%;
  background: #fafafa; box-shadow: var(--evo-elevation-1);
  transition: transform var(--evo-duration-short) var(--evo-ease-standard), background-color var(--evo-duration-short);
}
.evo-switch input:checked + .evo-switch__track { background: var(--evo-primary-light); }
.evo-switch input:checked + .evo-switch__track .evo-switch__thumb { transform: translateX(16px); background: var(--evo-primary-main); }
.evo-switch--disabled .evo-switch__track { background: rgba(0,0,0,0.12); }
.evo-switch--disabled .evo-switch__thumb { background: #e0e0e0; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'switch');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['evo-switch', disabled ? 'evo-switch--disabled' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange ? e => onChange(e, e.target.checked) : undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "evo-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "evo-switch__thumb"
  })), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-tf { font-family: var(--evo-font-family); display: inline-flex; flex-direction: column; }
.evo-tf--full { width: 100%; }
.evo-tf__wrap { position: relative; display: flex; align-items: center; }
.evo-tf__field {
  width: 100%; font-family: inherit; font-size: 14px; color: var(--evo-text-primary);
  background: var(--surface-card); border: 1px solid var(--evo-divider); border-radius: var(--evo-radius-sm);
  padding: 9px 12px; outline: none; line-height: 1.4;
  transition: border-color var(--evo-duration-short) var(--evo-ease-standard);
}
.evo-tf__field::placeholder { color: var(--evo-text-disabled); }
.evo-tf__wrap:hover .evo-tf__field:not(:disabled):not(.evo-tf__field--err) { border-color: rgba(0,0,0,0.4); }
.evo-tf__field:focus { border-color: var(--evo-primary-main); box-shadow: 0 0 0 1px var(--evo-primary-main); }
.evo-tf__field--err { border-color: var(--evo-error-main); }
.evo-tf__field--err:focus { box-shadow: 0 0 0 1px var(--evo-error-main); }
.evo-tf__field:disabled { background: var(--surface-card); color: var(--evo-text-disabled); border-color: var(--evo-divider); cursor: not-allowed; }
.evo-tf__field--has-start { padding-left: 38px; }
.evo-tf__field--has-end { padding-right: 38px; }
textarea.evo-tf__field { resize: vertical; }
.evo-tf__label { font-size: 12px; font-weight: var(--evo-fw-semibold); color: var(--evo-text-secondary); margin-bottom: 6px; }
.evo-tf__req { color: var(--evo-error-main); margin-left: 2px; }
.evo-tf__adorn { position: absolute; display: inline-flex; align-items: center; color: var(--evo-text-secondary); font-size: 13px; pointer-events: none; }
.evo-tf__adorn--start { left: 12px; }
.evo-tf__adorn--end { right: 10px; pointer-events: auto; }
.evo-tf__help { font-size: 11px; color: var(--evo-text-secondary); margin-top: 4px; letter-spacing: .03em; }
.evo-tf__help--err { color: var(--evo-error-main); }
.evo-tf__pw { border: none; background: none; cursor: pointer; color: var(--evo-text-secondary); padding: 4px; display: inline-flex; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'textfield');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function TextField({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  helperText,
  errorText,
  error = false,
  disabled = false,
  required = false,
  type = 'text',
  startAdornment,
  endAdornment,
  multilineRows,
  fullWidth = true,
  id,
  ...rest
}) {
  useStyles();
  const [showPw, setShowPw] = React.useState(false);
  const isError = error || !!errorText;
  const help = errorText || helperText;
  const isMultiline = !!multilineRows;
  const effectiveType = type === 'password' ? showPw ? 'text' : 'password' : type;
  const fieldClass = ['evo-tf__field', isError ? 'evo-tf__field--err' : '', startAdornment ? 'evo-tf__field--has-start' : '', endAdornment || type === 'password' ? 'evo-tf__field--has-end' : ''].filter(Boolean).join(' ');
  const fieldProps = {
    className: fieldClass,
    value,
    defaultValue,
    placeholder,
    disabled,
    id,
    onChange: onChange ? e => onChange(e, e.target.value) : undefined,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['evo-tf', fullWidth ? 'evo-tf--full' : ''].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "evo-tf__label",
    htmlFor: id
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "evo-tf__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "evo-tf__wrap"
  }, startAdornment && /*#__PURE__*/React.createElement("span", {
    className: "evo-tf__adorn evo-tf__adorn--start"
  }, startAdornment), isMultiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: multilineRows
  }, fieldProps)) : /*#__PURE__*/React.createElement("input", _extends({
    type: effectiveType
  }, fieldProps)), type === 'password' && !endAdornment && /*#__PURE__*/React.createElement("span", {
    className: "evo-tf__adorn evo-tf__adorn--end"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "evo-tf__pw",
    onClick: () => setShowPw(s => !s),
    "aria-label": "Mostrar senha"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18
    }
  }, showPw ? 'visibility_off' : 'visibility'))), endAdornment && /*#__PURE__*/React.createElement("span", {
    className: "evo-tf__adorn evo-tf__adorn--end"
  }, endAdornment)), help && /*#__PURE__*/React.createElement("div", {
    className: ['evo-tf__help', isError ? 'evo-tf__help--err' : ''].filter(Boolean).join(' ')
  }, help));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-appbar {
  font-family: var(--evo-font-family); background: var(--evo-primary-main); color: #fff;
  display: flex; align-items: center; gap: 8px; padding: 0 8px 0 16px; min-height: 56px;
}
.evo-appbar__logo { display: inline-flex; align-items: center; margin-right: 8px; flex: none; }
.evo-appbar__nav { display: flex; align-items: stretch; flex: 1; min-width: 0; overflow-x: auto; }
.evo-appbar__tab {
  appearance: none; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 14px; font-weight: var(--evo-fw-medium); color: rgba(255,255,255,0.82);
  padding: 18px 14px; position: relative; white-space: nowrap; text-transform: none;
  transition: color var(--evo-duration-short);
}
.evo-appbar__tab:hover { color: #fff; }
.evo-appbar__tab--active { color: #fff; }
.evo-appbar__tab--active::after {
  content: ''; position: absolute; left: 10px; right: 10px; bottom: 0; height: 3px; background: #fff; border-radius: 3px 3px 0 0;
}
.evo-appbar__right { margin-left: auto; display: inline-flex; align-items: center; gap: 4px; flex: none; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'appbar');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function AppBar({
  logo,
  pages = [],
  currentPage,
  onNavigate,
  rightSlot,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "evo-appbar"
  }, rest), logo && /*#__PURE__*/React.createElement("div", {
    className: "evo-appbar__logo"
  }, logo), /*#__PURE__*/React.createElement("nav", {
    className: "evo-appbar__nav"
  }, pages.map(page => {
    const val = page.value ?? page.href;
    return /*#__PURE__*/React.createElement("a", {
      key: val,
      href: page.href || '#',
      className: ['evo-appbar__tab', currentPage === val ? 'evo-appbar__tab--active' : ''].filter(Boolean).join(' '),
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(val, page);
        }
      }
    }, page.name);
  })), rightSlot && /*#__PURE__*/React.createElement("div", {
    className: "evo-appbar__right"
  }, rightSlot));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-card {
  font-family: var(--evo-font-family); background: var(--surface-card); border-radius: var(--evo-radius);
  color: var(--evo-text-primary); overflow: hidden;
}
.evo-card--outlined { border: 1px solid var(--evo-divider); }
.evo-card--e1 { box-shadow: var(--evo-elevation-1); }
.evo-card--e6 { box-shadow: var(--evo-elevation-6); }
.evo-card--e8 { box-shadow: var(--evo-elevation-8); }
.evo-card--e24 { box-shadow: var(--evo-elevation-24); }
.evo-card__head { padding: 16px 20px; }
.evo-card__title { font-size: var(--evo-h6-size); font-weight: var(--evo-h6-weight); letter-spacing: var(--evo-h6-spacing); margin: 0; }
.evo-card__subtitle { font-size: var(--evo-body2-size); color: var(--evo-text-secondary); margin: 2px 0 0; }
.evo-card__divider { height: 1px; background: var(--evo-divider); }
.evo-card__body { padding: 20px; }
.evo-card__body--p0 { padding: 0; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'card');
  el.textContent = CSS;
  document.head.appendChild(el);
}
const ELEV = {
  0: '',
  1: 'evo-card--e1',
  6: 'evo-card--e6',
  8: 'evo-card--e8',
  24: 'evo-card--e24'
};
function Card({
  title,
  subtitle,
  action,
  elevation = 0,
  outlined = false,
  disableGutters = false,
  children,
  ...rest
}) {
  useStyles();
  const hasHeader = title || subtitle || action;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['evo-card', outlined ? 'evo-card--outlined' : '', ELEV[elevation] || ''].filter(Boolean).join(' ')
  }, rest), hasHeader && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "evo-card__head",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "evo-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "evo-card__subtitle"
  }, subtitle)), action), /*#__PURE__*/React.createElement("div", {
    className: "evo-card__divider"
  })), /*#__PURE__*/React.createElement("div", {
    className: ['evo-card__body', disableGutters ? 'evo-card__body--p0' : ''].filter(Boolean).join(' ')
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Table.jsx
try { (() => {
const CSS = `
.evo-table-wrap { font-family: var(--evo-font-family); width: 100%; overflow-x: auto; }
.evo-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.evo-table th {
  text-align: left; font-weight: var(--evo-fw-bold); font-size: 12px; color: var(--evo-text-secondary);
  letter-spacing: .04em; padding: 12px 16px; border-bottom: 1px solid var(--evo-divider); white-space: nowrap;
}
.evo-table td { padding: 12px 16px; border-bottom: 1px solid var(--evo-divider); color: var(--evo-text-primary); }
.evo-table tbody tr { transition: background-color var(--evo-duration-short); }
.evo-table tbody tr:hover { background: var(--evo-action-hover); }
.evo-table tbody tr:last-child td { border-bottom: none; }
.evo-table--right { text-align: right; }
.evo-table--center { text-align: center; }
.evo-table__empty { padding: 32px 16px; text-align: center; color: var(--evo-text-secondary); }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'table');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Table({
  columns = [],
  rows = [],
  getRowKey,
  onRowClick,
  emptyText = 'Nenhum registro encontrado.'
}) {
  useStyles();
  const alignClass = a => a === 'right' ? 'evo-table--right' : a === 'center' ? 'evo-table--center' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "evo-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "evo-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    className: alignClass(col.align),
    style: col.width ? {
      width: col.width
    } : undefined
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "evo-table__empty",
    colSpan: columns.length
  }, emptyText)) : rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: getRowKey ? getRowKey(row, i) : i,
    onClick: onRowClick ? () => onRowClick(row, i) : undefined,
    style: onRowClick ? {
      cursor: 'pointer'
    } : undefined
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    className: alignClass(col.align)
  }, col.render ? col.render(row[col.key], row, i) : row[col.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Table.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.evo-tabs { font-family: var(--evo-font-family); display: flex; gap: 4px; border-bottom: 1px solid var(--evo-divider); }
.evo-tab {
  appearance: none; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 14px; font-weight: var(--evo-fw-medium); color: var(--evo-text-secondary);
  padding: 12px 16px; position: relative; text-transform: none; white-space: nowrap;
  display: inline-flex; align-items: center; gap: 8px;
  transition: color var(--evo-duration-short);
}
.evo-tab:hover { color: var(--evo-text-primary); }
.evo-tab--active { color: var(--evo-primary-main); }
.evo-tab--active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
  background: var(--evo-primary-main); border-radius: 2px 2px 0 0;
}
.evo-tab:disabled { color: var(--evo-text-disabled); cursor: default; }
.evo-tab__icon { line-height: 0; font-size: 20px; }
`;
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-evo', 'tabs');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  value,
  onChange,
  options = [],
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "evo-tabs",
    role: "tablist"
  }, rest), options.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.value,
    role: "tab",
    "aria-selected": opt.value === value,
    disabled: opt.disabled,
    className: ['evo-tab', opt.value === value ? 'evo-tab--active' : ''].filter(Boolean).join(' '),
    onClick: e => onChange?.(e, opt.value)
  }, opt.icon && /*#__PURE__*/React.createElement("span", {
    className: "evo-tab__icon"
  }, opt.icon), opt.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant/App.jsx
try { (() => {
// App — EVO Merchant shell. Orchestrates login + navigation.
function MerchantApp() {
  const ns = window.MuiEVOEvoluServicesDesignSystem_789e97;
  const {
    AppBar,
    IconButton,
    Badge
  } = ns;
  const D = window.EVO_DATA;
  const {
    useState
  } = React;
  const I = ({
    children,
    size
  }) => /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size || 22
    }
  }, children);
  const [logged, setLogged] = useState(false);
  const [page, setPage] = useState('inicio');
  if (!logged) return /*#__PURE__*/React.createElement(window.LoginScreen, {
    onLogin: () => setLogged(true)
  });
  const avatar = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--evo-secondary-main)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
      marginLeft: 6
    }
  }, D.user.initials);
  const placeholder = label => /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '60px 24px',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 48
  }, "construction"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      marginTop: 12
    }
  }, "A se\xE7\xE3o ", /*#__PURE__*/React.createElement("strong", null, label), " n\xE3o faz parte deste recorte do UI kit."));
  let content;
  if (page === 'inicio') content = /*#__PURE__*/React.createElement(window.DashboardScreen, {
    onAntecipar: () => setPage('vendas'),
    onVerVendas: () => setPage('vendas')
  });else if (page === 'vendas') content = /*#__PURE__*/React.createElement(window.SalesScreen, null);else if (page === 'antecipacoes') content = placeholder('Antecipações');else content = placeholder('Extrato');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    logo: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/evo-logo-white.svg",
      alt: "EvoluServices",
      style: {
        height: 28
      }
    }),
    pages: D.pages,
    currentPage: page,
    onNavigate: v => setPage(v),
    rightSlot: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      badgeContent: 3
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, null, "notifications"),
      color: "inherit",
      "aria-label": "Notifica\xE7\xF5es"
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, null, "help"),
      color: "inherit",
      "aria-label": "Ajuda"
    }), avatar)
  }), content);
}
window.MerchantApp = MerchantApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant/DashboardScreen.jsx
try { (() => {
// DashboardScreen (Início) — EVO Merchant. Exports to window.
function DashboardScreen({
  onAntecipar,
  onVerVendas
}) {
  const ns = window.MuiEVOEvoluServicesDesignSystem_789e97;
  const {
    Card,
    Button,
    Table,
    Chip,
    IconButton
  } = ns;
  const D = window.EVO_DATA;
  const I = ({
    children,
    size
  }) => /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size || 22
    }
  }, children);
  const s = {
    wrap: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '28px 24px 48px'
    },
    hello: {
      fontSize: 'var(--evo-h1-size)',
      fontWeight: 'var(--evo-h1-weight)',
      color: 'var(--text-body)',
      margin: '0 0 2px'
    },
    helloSub: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    },
    kpis: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 16
    },
    kpiLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)',
      letterSpacing: '.02em',
      marginBottom: 8
    },
    kpiVal: {
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--text-body)',
      lineHeight: 1.1
    },
    kpiHint: {
      fontSize: 12,
      marginTop: 6
    },
    cta: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      background: 'linear-gradient(90deg, var(--evo-primary-dark), var(--evo-primary-main))',
      color: '#fff',
      borderRadius: 'var(--evo-radius)',
      padding: '20px 24px',
      marginBottom: 24
    },
    ctaIcon: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    },
    ctaTitle: {
      fontSize: 18,
      fontWeight: 700,
      margin: 0
    },
    ctaSub: {
      fontSize: 13,
      opacity: 0.9,
      margin: '2px 0 0'
    },
    sectionHead: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    },
    sectionTitle: {
      fontSize: 'var(--evo-h4-size)',
      fontWeight: 600,
      color: 'var(--text-body)',
      margin: 0
    }
  };
  const Kpi = ({
    icon,
    label,
    value,
    hint,
    hintColor
  }) => /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: s.kpiLabel
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, icon), label), /*#__PURE__*/React.createElement("div", {
    style: s.kpiVal
  }, value), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.kpiHint,
      color: hintColor || 'var(--text-muted)'
    }
  }, hint));
  return /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("h1", {
    style: s.hello
  }, "Ol\xE1, ", D.user.name.split(' ')[0], " \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: s.helloSub
  }, D.user.company, " \xB7 aqui est\xE1 o resumo do seu neg\xF3cio"), /*#__PURE__*/React.createElement("div", {
    style: s.kpis
  }, /*#__PURE__*/React.createElement(Kpi, {
    icon: "account_balance_wallet",
    label: "RECEBIDO HOJE",
    value: D.kpis.recebidoHoje,
    hint: "\u25B2 12% vs. ontem",
    hintColor: "var(--evo-success-dark)"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "schedule",
    label: "A RECEBER",
    value: D.kpis.aReceber,
    hint: "Pr\xF3x. 30 dias"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "bolt",
    label: "ANTECIP\xC1VEL",
    value: D.kpis.antecipavel,
    hint: "Taxa 1,99%",
    hintColor: "var(--evo-secondary-main)"
  }), /*#__PURE__*/React.createElement(Kpi, {
    icon: "receipt_long",
    label: "VENDAS NO M\xCAS",
    value: D.kpis.vendasMes,
    hint: "Junho/2024"
  })), /*#__PURE__*/React.createElement("div", {
    style: s.cta
  }, /*#__PURE__*/React.createElement("div", {
    style: s.ctaIcon
  }, /*#__PURE__*/React.createElement(I, {
    size: 26
  }, "bolt")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: s.ctaTitle
  }, "Antecipe R$ 4.320,00 hoje"), /*#__PURE__*/React.createElement("p", {
    style: s.ctaSub
  }, "O dinheiro cai na sua conta em minutos, com taxa de 1,99%.")), /*#__PURE__*/React.createElement(Button, {
    label: "Antecipar agora",
    color: "secondary",
    onClick: onAntecipar
  })), /*#__PURE__*/React.createElement("div", {
    style: s.sectionHead
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.sectionTitle
  }, "Vendas recentes"), /*#__PURE__*/React.createElement(Button, {
    label: "Ver todas",
    variant: "text",
    endIcon: /*#__PURE__*/React.createElement(I, {
      size: 18
    }, "arrow_forward"),
    onClick: onVerVendas
  })), /*#__PURE__*/React.createElement(Card, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'hora',
      label: 'Horário',
      width: '90px',
      render: (_, r) => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-muted)'
        }
      }, r.data.slice(0, 5), " \xB7 ", r.hora)
    }, {
      key: 'cliente',
      label: 'Cliente'
    }, {
      key: 'forma',
      label: 'Forma de pagamento'
    }, {
      key: 'bruto',
      label: 'Valor',
      align: 'right'
    }, {
      key: 'status',
      label: 'Status',
      align: 'center',
      render: v => /*#__PURE__*/React.createElement(Chip, {
        label: v[0],
        color: v[1]
      })
    }],
    rows: D.sales.slice(0, 5)
  })));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant/LoginScreen.jsx
try { (() => {
// LoginScreen — EVO Merchant. Exports to window.
function LoginScreen({
  onLogin
}) {
  const {
    TextField,
    Button
  } = window.MuiEVOEvoluServicesDesignSystem_789e97;
  const [loading, setLoading] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 900);
  };
  const loginStyles = {
    page: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--surface-app)'
    },
    card: {
      width: '100%',
      maxWidth: 400,
      background: 'var(--surface-card)',
      borderRadius: 'var(--evo-radius)',
      boxShadow: 'var(--evo-elevation-8)',
      padding: '40px 32px'
    },
    logo: {
      display: 'block',
      height: 44,
      margin: '0 auto 28px'
    },
    title: {
      textAlign: 'center',
      fontSize: 'var(--evo-h4-size)',
      fontWeight: 'var(--evo-h4-weight)',
      color: 'var(--text-body)',
      margin: '0 0 4px'
    },
    sub: {
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 28px'
    },
    fields: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    },
    forgot: {
      display: 'block',
      textAlign: 'right',
      fontSize: 12,
      color: 'var(--evo-primary-main)',
      textDecoration: 'none',
      marginTop: -8,
      fontWeight: 600
    },
    footer: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 24
    },
    link: {
      color: 'var(--evo-primary-main)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: loginStyles.page
  }, /*#__PURE__*/React.createElement("form", {
    style: loginStyles.card,
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/evo-logo.svg",
    alt: "EvoluServices",
    style: loginStyles.logo
  }), /*#__PURE__*/React.createElement("h1", {
    style: loginStyles.title
  }, "Acesse sua conta"), /*#__PURE__*/React.createElement("p", {
    style: loginStyles.sub
  }, "Gerencie suas vendas e recebimentos"), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.fields
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@empresa.com",
    defaultValue: "maria@clinicavida.com.br"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Senha",
    type: "password",
    defaultValue: "123456"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: loginStyles.forgot,
    onClick: e => e.preventDefault()
  }, "Esqueci minha senha"), /*#__PURE__*/React.createElement(Button, {
    label: loading ? 'Entrando…' : 'Entrar',
    type: "submit",
    fullWidth: true,
    loading: loading
  })), /*#__PURE__*/React.createElement("p", {
    style: loginStyles.footer
  }, "Ainda n\xE3o tem conta? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: loginStyles.link,
    onClick: e => e.preventDefault()
  }, "Fale com a gente"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant/SalesScreen.jsx
try { (() => {
// SalesScreen (Vendas) — EVO Merchant. Exports to window.
function SalesScreen() {
  const ns = window.MuiEVOEvoluServicesDesignSystem_789e97;
  const {
    Card,
    Tabs,
    Select,
    TextField,
    Table,
    Chip,
    Dialog,
    Button,
    IconButton,
    Alert
  } = ns;
  const D = window.EVO_DATA;
  const {
    useState
  } = React;
  const I = ({
    children,
    size
  }) => /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size || 22
    }
  }, children);
  const [tab, setTab] = useState('vendas');
  const [periodo, setPeriodo] = useState('30');
  const [query, setQuery] = useState('');
  const [detail, setDetail] = useState(null);
  const [anteciparOpen, setAnteciparOpen] = useState(false);
  const rows = D.sales.filter(r => r.cliente.toLowerCase().includes(query.toLowerCase()));
  const s = {
    wrap: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '28px 24px 48px'
    },
    head: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    title: {
      fontSize: 'var(--evo-h1-size)',
      fontWeight: 'var(--evo-h1-weight)',
      color: 'var(--text-body)',
      margin: 0
    },
    filters: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      padding: 16,
      flexWrap: 'wrap'
    },
    dl: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      rowGap: 12,
      columnGap: 16,
      fontSize: 14
    },
    dt: {
      color: 'var(--text-muted)'
    },
    dd: {
      color: 'var(--text-body)',
      fontWeight: 500,
      textAlign: 'right'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.head
  }, /*#__PURE__*/React.createElement("h1", {
    style: s.title
  }, "Vendas"), /*#__PURE__*/React.createElement(Button, {
    label: "Exportar",
    variant: "outlined",
    startIcon: /*#__PURE__*/React.createElement(I, {
      size: 18
    }, "download")
  })), /*#__PURE__*/React.createElement(Card, {
    disableGutters: true,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: (e, v) => setTab(v),
    options: [{
      value: 'vendas',
      label: 'Todas as vendas'
    }, {
      value: 'antecipacoes',
      label: 'Antecipações'
    }, {
      value: 'estornos',
      label: 'Estornos'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: s.filters
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Per\xEDodo",
    value: periodo,
    onChange: (e, v) => setPeriodo(v),
    options: [{
      value: '7',
      label: 'Últimos 7 dias'
    }, {
      value: '30',
      label: 'Últimos 30 dias'
    }, {
      value: '90',
      label: 'Últimos 90 dias'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Buscar cliente",
    placeholder: "Nome do cliente\u2026",
    value: query,
    onChange: (e, v) => setQuery(v),
    startAdornment: /*#__PURE__*/React.createElement(I, {
      size: 18
    }, "search")
  })))), /*#__PURE__*/React.createElement(Card, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'id',
      label: 'ID',
      width: '84px',
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-muted)',
          fontVariantNumeric: 'tabular-nums'
        }
      }, v)
    }, {
      key: 'data',
      label: 'Data'
    }, {
      key: 'cliente',
      label: 'Cliente'
    }, {
      key: 'bandeira',
      label: 'Bandeira'
    }, {
      key: 'forma',
      label: 'Pagamento'
    }, {
      key: 'liquido',
      label: 'Líquido',
      align: 'right'
    }, {
      key: 'status',
      label: 'Status',
      align: 'center',
      render: v => /*#__PURE__*/React.createElement(Chip, {
        label: v[0],
        color: v[1]
      })
    }],
    rows: rows,
    onRowClick: r => setDetail(r),
    getRowKey: r => r.id
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: !!detail,
    title: detail ? `Venda ${detail.id}` : '',
    onClose: () => setDetail(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      label: "Estornar",
      variant: "text",
      color: "destructive"
    }), /*#__PURE__*/React.createElement(Button, {
      label: "Antecipar",
      color: "secondary",
      startIcon: /*#__PURE__*/React.createElement(I, {
        size: 18
      }, "bolt"),
      onClick: () => {
        setDetail(null);
        setAnteciparOpen(true);
      }
    }))
  }, detail && /*#__PURE__*/React.createElement(React.Fragment, null, detail.status[0] === 'Aprovada' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    severity: "success"
  }, "Transa\xE7\xE3o aprovada e capturada.")), /*#__PURE__*/React.createElement("dl", {
    style: s.dl
  }, /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Cliente"), /*#__PURE__*/React.createElement("dd", {
    style: s.dd
  }, detail.cliente), /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Data / hora"), /*#__PURE__*/React.createElement("dd", {
    style: s.dd
  }, detail.data, " \xE0s ", detail.hora), /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Bandeira"), /*#__PURE__*/React.createElement("dd", {
    style: s.dd
  }, detail.bandeira), /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Forma"), /*#__PURE__*/React.createElement("dd", {
    style: s.dd
  }, detail.forma), /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Valor bruto"), /*#__PURE__*/React.createElement("dd", {
    style: s.dd
  }, detail.bruto), /*#__PURE__*/React.createElement("dt", {
    style: s.dt
  }, "Valor l\xEDquido"), /*#__PURE__*/React.createElement("dd", {
    style: {
      ...s.dd,
      color: 'var(--evo-primary-dark)',
      fontWeight: 700
    }
  }, detail.liquido)))), /*#__PURE__*/React.createElement(Dialog, {
    open: anteciparOpen,
    title: "Confirmar antecipa\xE7\xE3o",
    width: "xs",
    onClose: () => setAnteciparOpen(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      label: "Cancelar",
      variant: "text",
      color: "inherit",
      onClick: () => setAnteciparOpen(false)
    }), /*#__PURE__*/React.createElement(Button, {
      label: "Confirmar",
      onClick: () => setAnteciparOpen(false)
    }))
  }, "Voc\xEA antecipar\xE1 este receb\xEDvel com taxa de 1,99%. O valor l\xEDquido cai na sua conta ainda hoje."));
}
window.SalesScreen = SalesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant/SalesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant/data.js
try { (() => {
// Mock data for the EVO Merchant UI kit. Plain script — assigns to window.
window.EVO_DATA = {
  user: {
    name: 'Maria Souza',
    company: 'Clínica Vida Saúde',
    initials: 'MS'
  },
  kpis: {
    recebidoHoje: 'R$ 2.847,90',
    aReceber: 'R$ 38.420,00',
    antecipavel: 'R$ 4.320,00',
    vendasMes: 142
  },
  sales: [{
    id: '#84021',
    data: '12/06/2024',
    hora: '14:32',
    cliente: 'Maria Souza',
    bandeira: 'Visa',
    forma: 'Crédito 3x',
    bruto: 'R$ 1.250,00',
    liquido: 'R$ 1.213,75',
    status: ['Aprovada', 'success']
  }, {
    id: '#84019',
    data: '12/06/2024',
    hora: '11:08',
    cliente: 'Clínica Vida',
    bandeira: 'Mastercard',
    forma: 'Crédito à vista',
    bruto: 'R$ 3.480,00',
    liquido: 'R$ 3.359,52',
    status: ['Aprovada', 'success']
  }, {
    id: '#84015',
    data: '12/06/2024',
    hora: '09:47',
    cliente: 'João Lima',
    bandeira: 'Elo',
    forma: 'Débito',
    bruto: 'R$ 199,90',
    liquido: 'R$ 196,10',
    status: ['Pendente', 'warning']
  }, {
    id: '#84003',
    data: '11/06/2024',
    hora: '18:21',
    cliente: 'Pet Center',
    bandeira: 'Visa',
    forma: 'Crédito 6x',
    bruto: 'R$ 540,00',
    liquido: 'R$ 523,80',
    status: ['Recusada', 'error']
  }, {
    id: '#83998',
    data: '11/06/2024',
    hora: '16:05',
    cliente: 'Ana Pereira',
    bandeira: 'Mastercard',
    forma: 'Crédito à vista',
    bruto: 'R$ 89,90',
    liquido: 'R$ 86,84',
    status: ['Aprovada', 'success']
  }, {
    id: '#83990',
    data: '11/06/2024',
    hora: '13:44',
    cliente: 'Studio Bem-Estar',
    bandeira: 'Hipercard',
    forma: 'Crédito 2x',
    bruto: 'R$ 760,00',
    liquido: 'R$ 737,20',
    status: ['Aprovada', 'success']
  }, {
    id: '#83982',
    data: '10/06/2024',
    hora: '10:12',
    cliente: 'Carlos Dias',
    bandeira: 'Visa',
    forma: 'Débito',
    bruto: 'R$ 320,00',
    liquido: 'R$ 313,92',
    status: ['Aprovada', 'success']
  }],
  pages: [{
    name: 'Início',
    value: 'inicio'
  }, {
    name: 'Vendas',
    value: 'vendas'
  }, {
    name: 'Antecipações',
    value: 'antecipacoes'
  }, {
    name: 'Extrato',
    value: 'extrato'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.CircularProgress = __ds_scope.CircularProgress;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
