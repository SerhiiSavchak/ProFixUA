// Site Configuration
export const SITE_CONFIG = {
  city: "Львів",
  phone: "+380664838936",
  telegramUrl: "https://t.me/nikoservc",
  viberUrl: "viber://chat?number=%2B380664838936",
  hours: "Щодня 08:00–22:00",
  serviceArea: ["Центр", "Сихів", "Франківський", "Шевченківський"],
} as const;

// Types
export interface Service {
  id: string;
  icon: string;
  title: string;
  items: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface Advantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Hero Section
export const HERO_CONTENT = {
  title: `Сантехнік та електрик у ${SITE_CONFIG.city}`,
  subtitle: "Терміновий виїзд • Гарантія • Працюємо щодня",
  badges: ["Безкоштовна консультація", "Чесні ціни", "Швидко"],
  cta: {
    call: "Зателефонувати",
    telegram: "Написати в Telegram",
    viber: "Viber",
  },
};

// Services Section
export const SERVICES: Service[] = [
  {
    id: "plumbing",
    icon: "wrench",
    title: "Сантехніка",
    items: [
      "Протікання",
      "Засори",
      "Унітази, раковини, змішувачі",
      "Монтаж та заміна труб",
      "Інші сантехнічні роботи",
    ],
  },
  {
    id: "electrical",
    icon: "zap",
    title: "Електрика",
    items: [
      "Розетки та вимикачі",
      "Освітлення",
      "Електрощит",
      "Проводка",
      "Аварійні роботи",
    ],
  },
];

// Why Us Section
export const ADVANTAGES: Advantage[] = [
  {
    id: "speed",
    icon: "clock",
    title: "Швидкий виїзд",
    description: "Приїдемо протягом 1-2 годин",
  },
  {
    id: "guarantee",
    icon: "shield",
    title: "Гарантія на роботи",
    description: "Надаємо гарантію на всі виконані роботи",
  },
  {
    id: "experience",
    icon: "award",
    title: "Досвід 10+ років",
    description: "Професійні майстри з великим досвідом",
  },
  {
    id: "price",
    icon: "wallet",
    title: "Чесні ціни",
    description: "Без прихованих платежів та накруток",
  },
  {
    id: "clean",
    icon: "sparkles",
    title: "Чистота",
    description: "Прибираємо за собою після роботи",
  },
  {
    id: "support",
    icon: "phone",
    title: "На зв'язку",
    description: "Консультуємо навіть після виконання робіт",
  },
];

// Steps Section
export const STEPS: Step[] = [
  {
    number: 1,
    title: "Зателефонуйте нам",
    description: "Опишіть проблему по телефону або в месенджері",
  },
  {
    number: 2,
    title: "Узгодження",
    description: "Домовляємось про час та попередню вартість",
  },
  {
    number: 3,
    title: "Виконання робіт",
    description: "Майстер приїжджає та виконує роботу якісно",
  },
  {
    number: 4,
    title: "Оплата",
    description: "Оплачуєте тільки після перевірки результату",
  },
];

// Reviews Section
export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Олена М.",
    rating: 5,
    text: "Викликала майстра терміново — протікала труба. Приїхав за годину, швидко все полагодив. Дуже задоволена!",
  },
  {
    id: "review-2",
    name: "Андрій К.",
    rating: 5,
    text: "Замінювали проводку в квартирі. Все зробили акуратно, прибрали за собою. Рекомендую!",
  },
  {
    id: "review-3",
    name: "Марія Т.",
    rating: 5,
    text: "Встановлювали нову раковину та змішувач. Працюють професійно, ціни адекватні. Дякую!",
  },
];

// Prices Section
export const PRICES_CONTENT = {
  title: "Вартість послуг",
  description:
    "Вартість залежить від складності. Ціну узгоджуємо перед початком робіт. Оплата після виконання.",
};

// Images
export const IMAGES = {
  hero: "/images/hero-master.jpg",
  tools: "/images/tools.jpg",
  electrical: "/images/electrical-panel.svg",
};
