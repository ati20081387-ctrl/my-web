/**
 * Persistent global music player
 * Audio element lives in the DOM and is never recreated
 */

import { getLocalPref, setLocalPref } from './storage.js';
import { t } from './language.js';

let audio = null;
let playlist = [];
let currentIndex = -1;
let isPlaying = false;

export function initMusic() {
  // Create persistent audio element if not exists
  audio = document.getElementById('global-audio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'global-audio';
    audio.preload = 'metadata';
    document.body.appendChild(audio);
  }

  // Restore volume
  const vol = getLocalPref('volume', 0.7);
  audio.volume = vol;

  audio.addEventListener('ended', () => {
    playNext();
  });

  audio.addEventListener('timeupdate', () => {
    document.dispatchEvent(new CustomEvent('musicTimeUpdate', {
      detail: { current: audio.currentTime, duration: audio.duration || 0 }
    }));
  });

  audio.addEventListener('play', () => {
    isPlaying = true;
    document.dispatchEvent(new CustomEvent('musicStateChange', { detail: { playing: true } }));
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    document.dispatchEvent(new CustomEvent('musicStateChange', { detail: { playing: false } }));
  });

  // Load any previously saved playlist from localStorage (simple list of names/blobs not fully persistent for large files)
  const saved = getLocalPref('playlist', []);
  if (Array.isArray(saved) && saved.length) {
    // Note: for full persistence of audio blobs use IndexedDB; here we keep simple for demo
  }
}

export function getAudioElement() {
  return audio;
}

export function isMusicPlaying() {
  return isPlaying && audio && !audio.paused;
}

export function setPlaylist(tracks) {
  playlist = tracks;
  currentIndex = tracks.length ? 0 : -1;
}

export function addTrack(track) {
  // track: { id, title, artist, src (blob URL or data URL), cover? }
  playlist.push(track);
  if (currentIndex === -1) currentIndex = 0;
  return playlist.length - 1;
}

export function playTrack(index) {
  if (index < 0 || index >= playlist.length) return;
  currentIndex = index;
  const track = playlist[index];
  if (audio.src !== track.src) {
    audio.src = track.src;
  }
  audio.play().catch(err => console.warn('Playback failed:', err));
  document.dispatchEvent(new CustomEvent('trackChanged', { detail: track }));
}

export function play() {
  if (currentIndex >= 0 && playlist[currentIndex]) {
    audio.play().catch(() => {});
  }
}

export function pause() {
  if (audio) audio.pause();
}

export function togglePlay() {
  if (isMusicPlaying()) pause();
  else play();
}

export function playNext() {
  if (playlist.length === 0) return;
  currentIndex = (currentIndex + 1) % playlist.length;
  playTrack(currentIndex);
}

export function playPrev() {
  if (playlist.length === 0) return;
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  playTrack(currentIndex);
}

export function setVolume(val) {
  if (audio) {
    audio.volume = Math.max(0, Math.min(1, val));
    setLocalPref('volume', audio.volume);
  }
}

export function getVolume() {
  return audio ? audio.volume : 0.7;
}

export function getCurrentTrack() {
  return currentIndex >= 0 ? playlist[currentIndex] : null;
}

export function getPlaylist() {
  return playlist;
}

export function seek(time) {
  if (audio && isFinite(time)) audio.currentTime = time;
}

// Create object URL from File for playback
export function createTrackFromFile(file) {
  const url = URL.createObjectURL(file);
  return {
    id: Date.now() + Math.random().toString(36).slice(2),
    title: file.name.replace(/\.[^/.]+$/, ''),
    artist: 'Local File',
    src: url,
    fileName: file.name
  };
}
