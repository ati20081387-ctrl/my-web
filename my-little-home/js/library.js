/**
 * Digital library - PDF storage + book recommendations
 */

import { saveBook, getBooks, deleteBook } from './storage.js';
import { t } from './language.js';

// Real book recommendations (public domain / well-known titles)
export const recommendations = [
  {
    id: 'pride',
    title: 'Pride and Prejudice',
    titleFa: 'غرور و تعصب',
    author: 'Jane Austen',
    authorFa: 'جین آستین',
    genre: 'classic',
    year: 1813,
    intro: 'A witty exploration of manners, marriage, and misunderstanding in Georgian England.',
    introFa: 'کاوشی هوشمندانه از آداب، ازدواج و سوءتفاهم در انگلستان گرجی.',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80'
  },
  {
    id: '1984',
    title: '1984',
    titleFa: '۱۹۸۴',
    author: 'George Orwell',
    authorFa: 'جورج اورول',
    genre: 'scifi',
    year: 1949,
    intro: 'A dystopian masterpiece about surveillance, truth, and totalitarianism.',
    introFa: 'شاهکاری دیستوپیایی درباره نظارت، حقیقت و تمامیت‌خواهی.',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80'
  },
  {
    id: 'gatsby',
    title: 'The Great Gatsby',
    titleFa: 'گتسبی بزرگ',
    author: 'F. Scott Fitzgerald',
    authorFa: 'اف. اسکات فیتزجرالد',
    genre: 'classic',
    year: 1925,
    intro: 'The Jazz Age story of wealth, love, and the American Dream.',
    introFa: 'داستان عصر جاز از ثروت، عشق و رویای آمریکایی.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80'
  },
  {
    id: 'hobbit',
    title: 'The Hobbit',
    titleFa: 'هابیت',
    author: 'J.R.R. Tolkien',
    authorFa: 'جی. آر. آر. تالکین',
    genre: 'fantasy',
    year: 1937,
    intro: 'Bilbo Baggins embarks on an unexpected adventure with dwarves and a dragon.',
    introFa: 'بیلبو بگینز در ماجراجویی غیرمنتظره با کوتوله‌ها و یک اژدها.',
    cover: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&q=80'
  },
  {
    id: 'crime',
    title: 'Crime and Punishment',
    titleFa: 'جنایت و مکافات',
    author: 'Fyodor Dostoevsky',
    authorFa: 'فئودور داستایفسکی',
    genre: 'psychological',
    year: 1866,
    intro: 'A psychological deep dive into guilt, morality, and redemption.',
    introFa: 'غوصی روانشناختی در گناه، اخلاق و رستگاری.',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&q=80'
  },
  {
    id: 'one-hundred',
    title: 'One Hundred Years of Solitude',
    titleFa: 'صد سال تنهایی',
    author: 'Gabriel García Márquez',
    authorFa: 'گابریل گارسیا مارکز',
    genre: 'fiction',
    year: 1967,
    intro: 'The multi-generational saga of the Buendía family in the mythical town of Macondo.',
    introFa: 'حماسه چندنسلی خانواده بوئندیا در شهر افسانه‌ای ماکوندو.',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80'
  },
  {
    id: 'sherlock',
    title: 'The Adventures of Sherlock Holmes',
    titleFa: 'ماجراهای شرلوک هلمز',
    author: 'Arthur Conan Doyle',
    authorFa: 'آرتور کانن دویل',
    genre: 'mystery',
    year: 1892,
    intro: 'Classic detective stories featuring the brilliant Sherlock Holmes and Dr. Watson.',
    introFa: 'داستان‌های کارآگاهی کلاسیک با شرلوک هلمز نابغه و دکتر واتسون.',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80'
  },
  {
    id: 'blind-owl',
    title: 'The Blind Owl',
    titleFa: 'بوف کور',
    author: 'Sadegh Hedayat',
    authorFa: 'صادق هدایت',
    genre: 'psychological',
    year: 1936,
    intro: 'A haunting Persian modernist novella of obsession, death, and the unconscious.',
    introFa: 'رمان کوتاه مدرن ایرانی درباره وسواس، مرگ و ناخودآگاه.',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=80'
  },
  {
    id: 'anna',
    title: 'Anna Karenina',
    titleFa: 'آنا کارنینا',
    author: 'Leo Tolstoy',
    authorFa: 'لئو تولستوی',
    genre: 'classic',
    year: 1878,
    intro: 'A sweeping portrait of Russian society through the tragic story of Anna.',
    introFa: 'پرتره‌ای گسترده از جامعه روسیه از طریق داستان تراژیک آنا.',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80'
  },
  {
    id: 'dune',
    title: 'Dune',
    titleFa: 'تلماسه',
    author: 'Frank Herbert',
    authorFa: 'فرانک هربرت',
    genre: 'scifi',
    year: 1965,
    intro: 'Epic science fiction of politics, religion, and ecology on the desert planet Arrakis.',
    introFa: 'علمی-تخیلی حماسی از سیاست، دین و اکولوژی در سیاره بیابانی آراکیس.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80'
  }
];

export async function uploadPDF(file, meta = {}) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const book = {
          title: meta.title || file.name.replace(/\.pdf$/i, ''),
          author: meta.author || 'Unknown',
          category: meta.category || 'fiction',
          data: reader.result, // base64 or arraybuffer
          fileName: file.name,
          size: file.size,
          uploadedAt: new Date().toISOString()
        };
        const id = await saveBook(book);
        resolve({ ...book, id });
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function listUserBooks() {
  return getBooks();
}

export async function removeBook(id) {
  return deleteBook(id);
}

export function getRecommendations(genre = null) {
  if (!genre || genre === 'all') return recommendations;
  return recommendations.filter(b => b.genre === genre);
}

export function getRecommendationById(id) {
  return recommendations.find(b => b.id === id);
}
