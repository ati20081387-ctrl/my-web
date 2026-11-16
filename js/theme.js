/**
 * Day / Night theme system
 */

import { getLocalPref, setLocalPref } from './storage.js';

let currentTheme = 'light';

export function initTheme() {
  currentTheme = getLocalPref('theme', 'light');
  applyTheme(currentTheme);
  return currentTheme;
}

export function getTheme() {
  return currentTheme;
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return;
  currentTheme = theme;
  setLocalPref('theme', theme);
  applyTheme(theme);
  document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

export function toggleTheme() {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.body.classList.toggle('theme-dark', theme === 'dark');
  document.body.classList.toggle('theme-light', theme === 'light');
}
