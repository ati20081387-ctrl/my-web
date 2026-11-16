/**
 * Memory Journal and Anonymous Notes
 */

import { saveMemory, getMemories, deleteMemory, saveNote, getNotes, deleteNote } from './storage.js';
import { t } from './language.js';

export async function initMemories() {
  // Handled in app UI
}

export async function createMemory({ title, content, photoData }) {
  const memory = {
    title: title || 'Untitled',
    content: content || '',
    photo: photoData || null,
    date: new Date().toISOString()
  };
  const id = await saveMemory(memory);
  return { ...memory, id };
}

export async function updateMemory(id, data) {
  const existing = (await getMemories()).find(m => m.id === id);
  if (!existing) throw new Error('Memory not found');
  const updated = { ...existing, ...data, id };
  await saveMemory(updated);
  return updated;
}

export async function removeMemory(id) {
  await deleteMemory(id);
}

export async function listMemories() {
  const list = await getMemories();
  return list.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function createNote({ content }) {
  const note = {
    content: content || '',
    date: new Date().toISOString()
  };
  const id = await saveNote(note);
  return { ...note, id };
}

export async function updateNote(id, data) {
  const existing = (await getNotes()).find(n => n.id === id);
  if (!existing) throw new Error('Note not found');
  const updated = { ...existing, ...data, id };
  await saveNote(updated);
  return updated;
}

export async function removeNote(id) {
  await deleteNote(id);
}

export async function listNotes() {
  const list = await getNotes();
  return list.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper to read file as data URL for photos
export function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
