/**
 * Storage module using IndexedDB for persistent data
 * Handles memories, notes, PDFs, favorites, preferences
 */

const DB_NAME = 'MyLittleHomeDB';
const DB_VERSION = 1;

let db = null;

const STORES = {
  memories: 'memories',
  notes: 'notes',
  books: 'books',
  favorites: 'favorites',
  preferences: 'preferences'
};

export async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      if (!database.objectStoreNames.contains(STORES.memories)) {
        const memStore = database.createObjectStore(STORES.memories, { keyPath: 'id', autoIncrement: true });
        memStore.createIndex('date', 'date', { unique: false });
        memStore.createIndex('title', 'title', { unique: false });
      }

      if (!database.objectStoreNames.contains(STORES.notes)) {
        const noteStore = database.createObjectStore(STORES.notes, { keyPath: 'id', autoIncrement: true });
        noteStore.createIndex('date', 'date', { unique: false });
      }

      if (!database.objectStoreNames.contains(STORES.books)) {
        const bookStore = database.createObjectStore(STORES.books, { keyPath: 'id', autoIncrement: true });
        bookStore.createIndex('title', 'title', { unique: false });
        bookStore.createIndex('category', 'category', { unique: false });
      }

      if (!database.objectStoreNames.contains(STORES.favorites)) {
        database.createObjectStore(STORES.favorites, { keyPath: 'id', autoIncrement: true });
      }

      if (!database.objectStoreNames.contains(STORES.preferences)) {
        database.createObjectStore(STORES.preferences, { keyPath: 'key' });
      }
    };
  });
}

function getStore(storeName, mode = 'readonly') {
  if (!db) throw new Error('Database not initialized');
  const tx = db.transaction(storeName, mode);
  return tx.objectStore(storeName);
}

// Generic CRUD
export async function addItem(storeName, item) {
  return new Promise((resolve, reject) => {
    const store = getStore(storeName, 'readwrite');
    const request = store.add(item);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function updateItem(storeName, item) {
  return new Promise((resolve, reject) => {
    const store = getStore(storeName, 'readwrite');
    const request = store.put(item);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteItem(storeName, id) {
  return new Promise((resolve, reject) => {
    const store = getStore(storeName, 'readwrite');
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function getAll(storeName) {
  return new Promise((resolve, reject) => {
    const store = getStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getById(storeName, id) {
  return new Promise((resolve, reject) => {
    const store = getStore(storeName);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getPreference(key, defaultValue = null) {
  try {
    const store = getStore(STORES.preferences);
    return new Promise((resolve) => {
      const request = store.get(key);
      request.onsuccess = () => {
        resolve(request.result ? request.result.value : defaultValue);
      };
      request.onerror = () => resolve(defaultValue);
    });
  } catch {
    return defaultValue;
  }
}

export async function setPreference(key, value) {
  return updateItem(STORES.preferences, { key, value });
}

// Specific helpers
export async function saveMemory(memory) {
  if (memory.id) {
    return updateItem(STORES.memories, memory);
  }
  memory.date = memory.date || new Date().toISOString();
  return addItem(STORES.memories, memory);
}

export async function getMemories() {
  return getAll(STORES.memories);
}

export async function deleteMemory(id) {
  return deleteItem(STORES.memories, id);
}

export async function saveNote(note) {
  if (note.id) {
    return updateItem(STORES.notes, note);
  }
  note.date = note.date || new Date().toISOString();
  return addItem(STORES.notes, note);
}

export async function getNotes() {
  return getAll(STORES.notes);
}

export async function deleteNote(id) {
  return deleteItem(STORES.notes, id);
}

export async function saveBook(book) {
  if (book.id) {
    return updateItem(STORES.books, book);
  }
  return addItem(STORES.books, book);
}

export async function getBooks() {
  return getAll(STORES.books);
}

export async function deleteBook(id) {
  return deleteItem(STORES.books, id);
}

// LocalStorage fallback for simple prefs
export function getLocalPref(key, defaultValue) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setLocalPref(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
