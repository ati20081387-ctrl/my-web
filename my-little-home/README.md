# My Little Interactive Home

A beautiful, fully interactive virtual home built with pure HTML5, CSS3, and Vanilla JavaScript.

## Features

- **Front door entrance** with opening animation into the living room
- **Cozy living room** with Iranian-inspired details: Persian rug, sleepy cat, plants, kitchen, window seat, desk, bookshelf, speaker
- **Interactive kitchen stove** → full bilingual recipe collection (12 detailed dessert recipes)
- **Memory Desk** → personal journal with photos + anonymous notes (IndexedDB persistence)
- **Music Speaker** → global persistent audio player (upload your own files, continues across sections)
- **Bookshelf** → PDF library (upload & view) + real book recommendations
- **Day / Night modes** with full environmental transformation (city lights, moon, lighting)
- **Bilingual** English ↔ Persian (RTL support)
- **Responsive** design for desktop, tablet, and mobile
- **No frameworks** – only HTML, CSS, JS

## How to Run

1. Open a terminal in the project folder:
   ```bash
   cd my-little-home
   ```

2. Start a local server (required for ES modules and IndexedDB in some browsers):
   ```bash
   python3 -m http.server 8080
   ```
   or
   ```bash
   npx serve .
   ```

3. Open in your browser:
   ```
   http://localhost:8080
   ```

## Project Structure

```
my-little-home/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── recipes.js
│   ├── memories.js
│   ├── music.js
│   ├── library.js
│   ├── theme.js
│   ├── language.js
│   └── storage.js
└── assets/
    ├── images/
    ├── icons/
    ├── audio/
    └── fonts/
```

## Usage Tips

- Click the **front door** to enter.
- Click the **stove** for recipes (search + category filters, full bilingual details).
- Click the **desk** for memories & anonymous notes (data persists after refresh).
- Click the **speaker** to upload and play music (playback continues while navigating).
- Click the **bookshelf** to upload PDFs or browse recommendations.
- Use the top-right buttons to switch **Day/Night** and **Language**.
- All user data (memories, notes, books) is stored locally in IndexedDB.

## Notes

- Music requires you to upload your own audio files (no external streaming API is connected).
- PDF viewing uses the browser’s built-in PDF renderer via data URLs.
- Recipe images load from Unsplash (internet required for images).
- The experience is designed to feel like a tiny personal universe.

Enjoy your little home! 🏠
