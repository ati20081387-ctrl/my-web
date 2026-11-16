/**
 * Recipe collection - bilingual, detailed recipes
 */

import { t, getRecipeText, getLang } from './language.js';

export const recipes = [
  {
    id: 'tiramisu',
    category: ['creamyDesserts', 'frenchDesserts', 'cakes'],
    title: 'Classic Tiramisu',
    titleFa: 'تیرامیسو کلاسیک',
    intro: 'A beloved Italian dessert of espresso-soaked ladyfingers layered with rich mascarpone cream and dusted with cocoa.',
    introFa: 'دسر محبوب ایتالیایی از بیسکویت‌های آغشته به اسپرسو با لایه کره ماسکارپونه و پودر کاکائو.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    prepTime: '30 min',
    cookTime: '0 min (chill 6+ hrs)',
    servings: '8-10',
    temperature: null,
    equipment: ['9x13 dish', 'Electric mixer', 'Mixing bowls', 'Spatula'],
    equipmentFa: ['ظرف ۹×۱۳', 'همزن برقی', 'کاسه مخلوط‌کنی', 'کاردک'],
    ingredients: [
      '6 large egg yolks',
      '¾ cup (150g) granulated sugar',
      '16 oz (450g) mascarpone cheese, cold',
      '1¾ cups (420ml) heavy cream, cold',
      '2 cups strong espresso or coffee, cooled',
      '3 tbsp dark rum or coffee liqueur (optional)',
      '40-45 ladyfingers (Savoiardi)',
      'Unsweetened cocoa powder for dusting'
    ],
    ingredientsFa: [
      '۶ عدد زرده تخم‌مرغ بزرگ',
      '¾ پیمانه (۱۵۰ گرم) شکر دانه‌ریز',
      '۴۵۰ گرم پنیر ماسکارپونه سرد',
      '۴۲۰ میلی‌لیتر خامه سنگین سرد',
      '۲ پیمانه اسپرسو یا قهوه غلیظ خنک',
      '۳ قاشق غذاخوری رام تیره یا لیکور قهوه (اختیاری)',
      '۴۰-۴۵ عدد بیسکویت لیدی‌فینگر',
      'پودر کاکائو بدون شکر برای پاشیدن'
    ],
    steps: [
      'Whisk egg yolks and sugar in a heatproof bowl over simmering water until thick, pale, and reaches 160°F (71°C), about 8-10 minutes. Remove from heat and cool slightly.',
      'Beat mascarpone until smooth. Gradually fold in the yolk mixture until combined. Do not overmix.',
      'In a separate bowl, whip the cold heavy cream to medium-stiff peaks. Gently fold into the mascarpone mixture.',
      'Combine cooled espresso with rum in a shallow dish. Quickly dip each ladyfinger (1-2 seconds per side) and arrange in a single layer in the dish.',
      'Spread half the cream mixture over the ladyfingers. Repeat with another layer of dipped ladyfingers and remaining cream.',
      'Cover and refrigerate at least 6 hours, preferably overnight. Dust generously with cocoa powder just before serving.'
    ],
    stepsFa: [
      'زرده تخم‌مرغ و شکر را در کاسه ضد حرارت روی آب جوش هم بزنید تا غلیظ و کم‌رنگ شود و به دمای ۷۱ درجه برسد (حدود ۸-۱۰ دقیقه). از حرارت بردارید و کمی خنک کنید.',
      'ماسکارپونه را هم بزنید تا نرم شود. مخلوط زرده را کم‌کم اضافه کنید و هم بزنید. بیش از حد هم نزنید.',
      'در کاسه جداگانه خامه سرد را تا قله‌های متوسط سفت هم بزنید. به آرامی به مخلوط ماسکارپونه اضافه کنید.',
      'اسپرسوی خنک را با رام مخلوط کنید. هر بیسکویت را سریع (۱-۲ ثانیه هر طرف) آغشته کنید و در یک لایه در ظرف بچینید.',
      'نیمی از کرم را روی بیسکویت‌ها پخش کنید. لایه دوم بیسکویت و باقی کرم را اضافه کنید.',
      'پوشانده و حداقل ۶ ساعت، ترجیحاً یک شب در یخچال بگذارید. قبل از سرو با پودر کاکائو بپاشید.'
    ],
    tips: [
      'Use pasteurized eggs or cook the yolks properly for safety.',
      'Do not soak ladyfingers too long or the dessert becomes soggy.',
      'Chill thoroughly for best texture and flavor development.'
    ],
    tipsFa: [
      'از تخم‌مرغ پاستوریزه استفاده کنید یا زرده‌ها را به درستی بپزید.',
      'بیسکویت‌ها را زیاد خیس نکنید تا دسر شل نشود.',
      'برای بهترین بافت و طعم، خوب خنک کنید.'
    ],
    mistakes: [
      'Over-soaking the ladyfingers',
      'Using warm mascarpone which can cause separation',
      'Skipping the long chill time'
    ],
    mistakesFa: [
      'خیس کردن بیش از حد بیسکویت‌ها',
      'استفاده از ماسکارپونه گرم که باعث جدا شدن می‌شود',
      'رد کردن زمان طولانی خنک‌سازی'
    ]
  },
  {
    id: 'red-velvet',
    category: ['cakes'],
    title: 'Red Velvet Cake',
    titleFa: 'کیک رد ولوت',
    intro: 'Moist, tender red velvet layers with a hint of cocoa, topped with classic cream cheese frosting.',
    introFa: 'لایه‌های نرم و مرطوب کیک رد ولوت با طعم ملایم کاکائو و روکش خامه پنیری کلاسیک.',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?w=600&q=80',
    prepTime: '30 min',
    cookTime: '25-30 min',
    servings: '10-12',
    temperature: '350°F / 180°C',
    equipment: ['2 x 8-inch round pans', 'Mixer', 'Cooling racks'],
    equipmentFa: ['۲ قالب گرد ۸ اینچی', 'همزن', 'توری خنک‌کننده'],
    ingredients: [
      '2½ cups (300g) all-purpose flour',
      '1½ cups (300g) granulated sugar',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 tbsp unsweetened cocoa powder',
      '1½ cups (360ml) vegetable oil',
      '1 cup (240ml) buttermilk, room temp',
      '2 large eggs, room temp',
      '2 tbsp red food coloring',
      '1 tsp white vinegar',
      '1 tsp vanilla extract',
      'For frosting: 16 oz cream cheese, ½ cup butter, 4 cups powdered sugar, 1 tsp vanilla'
    ],
    ingredientsFa: [
      '2½ پیمانه (۳۰۰ گرم) آرد همه منظوره',
      '1½ پیمانه (۳۰۰ گرم) شکر',
      '۱ قاشق چایخوری جوش شیرین',
      '۱ قاشق چایخوری نمک',
      '۱ قاشق غذاخوری پودر کاکائو',
      '1½ پیمانه روغن گیاهی',
      '۱ پیمانه دوغ، دمای اتاق',
      '۲ عدد تخم‌مرغ، دمای اتاق',
      '۲ قاشق غذاخوری رنگ خوراکی قرمز',
      '۱ قاشق چایخوری سرکه سفید',
      '۱ قاشق چایخوری وانیل',
      'برای روکش: ۴۵۰ گرم پنیر خامه‌ای، ۱۱۲ گرم کره، ۴ پیمانه شکر پودر، ۱ قاشق چایخوری وانیل'
    ],
    steps: [
      'Preheat oven to 350°F (180°C). Grease and flour two 8-inch pans.',
      'Whisk flour, sugar, baking soda, salt, and cocoa together.',
      'In another bowl, mix oil, buttermilk, eggs, food coloring, vinegar, and vanilla.',
      'Add wet to dry and mix until just combined. Do not overmix.',
      'Divide batter between pans. Bake 25-30 minutes until a toothpick comes out clean.',
      'Cool in pans 10 minutes, then transfer to racks. Cool completely.',
      'For frosting: Beat cream cheese and butter until smooth. Gradually add powdered sugar and vanilla. Frost cooled cakes.'
    ],
    stepsFa: [
      'فر را روی ۱۸۰ درجه سانتی‌گراد گرم کنید. قالب‌ها را چرب و آرد کنید.',
      'آرد، شکر، جوش شیرین، نمک و کاکائو را با هم مخلوط کنید.',
      'در کاسه دیگر روغن، دوغ، تخم‌مرغ، رنگ، سرکه و وانیل را مخلوط کنید.',
      'مواد تر را به خشک اضافه کنید و فقط تا ترکیب شدن هم بزنید.',
      'خمیر را بین قالب‌ها تقسیم کنید. ۲۵-۳۰ دقیقه بپزید تا خلال دندان تمیز بیرون بیاید.',
      '۱۰ دقیقه در قالب خنک کنید، سپس به توری منتقل کنید. کاملاً خنک شود.',
      'برای روکش: پنیر و کره را هم بزنید. شکر پودر و وانیل را اضافه کنید. روی کیک‌های خنک پخش کنید.'
    ],
    tips: [
      'Buttermilk + vinegar creates the classic tangy flavor and tender crumb.',
      'Natural cocoa (not Dutch-process) works best with the acidity.',
      'Chill the frosted cake briefly for cleaner slices.'
    ],
    tipsFa: [
      'دوغ و سرکه طعم ترش کلاسیک و بافت نرم ایجاد می‌کنند.',
      'کاکائو طبیعی (نه هلندی) با اسیدیته بهتر کار می‌کند.',
      'کیک روکش‌شده را کمی خنک کنید تا برش تمیزتری داشته باشید.'
    ],
    mistakes: [
      'Overmixing the batter leading to a tough cake',
      'Using cold ingredients which can cause uneven texture',
      'Not leveling the cake layers before frosting'
    ],
    mistakesFa: [
      'هم زدن بیش از حد که باعث سفت شدن کیک می‌شود',
      'استفاده از مواد سرد که بافت ناهموار ایجاد می‌کند',
      'تراز نکردن لایه‌ها قبل از روکش'
    ]
  },
  {
    id: 'brownies',
    category: ['chocolateDesserts', 'cookies'],
    title: 'Chocolate Brownies',
    titleFa: 'براونی شکلاتی',
    intro: 'Fudgy, rich chocolate brownies with a shiny crackly top – perfect for any chocolate craving.',
    introFa: 'براونی‌های شکلاتی غلیظ و نرم با رویه ترک‌خورده براق – ایده‌آل برای عاشقان شکلات.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
    prepTime: '15 min',
    cookTime: '25-30 min',
    servings: '16 squares',
    temperature: '350°F / 180°C',
    equipment: ['8x8 inch pan', 'Mixing bowl'],
    equipmentFa: ['قالب ۸×۸ اینچ', 'کاسه مخلوط‌کنی'],
    ingredients: [
      '½ cup (115g) unsalted butter',
      '1 cup (200g) granulated sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '⅓ cup (30g) unsweetened cocoa powder',
      '½ cup (65g) all-purpose flour',
      '¼ tsp salt',
      '¼ tsp baking powder',
      'Optional: ½ cup chocolate chips or walnuts'
    ],
    ingredientsFa: [
      '۱۱۲ گرم کره بدون نمک',
      '۲۰۰ گرم شکر',
      '۲ عدد تخم‌مرغ بزرگ',
      '۱ قاشق چایخوری وانیل',
      '۳۰ گرم پودر کاکائو',
      '۶۵ گرم آرد',
      '¼ قاشق چایخوری نمک',
      '¼ قاشق چایخوری بیکینگ پودر',
      'اختیاری: ½ پیمانه چیپس شکلات یا گردو'
    ],
    steps: [
      'Preheat oven to 350°F. Line 8x8 pan with parchment.',
      'Melt butter. Stir in sugar, eggs, and vanilla until smooth.',
      'Sift in cocoa, flour, salt, and baking powder. Mix just until combined. Fold in add-ins if using.',
      'Spread in pan. Bake 25-30 minutes until a toothpick has moist crumbs (not wet batter).',
      'Cool completely in pan before cutting into squares.'
    ],
    stepsFa: [
      'فر را روی ۱۸۰ درجه گرم کنید. قالب را با کاغذ روغنی بپوشانید.',
      'کره را ذوب کنید. شکر، تخم‌مرغ و وانیل را اضافه کنید و هم بزنید.',
      'کاکائو، آرد، نمک و بیکینگ پودر را الک کنید و اضافه کنید. فقط تا ترکیب شدن هم بزنید.',
      'در قالب پخش کنید. ۲۵-۳۰ دقیقه بپزید تا خلال دندان کمی مرطوب بیرون بیاید.',
      'کاملاً در قالب خنک کنید و سپس برش بزنید.'
    ],
    tips: [
      'For fudgier brownies, slightly underbake.',
      'Do not overmix after adding flour.',
      'Let cool fully for clean cuts.'
    ],
    tipsFa: [
      'برای براونی نرم‌تر، کمی کمتر بپزید.',
      'بعد از اضافه کردن آرد بیش از حد هم نزنید.',
      'برای برش تمیز کاملاً خنک کنید.'
    ],
    mistakes: [
      'Overbaking which makes them cakey and dry',
      'Cutting while still warm'
    ],
    mistakesFa: [
      'پخت بیش از حد که باعث خشکی می‌شود',
      'برش در حالی که هنوز گرم است'
    ]
  },
  {
    id: 'cheesecake',
    category: ['creamyDesserts', 'cakes'],
    title: 'Classic Cheesecake',
    titleFa: 'چیزکیک کلاسیک',
    intro: 'Creamy New York-style cheesecake with a buttery graham cracker crust.',
    introFa: 'چیزکیک خامه‌ای به سبک نیویورک با پایه بیسکویتی کره‌ای.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80',
    prepTime: '25 min',
    cookTime: '55-70 min + chill',
    servings: '12',
    temperature: '325°F / 160°C',
    equipment: ['9-inch springform pan', 'Mixer', 'Roasting pan for water bath'],
    equipmentFa: ['قالب فنری ۹ اینچ', 'همزن', 'سینی برای حمام آب'],
    ingredients: [
      'Crust: 1½ cups graham cracker crumbs, ⅓ cup melted butter, ¼ cup sugar',
      'Filling: 32 oz (900g) cream cheese, room temp',
      '1¼ cups (250g) sugar',
      '4 large eggs, room temp',
      '1 cup (240ml) sour cream',
      '1 tbsp vanilla extract',
      '2 tbsp all-purpose flour (optional, for stability)'
    ],
    ingredientsFa: [
      'پایه: 1½ پیمانه خرده بیسکویت گراهام، ⅓ پیمانه کره ذوب‌شده، ¼ پیمانه شکر',
      'مغز: ۹۰۰ گرم پنیر خامه‌ای دمای اتاق',
      '۲۵۰ گرم شکر',
      '۴ عدد تخم‌مرغ دمای اتاق',
      '۲۴۰ میلی‌لیتر خامه ترش',
      '۱ قاشق غذاخوری وانیل',
      '۲ قاشق غذاخوری آرد (اختیاری)'
    ],
    steps: [
      'Preheat oven to 325°F. Wrap springform pan exterior with foil.',
      'Mix crust ingredients and press into bottom of pan. Bake 10 minutes. Cool.',
      'Beat cream cheese until smooth. Add sugar gradually. Beat in eggs one at a time. Mix in sour cream, vanilla, and flour.',
      'Pour over crust. Place pan in a larger roasting pan and add hot water halfway up the sides.',
      'Bake 55-70 minutes until edges are set but center still jiggles slightly.',
      'Turn off oven, crack door, and cool 1 hour. Then refrigerate at least 4 hours or overnight.'
    ],
    stepsFa: [
      'فر را روی ۱۶۰ درجه گرم کنید. بیرون قالب فنری را با فویل بپوشانید.',
      'مواد پایه را مخلوط و در کف قالب فشار دهید. ۱۰ دقیقه بپزید و خنک کنید.',
      'پنیر را هم بزنید تا نرم شود. شکر را اضافه کنید. تخم‌مرغ‌ها را یکی‌یکی. خامه ترش، وانیل و آرد را مخلوط کنید.',
      'روی پایه بریزید. قالب را در سینی بزرگ‌تر بگذارید و آب داغ تا نیمه اضافه کنید.',
      '۵۵-۷۰ دقیقه بپزید تا لبه‌ها سفت شوند ولی مرکز کمی بلرزد.',
      'فر را خاموش کنید، در را کمی باز بگذارید و ۱ ساعت خنک کنید. سپس حداقل ۴ ساعت در یخچال.'
    ],
    tips: [
      'Room temperature ingredients prevent lumps.',
      'Water bath prevents cracking.',
      'Do not open the oven during baking.'
    ],
    tipsFa: [
      'مواد در دمای اتاق از گلوله شدن جلوگیری می‌کنند.',
      'حمام آب از ترک خوردن جلوگیری می‌کند.',
      'در حین پخت در فر را باز نکنید.'
    ],
    mistakes: [
      'Cold cream cheese causing lumps',
      'Overbaking leading to cracks and dry texture',
      'Removing from pan before fully chilled'
    ],
    mistakesFa: [
      'پنیر سرد که باعث گلوله می‌شود',
      'پخت بیش از حد که ترک و خشکی ایجاد می‌کند',
      'خارج کردن از قالب قبل از خنک شدن کامل'
    ]
  },
  {
    id: 'panna-cotta',
    category: ['creamyDesserts', 'italian'],
    title: 'Panna Cotta',
    titleFa: 'پانا کوتا',
    intro: 'Silky Italian cooked cream dessert, elegantly simple and perfect with fresh berries or caramel.',
    introFa: 'دسر خامه‌ای ایتالیایی ابریشمی و ساده، عالی با توت تازه یا کارامل.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    prepTime: '15 min',
    cookTime: '10 min + chill 4 hrs',
    servings: '6',
    temperature: null,
    equipment: ['Saucepan', 'Ramekins or molds'],
    equipmentFa: ['قابلمه', 'قالب‌های کوچک'],
    ingredients: [
      '2 cups (480ml) heavy cream',
      '1 cup (240ml) whole milk',
      '⅓ cup (65g) sugar',
      '1 vanilla bean or 2 tsp vanilla extract',
      '2½ tsp powdered gelatin',
      '3 tbsp cold water',
      'Optional: berry coulis or honey for serving'
    ],
    ingredientsFa: [
      '۴۸۰ میلی‌لیتر خامه سنگین',
      '۲۴۰ میلی‌لیتر شیر کامل',
      '۶۵ گرم شکر',
      '۱ دانه وانیل یا ۲ قاشق چایخوری عصاره وانیل',
      '2½ قاشق چایخوری ژلاتین پودری',
      '۳ قاشق غذاخوری آب سرد',
      'اختیاری: سس توت یا عسل برای سرو'
    ],
    steps: [
      'Sprinkle gelatin over cold water and let bloom 5 minutes.',
      'Heat cream, milk, sugar, and vanilla (scraped bean + pod) until just simmering. Remove from heat. Discard pod.',
      'Stir in bloomed gelatin until fully dissolved.',
      'Strain into a jug and pour into 6 ramekins. Cool to room temperature, then refrigerate at least 4 hours.',
      'To unmold, dip briefly in hot water and invert onto plates. Serve with fruit or sauce.'
    ],
    stepsFa: [
      'ژلاتین را روی آب سرد بپاشید و ۵ دقیقه بگذارید.',
      'خامه، شیر، شکر و وانیل را تا نقطه جوش ملایم گرم کنید. از حرارت بردارید.',
      'ژلاتین را اضافه کنید و هم بزنید تا حل شود.',
      'صافی کنید و در ۶ قالب بریزید. به دمای اتاق برسانید و حداقل ۴ ساعت در یخچال بگذارید.',
      'برای درآوردن از قالب، لحظه‌ای در آب داغ فرو ببرید و روی بشقاب برگردانید.'
    ],
    tips: [
      'Do not boil the cream mixture after adding gelatin.',
      'For cleaner unmolding, lightly oil the molds.',
      'Can be made 2 days ahead.'
    ],
    tipsFa: [
      'بعد از اضافه کردن ژلاتین نجوشانید.',
      'برای درآوردن آسان‌تر، قالب‌ها را کمی چرب کنید.',
      'می‌توان ۲ روز زودتر تهیه کرد.'
    ],
    mistakes: [
      'Not blooming gelatin properly',
      'Boiling after gelatin is added (destroys setting power)'
    ],
    mistakesFa: [
      'فعال نکردن صحیح ژلاتین',
      'جوشاندن بعد از اضافه کردن ژلاتین'
    ]
  },
  {
    id: 'creme-caramel',
    category: ['creamyDesserts', 'traditionalDesserts'],
    title: 'Crème Caramel',
    titleFa: 'کرم کارامل',
    intro: 'Smooth baked custard with a glossy amber caramel sauce that pools around it when inverted.',
    introFa: 'کاستارد پخته نرم با سس کارامل کهربایی براق که هنگام برگرداندن دور آن جمع می‌شود.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    prepTime: '20 min',
    cookTime: '40-50 min',
    servings: '6',
    temperature: '325°F / 160°C',
    equipment: ['Ramekins', 'Roasting pan', 'Saucepan'],
    equipmentFa: ['قالب‌های کوچک', 'سینی', 'قابلمه'],
    ingredients: [
      'Caramel: ¾ cup (150g) sugar, 3 tbsp water',
      'Custard: 2 cups (480ml) whole milk',
      '½ cup (100g) sugar',
      '3 large eggs + 2 yolks',
      '1 tsp vanilla extract',
      'Pinch of salt'
    ],
    ingredientsFa: [
      'کارامل: ۱۵۰ گرم شکر، ۳ قاشق غذاخوری آب',
      'کاستارد: ۴۸۰ میلی‌لیتر شیر کامل',
      '۱۰۰ گرم شکر',
      '۳ عدد تخم‌مرغ + ۲ زرده',
      '۱ قاشق چایخوری وانیل',
      'مقداری نمک'
    ],
    steps: [
      'Make caramel: Heat sugar and water in a saucepan over medium heat without stirring until deep amber. Quickly pour into ramekins, tilting to coat bottoms.',
      'Preheat oven to 325°F. Heat milk until hot but not boiling.',
      'Whisk eggs, yolks, sugar, vanilla, and salt. Slowly whisk in hot milk. Strain.',
      'Pour into caramel-lined ramekins. Place in roasting pan and add hot water halfway up.',
      'Bake 40-50 minutes until set but still slightly wobbly in center.',
      'Cool, then chill at least 4 hours. Run a knife around edge and invert onto plates.'
    ],
    stepsFa: [
      'کارامل: شکر و آب را بدون هم زدن روی حرارت متوسط تا کهربایی تیره گرم کنید. سریع در قالب‌ها بریزید و بچرخانید.',
      'فر را روی ۱۶۰ درجه گرم کنید. شیر را تا داغ شدن گرم کنید.',
      'تخم‌مرغ، زرده، شکر، وانیل و نمک را هم بزنید. شیر داغ را کم‌کم اضافه کنید. صافی کنید.',
      'در قالب‌های کاراملی بریزید. در سینی بگذارید و آب داغ تا نیمه اضافه کنید.',
      '۴۰-۵۰ دقیقه بپزید تا سفت شود ولی مرکز کمی بلرزد.',
      'خنک کنید و حداقل ۴ ساعت در یخچال. دور قالب را با چاقو جدا کنید و برگردانید.'
    ],
    tips: [
      'Watch caramel closely – it goes from perfect to burnt quickly.',
      'Strain the custard for the silkiest texture.',
      'Chill thoroughly before unmolding.'
    ],
    tipsFa: [
      'کارامل را دقیق زیر نظر بگیرید – سریع می‌سوزد.',
      'کاستارد را صافی کنید برای بافت ابریشمی.',
      'قبل از برگرداندن خوب خنک کنید.'
    ],
    mistakes: [
      'Burning the caramel',
      'Overbaking the custard which causes bubbles and curdling'
    ],
    mistakesFa: [
      'سوختن کارامل',
      'پخت بیش از حد کاستارد که باعث حباب و دلمه می‌شود'
    ]
  },
  {
    id: 'lava-cake',
    category: ['chocolateDesserts', 'cakes'],
    title: 'Chocolate Lava Cake',
    titleFa: 'کیک گدازه‌ای شکلاتی',
    intro: 'Individual molten chocolate cakes with a warm, flowing center – dramatic and delicious.',
    introFa: 'کیک‌های شکلاتی تکی با مرکز گرم و روان – چشمگیر و خوشمزه.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80',
    prepTime: '15 min',
    cookTime: '12-14 min',
    servings: '4',
    temperature: '425°F / 220°C',
    equipment: ['4 ramekins', 'Mixing bowls'],
    equipmentFa: ['۴ قالب کوچک', 'کاسه'],
    ingredients: [
      '½ cup (115g) unsalted butter + extra for greasing',
      '4 oz (115g) dark chocolate (60-70%), chopped',
      '1 cup (120g) powdered sugar',
      '2 large eggs + 2 yolks',
      '1 tsp vanilla extract',
      '½ cup (65g) all-purpose flour',
      'Pinch of salt',
      'Cocoa powder for dusting'
    ],
    ingredientsFa: [
      '۱۱۲ گرم کره + کمی برای چرب کردن',
      '۱۱۵ گرم شکلات تلخ ۶۰-۷۰٪ خرد شده',
      '۱۲۰ گرم شکر پودر',
      '۲ عدد تخم‌مرغ + ۲ زرده',
      '۱ قاشق چایخوری وانیل',
      '۶۵ گرم آرد',
      'مقداری نمک',
      'پودر کاکائو برای پاشیدن'
    ],
    steps: [
      'Preheat oven to 425°F. Butter and cocoa-dust 4 ramekins.',
      'Melt butter and chocolate together until smooth. Cool slightly.',
      'Whisk in powdered sugar, then eggs, yolks, and vanilla until combined.',
      'Fold in flour and salt until just mixed.',
      'Divide among ramekins. Bake 12-14 minutes until edges are firm but centers still soft.',
      'Let stand 1 minute. Invert onto plates and serve immediately with ice cream or berries.'
    ],
    stepsFa: [
      'فر را روی ۲۲۰ درجه گرم کنید. قالب‌ها را کره و کاکائو بزنید.',
      'کره و شکلات را با هم ذوب کنید تا صاف شود. کمی خنک کنید.',
      'شکر پودر، سپس تخم‌مرغ، زرده و وانیل را اضافه کنید.',
      'آرد و نمک را تا ترکیب شدن اضافه کنید.',
      'بین قالب‌ها تقسیم کنید. ۱۲-۱۴ دقیقه بپزید تا لبه‌ها سفت و مرکز نرم باشد.',
      '۱ دقیقه بگذارید. روی بشقاب برگردانید و فوری با بستنی یا توت سرو کنید.'
    ],
    tips: [
      'Do not overbake or the center will set completely.',
      'Ramekins can be filled and refrigerated up to 1 day ahead; bake from cold adding 1-2 minutes.',
      'Serve immediately for the lava effect.'
    ],
    tipsFa: [
      'بیش از حد نپزید وگرنه مرکز سفت می‌شود.',
      'می‌توان قالب‌ها را از قبل پر کرد و تا ۱ روز در یخچال گذاشت؛ از حالت سرد با ۱-۲ دقیقه بیشتر بپزید.',
      'برای اثر گدازه فوری سرو کنید.'
    ],
    mistakes: [
      'Overbaking',
      'Not greasing ramekins well enough so cakes stick'
    ],
    mistakesFa: [
      'پخت بیش از حد',
      'چرب نکردن کافی قالب‌ها که باعث چسبیدن می‌شود'
    ]
  },
  {
    id: 'strawberry-shortcake',
    category: ['cakes', 'traditionalDesserts'],
    title: 'Strawberry Shortcake',
    titleFa: 'شورت‌کیک توت‌فرنگی',
    intro: 'Tender biscuits layered with sweet macerated strawberries and billowy whipped cream.',
    introFa: 'بیسکویت‌های نرم با لایه‌های توت‌فرنگی شیرین و خامه زده پف‌دار.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80',
    prepTime: '25 min',
    cookTime: '15-18 min',
    servings: '6-8',
    temperature: '425°F / 220°C',
    equipment: ['Baking sheet', 'Mixer'],
    equipmentFa: ['سینی فر', 'همزن'],
    ingredients: [
      'Biscuits: 2 cups flour, ¼ cup sugar, 1 tbsp baking powder, ½ tsp salt, ½ cup cold butter, ¾ cup cold cream or milk',
      'Filling: 1 lb fresh strawberries, 3-4 tbsp sugar',
      'Whipped cream: 1½ cups heavy cream, 2-3 tbsp sugar, 1 tsp vanilla'
    ],
    ingredientsFa: [
      'بیسکویت: ۲ پیمانه آرد، ¼ پیمانه شکر، ۱ قاشق غذاخوری بیکینگ پودر، ½ قاشق چایخوری نمک، ۱۱۲ گرم کره سرد، ¾ پیمانه خامه یا شیر سرد',
      'مغز: ۴۵۰ گرم توت‌فرنگی تازه، ۳-۴ قاشق غذاخوری شکر',
      'خامه زده: ۳۶۰ میلی‌لیتر خامه سنگین، ۲-۳ قاشق غذاخوری شکر، ۱ قاشق چایخوری وانیل'
    ],
    steps: [
      'Slice strawberries, toss with sugar, and let sit 20-30 minutes to release juices.',
      'Preheat oven to 425°F. Mix dry biscuit ingredients. Cut in cold butter until pea-sized. Stir in cream just until dough forms.',
      'Pat to ¾-inch thickness, cut into rounds or squares. Bake 15-18 minutes until golden. Cool slightly.',
      'Whip cream with sugar and vanilla to soft peaks.',
      'Split biscuits, layer with strawberries and cream. Serve immediately.'
    ],
    stepsFa: [
      'توت‌فرنگی را ورقه کنید، با شکر مخلوط کنید و ۲۰-۳۰ دقیقه بگذارید تا آب بیندازد.',
      'فر را روی ۲۲۰ درجه گرم کنید. مواد خشک بیسکویت را مخلوط کنید. کره سرد را اضافه کنید تا اندازه نخود شود. خامه را اضافه کنید تا خمیر شود.',
      'به ضخامت ۲ سانتی‌متر پهن کنید و برش بزنید. ۱۵-۱۸ دقیقه تا طلایی شدن بپزید. کمی خنک کنید.',
      'خامه را با شکر و وانیل تا قله نرم هم بزنید.',
      'بیسکویت‌ها را نصف کنید، با توت و خامه لایه کنید. فوری سرو کنید.'
    ],
    tips: [
      'Handle biscuit dough gently for tender results.',
      'Mace rate strawberries ahead for maximum juice.',
      'Assemble just before serving so biscuits stay somewhat crisp.'
    ],
    tipsFa: [
      'خمیر بیسکویت را به آرامی کار کنید تا نرم بماند.',
      'توت‌ها را از قبل با شکر مخلوط کنید تا آب بیشتری بدهند.',
      'درست قبل از سرو جمع کنید تا بیسکویت کمی ترد بماند.'
    ],
    mistakes: [
      'Overworking the biscuit dough',
      'Assembling too early making everything soggy'
    ],
    mistakesFa: [
      'کار بیش از حد روی خمیر بیسکویت',
      'جمع کردن زودتر که باعث شل شدن می‌شود'
    ]
  },
  {
    id: 'vanilla-cake',
    category: ['cakes'],
    title: 'Classic Vanilla Cake',
    titleFa: 'کیک وانیلی کلاسیک',
    intro: 'A soft, fluffy vanilla layer cake – the perfect base for any frosting or celebration.',
    introFa: 'کیک لایه‌ای وانیلی نرم و پف‌دار – پایه ایده‌آل برای هر روکش یا جشن.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    prepTime: '20 min',
    cookTime: '25-30 min',
    servings: '10-12',
    temperature: '350°F / 180°C',
    equipment: ['2 x 8 or 9-inch pans', 'Mixer'],
    equipmentFa: ['۲ قالب ۸ یا ۹ اینچ', 'همزن'],
    ingredients: [
      '2½ cups (300g) cake flour or all-purpose',
      '1½ cups (300g) sugar',
      '1 tbsp baking powder',
      '½ tsp salt',
      '¾ cup (170g) unsalted butter, room temp',
      '4 large egg whites, room temp',
      '1 cup (240ml) whole milk, room temp',
      '2 tsp vanilla extract',
      'Optional frosting of choice'
    ],
    ingredientsFa: [
      '۳۰۰ گرم آرد کیک یا همه منظوره',
      '۳۰۰ گرم شکر',
      '۱ قاشق غذاخوری بیکینگ پودر',
      '½ قاشق چایخوری نمک',
      '۱۷۰ گرم کره دمای اتاق',
      '۴ عدد سفیده تخم‌مرغ دمای اتاق',
      '۲۴۰ میلی‌لیتر شیر کامل دمای اتاق',
      '۲ قاشق چایخوری وانیل',
      'روکش دلخواه'
    ],
    steps: [
      'Preheat oven to 350°F. Grease and flour pans.',
      'Whisk flour, sugar, baking powder, and salt.',
      'Add butter and mix on low until crumbly. Add egg whites and mix. Gradually add milk and vanilla; beat until smooth (about 2 minutes).',
      'Divide between pans. Bake 25-30 minutes until toothpick comes out clean.',
      'Cool 10 minutes in pans, then on racks. Frost when completely cool.'
    ],
    stepsFa: [
      'فر را روی ۱۸۰ درجه گرم کنید. قالب‌ها را چرب و آرد کنید.',
      'آرد، شکر، بیکینگ پودر و نمک را مخلوط کنید.',
      'کره را اضافه کنید تا خرد شود. سفیده را اضافه کنید. شیر و وانیل را کم‌کم اضافه و ۲ دقیقه هم بزنید تا صاف شود.',
      'بین قالب‌ها تقسیم کنید. ۲۵-۳۰ دقیقه بپزید.',
      '۱۰ دقیقه در قالب، سپس روی توری خنک کنید. بعد از خنک شدن کامل روکش کنید.'
    ],
    tips: [
      'Room temperature ingredients give the best volume.',
      'Do not overmix once flour is fully incorporated.',
      'Use cake flour for an even more tender crumb if available.'
    ],
    tipsFa: [
      'مواد در دمای اتاق بهترین حجم را می‌دهند.',
      'بعد از ترکیب شدن آرد بیش از حد هم نزنید.',
      'اگر در دسترس است از آرد کیک برای بافت نرم‌تر استفاده کنید.'
    ],
    mistakes: [
      'Cold ingredients leading to dense cake',
      'Opening the oven door too early causing collapse'
    ],
    mistakesFa: [
      'مواد سرد که باعث کیک متراکم می‌شود',
      'باز کردن زود در فر که باعث فرورفتگی می‌شود'
    ]
  },
  {
    id: 'cinnamon-rolls',
    category: ['cookies', 'traditionalDesserts'],
    title: 'Cinnamon Rolls',
    titleFa: 'رول دارچین',
    intro: 'Soft, fluffy yeast rolls filled with cinnamon-sugar and finished with a sweet cream cheese glaze.',
    introFa: 'رول‌های مخمری نرم پر شده با شکر دارچین و روکش خامه پنیری شیرین.',
    image: 'https://images.unsplash.com/photo-1509365469581-826c4b4e0e2a?w=600&q=80',
    prepTime: '30 min + rise',
    cookTime: '20-25 min',
    servings: '12',
    temperature: '375°F / 190°C',
    equipment: ['Mixing bowls', '9x13 pan', 'Rolling pin'],
    equipmentFa: ['کاسه', 'قالب ۹×۱۳', 'وردنه'],
    ingredients: [
      'Dough: ¾ cup warm milk, 2¼ tsp active dry yeast, ¼ cup sugar, 1 egg + 1 yolk, ¼ cup melted butter, 3 cups flour, ¾ tsp salt',
      'Filling: ⅔ cup brown sugar, 2 tbsp cinnamon, ¼ cup soft butter',
      'Glaze: 4 oz cream cheese, ¼ cup butter, 1 cup powdered sugar, ½ tsp vanilla, splash of milk'
    ],
    ingredientsFa: [
      'خمیر: ¾ پیمانه شیر ولرم، ۲¼ قاشق چایخوری مخمر خشک، ¼ پیمانه شکر، ۱ تخم‌مرغ + ۱ زرده، ¼ پیمانه کره ذوب‌شده، ۳ پیمانه آرد، ¾ قاشق چایخوری نمک',
      'مغز: ⅔ پیمانه شکر قهوه‌ای، ۲ قاشق غذاخوری دارچین، ¼ پیمانه کره نرم',
      'روکش: ۱۱۲ گرم پنیر خامه‌ای، ¼ پیمانه کره، ۱ پیمانه شکر پودر، ½ قاشق چایخوری وانیل، کمی شیر'
    ],
    steps: [
      'Proof yeast in warm milk with a pinch of sugar 5-10 min until foamy.',
      'Mix in remaining sugar, egg, yolk, butter, then flour and salt. Knead until smooth (8-10 min). Let rise 1-1½ hours until doubled.',
      'Roll dough to 12x18 inch rectangle. Spread butter, sprinkle cinnamon-sugar. Roll tightly from long side and cut into 12 pieces.',
      'Place in greased pan. Let rise 30-45 min. Bake at 375°F 20-25 minutes until golden.',
      'Beat glaze ingredients until smooth. Spread over warm rolls.'
    ],
    stepsFa: [
      'مخمر را در شیر ولرم با کمی شکر ۵-۱۰ دقیقه فعال کنید تا کف کند.',
      'شکر باقی‌مانده، تخم‌مرغ، زرده، کره، سپس آرد و نمک را اضافه کنید. ۸-۱۰ دقیقه ورز دهید. ۱-۱.۵ ساعت بگذارید تا دو برابر شود.',
      'خمیر را به مستطیل ۱۲×۱۸ اینچ باز کنید. کره بزنید، شکر دارچین بپاشید. از سمت بلند رول کنید و به ۱۲ تکه ببرید.',
      'در قالب چرب‌شده بچینید. ۳۰-۴۵ دقیقه بگذارید. در ۱۹۰ درجه ۲۰-۲۵ دقیقه بپزید.',
      'مواد روکش را هم بزنید و روی رول‌های گرم پخش کنید.'
    ],
    tips: [
      'Warm (not hot) liquid for yeast.',
      'Do not skip the second rise for light rolls.',
      'Glaze while still warm so it melts into the swirls.'
    ],
    tipsFa: [
      'مایع ولرم (نه داغ) برای مخمر.',
      'برای رول‌های سبک، ور آمدن دوم را رد نکنید.',
      'روکش را وقتی هنوز گرم است بزنید تا در شیارها ذوب شود.'
    ],
    mistakes: [
      'Killing the yeast with liquid that is too hot',
      'Under-proofing leading to dense rolls'
    ],
    mistakesFa: [
      'کشتن مخمر با مایع خیلی داغ',
      'کم ور آمدن که باعث رول‌های متراکم می‌شود'
    ]
  },
  {
    id: 'profiteroles',
    category: ['frenchDesserts', 'creamyDesserts'],
    title: 'Profiteroles',
    titleFa: 'پروفیترول',
    intro: 'Light choux pastry puffs filled with cream and topped with rich chocolate sauce.',
    introFa: 'پف‌های سبک خمیر شور پر شده با خامه و روکش سس شکلات غلیظ.',
    image: 'https://images.unsplash.com/photo-1558326567-9816653ac632?w=600&q=80',
    prepTime: '30 min',
    cookTime: '25-30 min',
    servings: '20-24 puffs',
    temperature: '400°F / 200°C then 350°F',
    equipment: ['Piping bag', 'Baking sheets', 'Saucepan'],
    equipmentFa: ['قیف شیرینی', 'سینی فر', 'قابلمه'],
    ingredients: [
      'Choux: ½ cup water, ½ cup milk, ½ cup butter, 1 tbsp sugar, ¼ tsp salt, 1 cup flour, 4 large eggs',
      'Filling: 2 cups whipped cream or pastry cream',
      'Chocolate sauce: 4 oz dark chocolate, ½ cup cream, 1 tbsp butter'
    ],
    ingredientsFa: [
      'خمیر شور: ½ پیمانه آب، ½ پیمانه شیر، ۱۱۲ گرم کره، ۱ قاشق غذاخوری شکر، ¼ قاشق چایخوری نمک، ۱ پیمانه آرد، ۴ عدد تخم‌مرغ',
      'مغز: ۲ پیمانه خامه زده یا کرم پاتیسیر',
      'سس شکلات: ۱۱۵ گرم شکلات تلخ، ½ پیمانه خامه، ۱ قاشق غذاخوری کره'
    ],
    steps: [
      'Bring water, milk, butter, sugar, and salt to a boil. Add flour all at once and stir vigorously until a smooth ball forms and film appears on the pan. Cool 5 minutes.',
      'Beat in eggs one at a time until smooth and pipeable. Pipe mounds onto lined sheets.',
      'Bake at 400°F 15 minutes, then reduce to 350°F and bake 10-15 more until deep golden and hollow-sounding. Cool completely.',
      'Fill with cream using a piping bag inserted into the side or bottom.',
      'Make sauce by heating cream and pouring over chopped chocolate; stir in butter. Drizzle over profiteroles.'
    ],
    stepsFa: [
      'آب، شیر، کره، شکر و نمک را به جوش بیاورید. آرد را یکجا اضافه کنید و محکم هم بزنید تا گلوله نرم شود و لایه روی قابلمه ظاهر شود. ۵ دقیقه خنک کنید.',
      'تخم‌مرغ‌ها را یکی‌یکی اضافه کنید تا صاف و قابل قیف شود. روی سینی‌ها بریزید.',
      'در ۲۰۰ درجه ۱۵ دقیقه، سپس روی ۱۷۵ درجه ۱۰-۱۵ دقیقه دیگر بپزید تا طلایی تیره و توخالی شوند. کاملاً خنک کنید.',
      'با قیف از کنار یا پایین پر کنید.',
      'سس: خامه را گرم کنید و روی شکلات خردشده بریزید؛ کره اضافه کنید. روی پروفیترول‌ها بریزید.'
    ],
    tips: [
      'Eggs must be added fully for proper puff.',
      'Do not open the oven during the first 15 minutes.',
      'Puffs can be frozen unfilled and refreshed in a warm oven.'
    ],
    tipsFa: [
      'تخم‌مرغ‌ها باید کامل اضافه شوند تا پف کنند.',
      'در ۱۵ دقیقه اول در فر را باز نکنید.',
      'پف‌ها را می‌توان خالی منجمد کرد و در فر گرم تازه کرد.'
    ],
    mistakes: [
      'Adding eggs before the dough has cooled enough',
      'Underbaking so they collapse'
    ],
    mistakesFa: [
      'اضافه کردن تخم‌مرغ قبل از خنک شدن کافی خمیر',
      'کم پختن که باعث فرورفتگی می‌شود'
    ]
  },
  {
    id: 'macarons',
    category: ['frenchDesserts', 'cookies'],
    title: 'French Macarons',
    titleFa: 'ماکارون فرانسوی',
    intro: 'Delicate almond meringue cookies with a smooth shell, ruffled feet, and creamy filling. A true baking challenge with rewarding results.',
    introFa: 'کوکی‌های ظریف بادامی با پوسته صاف، پایه‌های چین‌دار و مغز خامه‌ای. چالشی واقعی با نتیجه پاداش‌دهنده.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80',
    prepTime: '45 min + rest',
    cookTime: '14-16 min',
    servings: '20-24 sandwiched',
    temperature: '300°F / 150°C',
    equipment: ['Piping bag with round tip', 'Silicone mats or parchment', 'Food processor', 'Scale highly recommended'],
    equipmentFa: ['قیف با نوک گرد', 'سیلیکون یا کاغذ روغنی', 'غذاساز', 'ترازو به شدت توصیه می‌شود'],
    ingredients: [
      '100g egg whites (aged preferred), room temp',
      '100g granulated sugar',
      '100g almond flour, finely ground and sifted',
      '100g powdered sugar, sifted',
      'Gel food coloring (optional)',
      'Filling: buttercream, ganache, or jam of choice'
    ],
    ingredientsFa: [
      '۱۰۰ گرم سفیده تخم‌مرغ (ترجیحاً کهنه)، دمای اتاق',
      '۱۰۰ گرم شکر دانه‌ریز',
      '۱۰۰ گرم آرد بادام ریز و الک‌شده',
      '۱۰۰ گرم شکر پودر الک‌شده',
      'رنگ ژله‌ای (اختیاری)',
      'مغز: باترکریم، گاناش یا مربا دلخواه'
    ],
    steps: [
      'Process almond flour and powdered sugar together and sift twice. Discard large bits.',
      'Whip egg whites to soft peaks, gradually add sugar, and continue to stiff, glossy peaks. Add color if using.',
      'Fold dry ingredients into meringue in 3 additions using the macaronage technique until the batter flows like lava and a figure-8 can be drawn.',
      'Pipe 1½-inch rounds onto prepared sheets. Tap trays firmly to release air. Rest 30-60 minutes until a skin forms (no longer sticky).',
      'Bake at 300°F 14-16 minutes. Cool completely before filling and sandwiching.',
      'Mature filled macarons in the fridge 24 hours for best texture.'
    ],
    stepsFa: [
      'آرد بادام و شکر پودر را با هم آسیاب و دو بار الک کنید.',
      'سفیده‌ها را تا قله نرم هم بزنید، شکر را کم‌کم اضافه کنید تا قله سفت و براق شود. رنگ اضافه کنید.',
      'مواد خشک را در ۳ مرحله با تکنیک ماکاروناژ اضافه کنید تا خمیر مثل گدازه جریان یابد و بتوان شکل ۸ کشید.',
      'دایره‌های ۴ سانتی‌متری روی سینی بزنید. سینی را محکم بکوبید. ۳۰-۶۰ دقیقه استراحت دهید تا پوست تشکیل شود.',
      'در ۱۵۰ درجه ۱۴-۱۶ دقیقه بپزید. کاملاً خنک کنید، پر کنید و ساندویچ کنید.',
      'ماکارون‌های پرشده را ۲۴ ساعت در یخچال بگذارید برای بهترین بافت.'
    ],
    tips: [
      'Weigh ingredients precisely – volume measures are unreliable.',
      'Humidity affects resting and baking; dry days are better.',
      'Practice the macaronage – under or over mixing both cause problems.'
    ],
    tipsFa: [
      'مواد را دقیق وزن کنید – پیمانه قابل اعتماد نیست.',
      'رطوبت روی استراحت و پخت تأثیر می‌گذارد؛ روزهای خشک بهتر است.',
      'ماکاروناژ را تمرین کنید – کم یا زیاد هم زدن هر دو مشکل‌ساز است.'
    ],
    mistakes: [
      'Not resting long enough (no feet)',
      'Incorrect oven temperature',
      'Oily or coarse almond flour'
    ],
    mistakesFa: [
      'استراحت ناکافی (بدون پایه)',
      'دمای نادرست فر',
      'آرد بادام روغنی یا درشت'
    ]
  }
];

export function getRecipes(filter = {}) {
  let result = [...recipes];
  if (filter.category && filter.category !== 'all') {
    result = result.filter(r => r.category.includes(filter.category));
  }
  if (filter.search) {
    const q = filter.search.toLowerCase();
    result = result.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.titleFa.includes(q) ||
      r.intro.toLowerCase().includes(q)
    );
  }
  return result;
}

export function getRecipeById(id) {
  return recipes.find(r => r.id === id);
}

export function initRecipesUI(container) {
  // Implemented in app.js for full control
}
