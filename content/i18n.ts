export type Language = "ua" | "ru" | "en";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "ua", label: "UA" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export const SITE_CONFIG = {
  city: { ua: "Львів", ru: "Львов", en: "Lviv" },
  phone: "+380664838936",
  telegramUrl: "https://t.me/nikoservc",
  viberUrl: "viber://chat?number=%2B380664838936",
  hours: { ua: "Щодня 08:00–22:00", ru: "Ежедневно 08:00–22:00", en: "Daily 08:00–22:00" },
  serviceArea: {
    ua: "Працюємо по місту та в області",
    ru: "Работаем по городу и области",
    en: "We work in the city and region",
  },
} as const;

export const GALLERY_IMAGES = [

  { src: "/images/gallery/work-2.jpg", alt: { ua: "Виконана робота 2", ru: "Выполненная работа 2", en: "Completed work 2" } },
  { src: "/images/gallery/work-3.jpg", alt: { ua: "Виконана робота 3", ru: "Выполненная работа 3", en: "Completed work 3" } },
  { src: "/images/gallery/work-4.jpg", alt: { ua: "Виконана робота 4", ru: "Выполненная работа 4", en: "Completed work 4" } },
 
];

export const translations = {
  ua: {
    nav: {
      services: "Послуги",
      advantages: "Переваги",
      howWeWork: "Як ми працюємо",
      reviews: "Відгуки",
      gallery: "Галерея",
      contacts: "Контакти",
    },
    hero: {
      title: "Сантехнік та електрик у Львові",
      subtitle: "Терміновий виїзд • Гарантія • Працюємо щодня",
      badges: ["Безкоштовна консультація", "Чесні ціни", "Швидко"],
      cta: {
        call: "Зателефонувати",
        telegram: "Написати в Telegram",
        viber: "Viber",
      },
    },
    services: {
      title: "Наші послуги",
      plumbing: {
        title: "Сантехніка",
        items: ["Протікання", "Засори", "Унітази, раковини, змішувачі", "Монтаж та заміна труб", "Інші сантехнічні роботи"],
      },
      electrical: {
        title: "Електрика",
        items: ["Розетки та вимикачі", "Освітлення", "Електрощит", "Проводка", "Аварійні роботи"],
      },
    },
    whyUs: {
      title: "Чому обирають нас",
      items: [
        { title: "Швидкий виїзд", description: "Приїдемо протягом 1-2 годин" },
        { title: "Гарантія на роботи", description: "Надаємо гарантію на всі виконані роботи" },
        { title: "Досвід 10+ років", description: "Професійні майстри з великим досвідом" },
        { title: "Чесні ціни", description: "Без прихованих платежів та накруток" },
        { title: "Чистота", description: "Прибираємо за собою після роботи" },
        { title: "На зв'язку", description: "Консультуємо навіть після виконання робіт" },
      ],
    },
    steps: {
      title: "Як ми працюємо",
      items: [
        { title: "Зателефонуйте нам", description: "Опишіть проблему по телефону або в месенджері" },
        { title: "Узгодження", description: "Домовляємось про час та попередню вартість" },
        { title: "Виконання робіт", description: "Майстер приїжджає та виконує роботу якісно" },
        { title: "Оплата", description: "Оплачуєте тільки після перевірки результату" },
      ],
    },
    reviews: {
      title: "Відгуки клієнтів",
      items: [
        { name: "Олена М.", text: "Викликала майстра терміново — протікала труба. Приїхав за годину, швидко все полагодив. Дуже задоволена!" },
        { name: "Андрій К.", text: "Замінювали проводку в квартирі. Все зробили акуратно, прибрали за собою. Рекомендую!" },
        { name: "Марія Т.", text: "Встановлювали нову раковину та змішувач. Працюють професійно, ціни адекватні. Дякую!" },
      ],
    },
    gallery: {
      title: "Виконані роботи",
    },
    prices: {
      title: "Вартість та оплата послуг",
      intro: "Ми завжди працюємо прозоро та чесно. Усі умови та вартість робіт обов'язково узгоджуються з клієнтом до початку виконання.",
      workPayment: {
        title: "Оплата роботи майстра",
        items: [
          "Вартість робіт залежить від складності та обсягу завдання",
          "Остаточну ціну майстер озвучує після огляду та діагностики, але до початку робіт",
          "Жодних прихованих платежів або несподіваних доплат",
          "Оплата здійснюється після виконання робіт і перевірки результату клієнтом",
        ],
      },
      materialsPayment: {
        title: "Оплата матеріалів та запчастин",
        intro: "У деяких випадках для ремонту можуть знадобитися додаткові матеріали або запчастини. Ми діємо за простою та зрозумілою схемою:",
        above500: {
          label: "Якщо вартість матеріалів перевищує 500 грн:",
          items: [
            "Необхідні деталі замовляються через інтернет",
            "Покупка відбувається лише за попередньою домовленістю з клієнтом",
            "Матеріали купуються на ім'я клієнта",
            "Оплата матеріалів здійснюється за рахунок клієнта",
          ],
        },
        below500: {
          label: "Якщо вартість матеріалів до 500 грн:",
          items: [
            "Майстер може придбати їх у фізичному магазині по дорозі до клієнта",
            "Покупка відбувається лише за попередньою домовленістю з клієнтом",
            "Вартість матеріалів також оплачується клієнтом",
          ],
        },
      },
      importantInfo: {
        title: "Важлива інформація",
        items: [
          "Диспетчерський сервіс не здійснює оплату матеріалів",
          "Якщо матеріали замовляє клієнт — відповідальність за оплату та комплектацію несе клієнт",
          "Якщо матеріали замовляє майстер — відповідальність за оплату та комплектацію несе майстер",
        ],
      },
      cta: "Маєте запитання щодо вартості? Зателефонуйте або напишіть — проконсультуємо безкоштовно та без зобов'язань",
    },
    contacts: {
      title: "Контакти",
      schedule: "Графік роботи",
      area: "Зона обслуговування",
    },
    mobileCta: {
      call: "Зателефонувати",
      write: "Написати",
    },
    footer: {
      rights: "Всі права захищено",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      advantages: "Преимущества",
      howWeWork: "Как мы работаем",
      reviews: "Отзывы",
      gallery: "Галерея",
      contacts: "Контакты",
    },
    hero: {
      title: "Сантехник и электрик во Львове",
      subtitle: "Срочный выезд • Гарантия • Работаем ежедневно",
      badges: ["Бесплатная консультация", "Честные цены", "Быстро"],
      cta: {
        call: "Позвонить",
        telegram: "Написать в Telegram",
        viber: "Viber",
      },
    },
    services: {
      title: "Наши услуги",
      plumbing: {
        title: "Сантехника",
        items: ["Протечки", "Засоры", "Унитазы, раковины, смесители", "Монтаж и замена труб", "Другие сантехнические работы"],
      },
      electrical: {
        title: "Электрика",
        items: ["Розетки и выключатели", "Освещение", "Электрощит", "Проводка", "Аварийные работы"],
      },
    },
    whyUs: {
      title: "Почему выбирают нас",
      items: [
        { title: "Быстрый выезд", description: "Приедем в течение 1-2 часов" },
        { title: "Гарантия на работы", description: "Предоставляем гарантию на все выполненные работы" },
        { title: "Опыт 10+ лет", description: "Профессиональные мастера с большим опытом" },
        { title: "Честные цены", description: "Без скрытых платежей и накруток" },
        { title: "Чистота", description: "Убираем за собой после работы" },
        { title: "На связи", description: "Консультируем даже после выполнения работ" },
      ],
    },
    steps: {
      title: "Как мы работаем",
      items: [
        { title: "Позвоните нам", description: "Опишите проблему по телефону или в мессенджере" },
        { title: "Согласование", description: "Договариваемся о времени и предварительной стоимости" },
        { title: "Выполнение работ", description: "Мастер приезжает и выполняет работу качественно" },
        { title: "Оплата", description: "Оплачиваете только после проверки результата" },
      ],
    },
    reviews: {
      title: "Отзывы клиентов",
      items: [
        { name: "Елена М.", text: "Вызвала мастера срочно — протекала труба. Приехал за час, быстро все починил. Очень довольна!" },
        { name: "Андрей К.", text: "Меняли проводку в квартире. Все сделали аккуратно, убрали за собой. Рекомендую!" },
        { name: "Мария Т.", text: "Устанавливали новую раковину и смеситель. Работают профессионально, цены адекватные. Спасибо!" },
      ],
    },
    gallery: {
      title: "Выполненные работы",
    },
    prices: {
      title: "Стоимость и оплата услуг",
      intro: "Мы всегда работаем прозрачно и честно. Все условия и стоимость работ обязательно согласовываются с клиентом до начала выполнения.",
      workPayment: {
        title: "Оплата работы мастера",
        items: [
          "Стоимость работ зависит от сложности и объёма задания",
          "Окончательную цену мастер озвучивает после осмотра и диагностики, но до начала работ",
          "Никаких скрытых платежей или неожиданных доплат",
          "Оплата осуществляется после выполнения работ и проверки результата клиентом",
        ],
      },
      materialsPayment: {
        title: "Оплата материалов и запчастей",
        intro: "В некоторых случаях для ремонта могут понадобиться дополнительные материалы или запчасти. Мы действуем по простой и понятной схеме:",
        above500: {
          label: "Если стоимость материалов превышает 500 грн:",
          items: [
            "Необходимые детали заказываются через интернет",
            "Покупка происходит только по предварительной договорённости с клиентом",
            "Материалы приобретаются на имя клиента",
            "Оплата материалов осуществляется за счёт клиента",
          ],
        },
        below500: {
          label: "Если стоимость материалов до 500 грн:",
          items: [
            "Мастер может приобрести их в физическом магазине по дороге к клиенту",
            "Покупка происходит только по предварительной договорённости с клиентом",
            "Стоимость материалов также оплачивается клиентом",
          ],
        },
      },
      importantInfo: {
        title: "Важная информация",
        items: [
          "Диспетчерский сервис не осуществляет оплату материалов",
          "Если материалы заказывает клиент — ответственность за оплату и комплектацию несёт клиент",
          "Если материалы заказывает мастер — ответственность за оплату и комплектацию несёт мастер",
        ],
      },
      cta: "Есть вопросы по стоимости? Позвоните или напишите — проконсультируем бесплатно и без обязательств",
    },
    contacts: {
      title: "Контакты",
      schedule: "График работы",
      area: "Зона обслуживания",
    },
    mobileCta: {
      call: "Позвонить",
      write: "Написать",
    },
    footer: {
      rights: "Все права защищены",
    },
  },
  en: {
    nav: {
      services: "Services",
      advantages: "Why Us",
      howWeWork: "How We Work",
      reviews: "Reviews",
      gallery: "Gallery",
      contacts: "Contacts",
    },
    hero: {
      title: "Plumber & Electrician in Lviv",
      subtitle: "Emergency Service • Warranty • Available Daily",
      badges: ["Free Consultation", "Fair Prices", "Fast"],
      cta: {
        call: "Call Now",
        telegram: "Message on Telegram",
        viber: "Viber",
      },
    },
    services: {
      title: "Our Services",
      plumbing: {
        title: "Plumbing",
        items: ["Leaks", "Clogs", "Toilets, sinks, faucets", "Pipe installation & replacement", "Other plumbing work"],
      },
      electrical: {
        title: "Electrical",
        items: ["Outlets & switches", "Lighting", "Electrical panel", "Wiring", "Emergency repairs"],
      },
    },
    whyUs: {
      title: "Why Choose Us",
      items: [
        { title: "Fast Response", description: "We arrive within 1-2 hours" },
        { title: "Work Guarantee", description: "We provide warranty on all completed work" },
        { title: "10+ Years Experience", description: "Professional masters with extensive experience" },
        { title: "Fair Prices", description: "No hidden fees or markups" },
        { title: "Cleanliness", description: "We clean up after ourselves" },
        { title: "Always Available", description: "We consult even after completing the work" },
      ],
    },
    steps: {
      title: "How We Work",
      items: [
        { title: "Call Us", description: "Describe your problem by phone or messenger" },
        { title: "Agreement", description: "We agree on time and preliminary cost" },
        { title: "Work Execution", description: "The master arrives and does quality work" },
        { title: "Payment", description: "You pay only after checking the result" },
      ],
    },
    reviews: {
      title: "Customer Reviews",
      items: [
        { name: "Elena M.", text: "Called urgently — pipe was leaking. Arrived in an hour, fixed everything quickly. Very satisfied!" },
        { name: "Andrew K.", text: "Replaced wiring in the apartment. Did everything neatly, cleaned up. Recommend!" },
        { name: "Maria T.", text: "Installed a new sink and faucet. Work professionally, prices are fair. Thank you!" },
      ],
    },
    gallery: {
      title: "Completed Works",
    },
    prices: {
      title: "Pricing & Payment",
      intro: "We always work transparently and honestly. All terms and costs are agreed with the client before work begins.",
      workPayment: {
        title: "Payment for Services",
        items: [
          "The cost depends on the complexity and scope of the task",
          "The final price is provided after inspection and diagnostics, but before work begins",
          "No hidden fees or unexpected surcharges",
          "Payment is made after the work is completed and the result is verified by the client",
        ],
      },
      materialsPayment: {
        title: "Payment for Materials & Parts",
        intro: "In some cases, additional materials or parts may be needed for the repair. We follow a simple and clear process:",
        above500: {
          label: "If the cost of materials exceeds 500 UAH:",
          items: [
            "Necessary parts are ordered online",
            "The purchase is made only with prior agreement with the client",
            "Materials are purchased in the client's name",
            "Materials are paid for by the client",
          ],
        },
        below500: {
          label: "If the cost of materials is under 500 UAH:",
          items: [
            "The master can purchase them at a store on the way to the client",
            "The purchase is made only with prior agreement with the client",
            "The cost of materials is also paid by the client",
          ],
        },
      },
      importantInfo: {
        title: "Important Information",
        items: [
          "The dispatch service does not pay for materials",
          "If the client orders materials — the client is responsible for payment and assembly",
          "If the master orders materials — the master is responsible for payment and assembly",
        ],
      },
      cta: "Have questions about pricing? Call or message us — we consult for free and without obligations",
    },
    contacts: {
      title: "Contacts",
      schedule: "Working Hours",
      area: "Service Area",
    },
    mobileCta: {
      call: "Call",
      write: "Message",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

export type TranslationsShape = typeof translations.ua;

type DeepWiden<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? readonly DeepWiden<U>[]
      : T[K] extends object
        ? DeepWiden<T[K]>
        : T[K];
};

export type Translations = DeepWiden<TranslationsShape>;
