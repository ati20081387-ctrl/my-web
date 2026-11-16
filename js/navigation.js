/**
 * Navigation and view management
 */

let currentView = 'exterior';
const views = {};

export function registerView(name, element, enterCallback, exitCallback) {
  views[name] = { element, enter: enterCallback, exit: exitCallback };
}

export function getCurrentView() {
  return currentView;
}

export function navigateTo(viewName, options = {}) {
  if (!views[viewName]) {
    console.warn(`View ${viewName} not registered`);
    return;
  }

  const prev = currentView;
  if (views[prev] && views[prev].exit) {
    views[prev].exit();
  }

  // Hide all views
  Object.values(views).forEach(v => {
    if (v.element) {
      v.element.classList.remove('active');
      v.element.setAttribute('aria-hidden', 'true');
    }
  });

  currentView = viewName;
  const view = views[viewName];
  
  if (view.element) {
    view.element.classList.add('active');
    view.element.setAttribute('aria-hidden', 'false');
  }

  if (view.enter) {
    view.enter(options);
  }

  // Update body class for specific views
  document.body.dataset.view = viewName;
  
  document.dispatchEvent(new CustomEvent('viewChanged', { detail: { view: viewName, prev } }));
}

export function goToLivingRoom() {
  navigateTo('living-room');
}

export function goToExterior() {
  navigateTo('exterior');
}
