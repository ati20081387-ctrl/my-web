/**
 * Bilingual language system - English / Persian (Farsi)
 */

import { getLocalPref, setLocalPref } from './storage.js';

const translations = {
  en: {
    // Navigation & UI
    enterHome: 'Enter the Home',
    backToRoom: 'Back to Living Room',
    lightMode: 'Day',
    darkMode: 'Night',
    language: 'Language',
    english: 'English',
    persian: 'فارسی',
    
    // Living Room
    livingRoom: 'Living Room',
    kitchen: 'Kitchen',
    desk: 'Memory Desk',
    speaker: 'Music Speaker',
    bookshelf: 'Bookshelf',
    cat: 'Cozy Cat',
    
    // Recipes
    recipes: 'Recipe Collection',
    searchRecipes: 'Search recipes...',
    allCategories: 'All Categories',
    cakes: 'Cakes',
    cookies: 'Cookies',
    chocolateDesserts: 'Chocolate Desserts',
    creamyDesserts: 'Creamy Desserts',
    traditionalDesserts: 'Traditional Desserts',
    frenchDesserts: 'French Desserts',
    ingredients: 'Ingredients',
    equipment: 'Equipment',
    prepTime: 'Prep Time',
    cookTime: 'Cook Time',
    servings: 'Servings',
    steps: 'Instructions',
    tips: 'Baking Tips',
    mistakes: 'Common Mistakes',
    backToRecipes: 'Back to Recipes',
    
    // Memories
    memoryJournal: 'Personal Memory Journal',
    anonymousNotes: 'Anonymous Notes',
    newMemory: 'New Memory',
    newNote: 'New Note',
    title: 'Title',
    content: 'Content',
    addPhoto: 'Add Photo',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    noMemories: 'No memories yet. Write your first one!',
    noNotes: 'No notes yet. Share something anonymously...',
    confirmDelete: 'Are you sure you want to delete this?',
    
    // Music
    musicPlayer: 'Music Corner',
    searchSongs: 'Search songs or artists...',
    play: 'Play',
    pause: 'Pause',
    next: 'Next',
    previous: 'Previous',
    volume: 'Volume',
    favorites: 'Favorites',
    uploadAudio: 'Upload Audio File',
    noSongs: 'Upload your favorite songs to start listening',
    nowPlaying: 'Now Playing',
    
    // Library
    digitalLibrary: 'Digital Library',
    myBooks: 'My Books',
    discover: 'Discover Books',
    uploadPDF: 'Upload PDF',
    searchBooks: 'Search books...',
    categories: 'Categories',
    noBooks: 'No books uploaded yet. Add your first PDF!',
    openBook: 'Open',
    fiction: 'Fiction',
    mystery: 'Mystery',
    psychological: 'Psychological',
    romance: 'Romance',
    fantasy: 'Fantasy',
    historical: 'Historical Fiction',
    scifi: 'Science Fiction',
    philosophy: 'Philosophy',
    classic: 'Classic Literature',
    
    // General
    close: 'Close',
    loading: 'Loading...',
    error: 'Something went wrong',
    success: 'Saved successfully',
  },
  fa: {
    // Navigation & UI
    enterHome: 'ورود به خانه',
    backToRoom: 'بازگشت به اتاق نشیمن',
    lightMode: 'روز',
    darkMode: 'شب',
    language: 'زبان',
    english: 'English',
    persian: 'فارسی',
    
    // Living Room
    livingRoom: 'اتاق نشیمن',
    kitchen: 'آشپزخانه',
    desk: 'میز خاطرات',
    speaker: 'بلندگو',
    bookshelf: 'قفسه کتاب',
    cat: 'گربه ناز',
    
    // Recipes
    recipes: 'مجموعه دستور پخت',
    searchRecipes: 'جستجوی دستور پخت...',
    allCategories: 'همه دسته‌ها',
    cakes: 'کیک‌ها',
    cookies: 'کوکی‌ها',
    chocolateDesserts: 'دسرهای شکلاتی',
    creamyDesserts: 'دسرهای خامه‌ای',
    traditionalDesserts: 'دسرهای سنتی',
    frenchDesserts: 'دسرهای فرانسوی',
    ingredients: 'مواد لازم',
    equipment: 'وسایل مورد نیاز',
    prepTime: 'زمان آماده‌سازی',
    cookTime: 'زمان پخت',
    servings: 'تعداد نفرات',
    steps: 'مراحل تهیه',
    tips: 'نکات مهم',
    mistakes: 'اشتباهات رایج',
    backToRecipes: 'بازگشت به دستورها',
    
    // Memories
    memoryJournal: 'دفتر خاطرات شخصی',
    anonymousNotes: 'یادداشت‌های ناشناس',
    newMemory: 'خاطره جدید',
    newNote: 'یادداشت جدید',
    title: 'عنوان',
    content: 'متن',
    addPhoto: 'افزودن عکس',
    save: 'ذخیره',
    edit: 'ویرایش',
    delete: 'حذف',
    cancel: 'لغو',
    noMemories: 'هنوز خاطره‌ای ثبت نشده. اولین خاطره را بنویسید!',
    noNotes: 'هنوز یادداشتی نیست. چیزی ناشناس بنویسید...',
    confirmDelete: 'آیا مطمئن هستید که می‌خواهید حذف کنید؟',
    
    // Music
    musicPlayer: 'گوشه موسیقی',
    searchSongs: 'جستجوی آهنگ یا خواننده...',
    play: 'پخش',
    pause: 'توقف',
    next: 'بعدی',
    previous: 'قبلی',
    volume: 'صدا',
    favorites: 'علاقه‌مندی‌ها',
    uploadAudio: 'بارگذاری فایل صوتی',
    noSongs: 'آهنگ‌های مورد علاقه خود را بارگذاری کنید',
    nowPlaying: 'در حال پخش',
    
    // Library
    digitalLibrary: 'کتابخانه دیجیتال',
    myBooks: 'کتاب‌های من',
    discover: 'کشف کتاب‌ها',
    uploadPDF: 'بارگذاری PDF',
    searchBooks: 'جستجوی کتاب...',
    categories: 'دسته‌بندی‌ها',
    noBooks: 'هنوز کتابی بارگذاری نشده. اولین PDF را اضافه کنید!',
    openBook: 'باز کردن',
    fiction: 'داستانی',
    mystery: 'معمایی',
    psychological: 'روانشناختی',
    romance: 'عاشقانه',
    fantasy: 'فانتزی',
    historical: 'تاریخی',
    scifi: 'علمی-تخیلی',
    philosophy: 'فلسفه',
    classic: 'ادبیات کلاسیک',
    
    // General
    close: 'بستن',
    loading: 'در حال بارگذاری...',
    error: 'مشکلی پیش آمد',
    success: 'با موفقیت ذخیره شد',
  }
};

let currentLang = 'en';

export function initLanguage() {
  currentLang = getLocalPref('language', 'en');
  applyLanguage(currentLang);
  return currentLang;
}

export function getLang() {
  return currentLang;
}

export function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  setLocalPref('language', lang);
  applyLanguage(lang);
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

export function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Update title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang][key]) {
      el.title = translations[lang][key];
    }
  });
}

export function getRecipeText(recipe, field) {
  if (!recipe) return '';
  const langField = currentLang === 'fa' ? field + 'Fa' : field;
  return recipe[langField] || recipe[field] || '';
}
