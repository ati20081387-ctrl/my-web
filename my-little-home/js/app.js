/**
 * My Little Interactive Home - Main Application
 */

import { initDB } from './storage.js';
import { initLanguage, setLanguage, getLang, t, getRecipeText } from './language.js';
import { initTheme, setTheme, getTheme, toggleTheme } from './theme.js';
import { registerView, navigateTo, goToLivingRoom } from './navigation.js';
import { recipes, getRecipes, getRecipeById } from './recipes.js';
import { createMemory, updateMemory, removeMemory, listMemories, createNote, updateNote, removeNote, listNotes, fileToDataURL } from './memories.js';
import { initMusic, addTrack, playTrack, play, pause, togglePlay, playNext, playPrev, setVolume, getVolume, getCurrentTrack, getPlaylist, createTrackFromFile, isMusicPlaying } from './music.js';
import { uploadPDF, listUserBooks, removeBook, getRecommendations, recommendations } from './library.js';

// DOM helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let currentRecipeFilter = { category: 'all', search: '' };

async function boot() {
  try {
    await initDB();
  } catch (e) {
    console.warn('IndexedDB init issue:', e);
  }

  initLanguage();
  initTheme();
  initMusic();
  setupViews();
  setupEventListeners();
  updateI18n();
  
  // Start at exterior
  navigateTo('exterior');
}

function setupViews() {
  registerView('exterior', $('#exterior'), () => {}, () => {});
  registerView('living-room', $('#living-room'), () => {
    startCatAnimation();
  }, () => {});
  registerView('recipes', $('#recipes-view'), () => renderRecipeList(), () => {});
  registerView('recipe-detail', $('#recipe-detail-view'), (opts) => {
    if (opts && opts.id) renderRecipeDetail(opts.id);
  }, () => {});
  registerView('memories', $('#memories-view'), () => {
    switchMemoryTab('journal');
    renderMemories();
  }, () => {});
  registerView('music', $('#music-view'), () => renderMusicUI(), () => {});
  registerView('library', $('#library-view'), () => {
    switchLibraryTab('mybooks');
    renderUserBooks();
  }, () => {});
}

function setupEventListeners() {
  // Door
  const door = $('#front-door');
  if (door) {
    door.addEventListener('click', () => {
      door.classList.add('opening');
      setTimeout(() => {
        navigateTo('living-room');
        door.classList.remove('opening');
      }, 900);
    });
  }

  // Interactive objects
  $('#stove')?.addEventListener('click', () => navigateTo('recipes'));
  $('#desk')?.addEventListener('click', () => navigateTo('memories'));
  $('#speaker')?.addEventListener('click', () => navigateTo('music'));
  $('#bookshelf')?.addEventListener('click', () => navigateTo('library'));

  // Back buttons
  $$('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => goToLivingRoom());
  });

  // Theme toggle
  $('#theme-toggle')?.addEventListener('click', () => {
    toggleTheme();
    updateThemeButton();
  });

  // Language toggle
  $('#lang-toggle')?.addEventListener('click', () => {
    const next = getLang() === 'en' ? 'fa' : 'en';
    setLanguage(next);
    updateI18n();
    // Re-render current view content
    const view = document.body.dataset.view;
    if (view === 'recipes') renderRecipeList();
    if (view === 'recipe-detail') {
      const id = $('#recipe-detail-view').dataset.currentId;
      if (id) renderRecipeDetail(id);
    }
    if (view === 'memories') renderMemories();
    if (view === 'library') {
      renderUserBooks();
      renderDiscover();
    }
  });

  // Recipe filters
  document.addEventListener('click', (e) => {
    if (e.target.matches('.filter-btn')) {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentRecipeFilter.category = e.target.dataset.cat || 'all';
      renderRecipeList();
    }
  });

  $('#recipe-search')?.addEventListener('input', (e) => {
    currentRecipeFilter.search = e.target.value;
    renderRecipeList();
  });

  // Memory form
  $('#memory-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = $('#mem-title').value.trim();
    const content = $('#mem-content').value.trim();
    const photoInput = $('#mem-photo');
    let photoData = null;
    if (photoInput.files[0]) {
      photoData = await fileToDataURL(photoInput.files[0]);
    }
    await createMemory({ title, content, photoData });
    e.target.reset();
    renderMemories();
  });

  $('#note-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = $('#note-content').value.trim();
    if (!content) return;
    await createNote({ content });
    e.target.reset();
    renderNotes();
  });

  // Tabs
  $$('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.tabGroup;
      const name = tab.dataset.tab;
      $$(`[data-tab-group="${group}"]`).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (group === 'memory') {
        if (name === 'journal') {
          $('#journal-panel').classList.remove('hidden');
          $('#notes-panel').classList.add('hidden');
          renderMemories();
        } else {
          $('#journal-panel').classList.add('hidden');
          $('#notes-panel').classList.remove('hidden');
          renderNotes();
        }
      }
      if (group === 'library') {
        if (name === 'mybooks') {
          $('#mybooks-panel').classList.remove('hidden');
          $('#discover-panel').classList.add('hidden');
          renderUserBooks();
        } else {
          $('#mybooks-panel').classList.add('hidden');
          $('#discover-panel').classList.remove('hidden');
          renderDiscover();
        }
      }
    });
  });

  // Music controls
  $('#play-btn')?.addEventListener('click', togglePlay);
  $('#next-btn')?.addEventListener('click', playNext);
  $('#prev-btn')?.addEventListener('click', playPrev);
  $('#volume')?.addEventListener('input', (e) => setVolume(parseFloat(e.target.value)));

  $('#audio-upload')?.addEventListener('change', (e) => {
    const files = [...e.target.files];
    files.forEach(file => {
      if (file.type.startsWith('audio/')) {
        const track = createTrackFromFile(file);
        addTrack(track);
      }
    });
    renderMusicUI();
    e.target.value = '';
  });

  // PDF upload
  $('#pdf-upload')?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      try {
        await uploadPDF(file);
        renderUserBooks();
      } catch (err) {
        alert(t('error'));
      }
    }
    e.target.value = '';
  });

  // Language change listener
  document.addEventListener('languageChanged', updateI18n);
  document.addEventListener('themeChanged', updateThemeButton);

  // Music state
  document.addEventListener('musicStateChange', (e) => {
    const btn = $('#play-btn');
    if (btn) btn.textContent = e.detail.playing ? '❚❚' : '▶';
  });

  document.addEventListener('trackChanged', (e) => {
    const el = $('#now-playing');
    if (el && e.detail) el.textContent = e.detail.title || t('nowPlaying');
  });
}

function updateI18n() {
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  updateThemeButton();
}

function updateThemeButton() {
  const btn = $('#theme-toggle');
  if (btn) {
    btn.textContent = getTheme() === 'light' ? '🌙' : '☀️';
    btn.title = getTheme() === 'light' ? t('darkMode') : t('lightMode');
  }
}

function startCatAnimation() {
  // Already CSS driven
}

// ========== RECIPES ==========
function renderRecipeList() {
  const grid = $('#recipe-grid');
  if (!grid) return;
  const list = getRecipes(currentRecipeFilter);
  const lang = getLang();

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>${t('noSongs')}</p></div>`;
    return;
  }

  grid.innerHTML = list.map(r => `
    <article class="recipe-card" data-id="${r.id}">
      <img src="${r.image}" alt="${lang === 'fa' ? r.titleFa : r.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'">
      <div class="recipe-card-body">
        <h3>${lang === 'fa' ? r.titleFa : r.title}</h3>
        <p>${lang === 'fa' ? r.introFa : r.intro}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo('recipe-detail', { id: card.dataset.id });
    });
  });
}

function renderRecipeDetail(id) {
  const r = getRecipeById(id);
  const container = $('#recipe-detail-content');
  const view = $('#recipe-detail-view');
  if (!r || !container) return;
  view.dataset.currentId = id;
  const lang = getLang();

  const ingredients = lang === 'fa' ? r.ingredientsFa : r.ingredients;
  const steps = lang === 'fa' ? r.stepsFa : r.steps;
  const tips = lang === 'fa' ? r.tipsFa : r.tips;
  const mistakes = lang === 'fa' ? r.mistakesFa : r.mistakes;
  const equipment = lang === 'fa' ? r.equipmentFa : r.equipment;

  container.innerHTML = `
    <div class="recipe-detail animate-in">
      <img src="${r.image}" alt="${lang === 'fa' ? r.titleFa : r.title}" onerror="this.src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600'">
      <h2>${lang === 'fa' ? r.titleFa : r.title}</h2>
      <p>${lang === 'fa' ? r.introFa : r.intro}</p>
      <div class="recipe-meta">
        <span>⏱ ${t('prepTime')}: ${r.prepTime}</span>
        <span>🔥 ${t('cookTime')}: ${r.cookTime}</span>
        <span>🍽 ${t('servings')}: ${r.servings}</span>
        ${r.temperature ? `<span>🌡 ${r.temperature}</span>` : ''}
      </div>
      <h3>${t('ingredients')}</h3>
      <ul>${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>${t('equipment')}</h3>
      <ul>${equipment.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>${t('steps')}</h3>
      <ol>${steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <h3>${t('tips')}</h3>
      <ul>${tips.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>${t('mistakes')}</h3>
      <ul>${mistakes.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `;
}

// ========== MEMORIES ==========
function switchMemoryTab(name) {
  // handled by tab clicks
}

async function renderMemories() {
  const list = await listMemories();
  const container = $('#memory-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><p data-i18n="noMemories">${t('noMemories')}</p></div>`;
    return;
  }

  container.innerHTML = list.map(m => `
    <div class="memory-item" data-id="${m.id}">
      ${m.photo ? `<img src="${m.photo}" alt="">` : ''}
      <div class="body">
        <h4>${escapeHtml(m.title)}</h4>
        <p>${escapeHtml(m.content).slice(0, 120)}${m.content.length > 120 ? '…' : ''}</p>
        <div class="date">${formatDate(m.date)}</div>
      </div>
      <div class="item-actions">
        <button class="delete" data-delete-mem="${m.id}">${t('delete')}</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-delete-mem]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm(t('confirmDelete'))) {
        await removeMemory(Number(btn.dataset.deleteMem));
        renderMemories();
      }
    });
  });
}

async function renderNotes() {
  const list = await listNotes();
  const container = $('#note-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><p data-i18n="noNotes">${t('noNotes')}</p></div>`;
    return;
  }

  container.innerHTML = list.map(n => `
    <div class="note-item" data-id="${n.id}">
      <div class="body">
        <p>${escapeHtml(n.content)}</p>
        <div class="date">${formatDate(n.date)}</div>
      </div>
      <div class="item-actions">
        <button class="delete" data-delete-note="${n.id}">${t('delete')}</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-delete-note]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm(t('confirmDelete'))) {
        await removeNote(Number(btn.dataset.deleteNote));
        renderNotes();
      }
    });
  });
}

// ========== MUSIC ==========
function renderMusicUI() {
  const playlist = getPlaylist();
  const listEl = $('#track-list');
  const now = getCurrentTrack();
  if ($('#now-playing')) {
    $('#now-playing').textContent = now ? now.title : t('noSongs');
  }
  if ($('#volume')) $('#volume').value = getVolume();

  if (!listEl) return;
  if (playlist.length === 0) {
    listEl.innerHTML = `<div class="empty-state"><p data-i18n="noSongs">${t('noSongs')}</p></div>`;
    return;
  }

  listEl.innerHTML = playlist.map((tr, i) => `
    <div class="track-item ${now && now.id === tr.id ? 'active' : ''}" data-index="${i}">
      <span>🎵</span>
      <div>
        <strong>${escapeHtml(tr.title)}</strong>
        <div style="font-size:0.8rem;color:var(--text-muted)">${escapeHtml(tr.artist || '')}</div>
      </div>
    </div>
  `).join('');

  listEl.querySelectorAll('.track-item').forEach(el => {
    el.addEventListener('click', () => playTrack(Number(el.dataset.index)));
  });
}

// ========== LIBRARY ==========
async function renderUserBooks() {
  const books = await listUserBooks();
  const grid = $('#mybooks-grid');
  if (!grid) return;

  if (books.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p data-i18n="noBooks">${t('noBooks')}</p></div>`;
    return;
  }

  grid.innerHTML = books.map(b => `
    <div class="book-card" data-id="${b.id}">
      <div style="height:120px;background:var(--wood-light);display:flex;align-items:center;justify-content:center;font-size:2rem;">📄</div>
      <div class="info">
        <h4>${escapeHtml(b.title)}</h4>
        <div class="author">${escapeHtml(b.author || '')}</div>
        <button class="btn" style="margin-top:8px;font-size:0.75rem" data-open-pdf="${b.id}">${t('openBook')}</button>
        <button class="btn" style="margin-top:4px;font-size:0.75rem" data-del-book="${b.id}">${t('delete')}</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-open-pdf]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.openPdf);
      const book = books.find(b => b.id === id);
      if (book && book.data) {
        openPDFViewer(book);
      }
    });
  });

  grid.querySelectorAll('[data-del-book]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (confirm(t('confirmDelete'))) {
        await removeBook(Number(btn.dataset.delBook));
        renderUserBooks();
      }
    });
  });
}

function openPDFViewer(book) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:200;display:flex;flex-direction:column;padding:20px;';
  modal.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;color:white;">
      <strong>${escapeHtml(book.title)}</strong>
      <button id="close-pdf" class="btn">${t('close')}</button>
    </div>
    <iframe class="pdf-viewer" src="${book.data}" style="flex:1;width:100%;border:none;border-radius:8px;background:white;"></iframe>
  `;
  document.body.appendChild(modal);
  $('#close-pdf', modal).addEventListener('click', () => modal.remove());
}

function renderDiscover() {
  const grid = $('#discover-grid');
  if (!grid) return;
  const lang = getLang();
  const list = getRecommendations();

  grid.innerHTML = list.map(b => `
    <div class="book-card">
      <img src="${b.cover}" alt="${lang === 'fa' ? b.titleFa : b.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200'">
      <div class="info">
        <h4>${lang === 'fa' ? b.titleFa : b.title}</h4>
        <div class="author">${lang === 'fa' ? b.authorFa : b.author}</div>
        <div style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;">${b.year} · ${t(b.genre) || b.genre}</div>
      </div>
    </div>
  `).join('');
}

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(getLang() === 'fa' ? 'fa-IR' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  } catch {
    return iso;
  }
}

// View change UI updates
document.addEventListener('viewChanged', (e) => {
  const bar = document.getElementById('top-bar');
  if (bar) {
    bar.style.display = e.detail.view === 'exterior' ? 'none' : 'flex';
  }
});

// Boot
document.addEventListener('DOMContentLoaded', boot);
