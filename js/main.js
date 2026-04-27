(function () {
  const DICT = {
    lv: {
      "common.skip": "Pāriet uz saturu",
      "common.brand": "Garīgās veselības centrs",
      "common.nav.breathing": "Elpošana",
      "common.nav.diary": "Dienasgrāmata",
      "common.nav.reminders": "Atgādinājumi",
      "common.nav.about": "Par mums",
      "common.auth.login": "Ienākt",
      "common.auth.logout": "Iziet",
      "common.footer": "© {year} Garīgās veselības centrs • Prototips (HTML/CSS/JS)",
      "index.title": "Garīgās veselības centrs",
      "index.hero.title": "Atbrīvo prātu. Uzlabo savu ikdienu.",
      "index.hero.subtitle": "Stress ir ikdienas daļa, bet ar to nav jācīnās vienatnē. Mūsu mājaslapa piedāvā vienkāršus rīkus jauniešiem, lai mazinātu trauksmi, uzlabotu noskaņojumu un atrastu līdzsvaru. Ar elpošanas vingrinājumiem, relaksācijas tehnikām un noskaņojuma dienasgrāmatu rūpes par garīgo veselību kļūst par nelielu, bet nozīmīgu soli tavā dienā.",
      "index.section.title": "Mēs esam šeit, lai palīdzētu tev atrast mieru un līdzsvaru.",
      "index.card.1.title": "Elpo vieglāk.",
      "index.card.1.text": "Veic īsus elpošanas un relaksācijas vingrinājumus, lai mazinātu stresu jebkurā laikā un vietā.",
      "index.card.1.link": "Uzzināt vairāk",
      "index.card.2.title": "Pieraksti noskaņojumu.",
      "index.card.2.text": "Izmanto vienkāršu dienasgrāmatu, lai atspoguļotu savas sajūtas un sekotu progresam.",
      "index.card.2.link": "Uzzināt vairāk",
      "index.card.3.title": "Atrodi līdzsvaru.",
      "index.card.3.text": "Izveido ikdienas rutīnu ar atgādinājumiem un ieradumiem, kas stiprina labsajūtu.",
      "index.card.3.link": "Uzzināt vairāk",
      "breathing.title": "Elpošana • Garīgās veselības centrs",
      "breathing.hero.title": "Elpošanas vingrinājumi",
      "breathing.technique": "Tehnika",
      "breathing.option.478": "4-7-8 tehnika",
      "breathing.option.belly": "Dziļā vēdera elpošana",
      "breathing.option.box": "Kvadrāta elpošana",
      "breathing.helper": "Izvēlies tehniku un nospied “Sākt”. Ja nepieciešams — “Apturēt”.",
      "breathing.exercise.478.title": "4-7-8 tehnika",
      "breathing.exercise.478.text": "Vienkārša metode, kas palīdz ātri nomierināties: ieelpa uz 4 sekundēm, aizture uz 7, izelpa uz 8 sekundēm.",
      "breathing.exercise.belly.title": "Dziļā vēdera elpošana",
      "breathing.exercise.belly.text": "Elpo ar diafragmu, lai palielinātu skābekļa daudzumu un samazinātu spriedzi ķermenī.",
      "breathing.exercise.box.title": "Kvadrāta elpošana",
      "breathing.exercise.box.text": "Ieelpa – 4 sekundes → aizture – 4 sekundes → izelpa – 4 sekundes → aizture – 4 sekundes. Ļoti efektīva stresa mazināšanai.",
      "breathing.circle.ready": "Ieelpo",
      "breathing.meta.ready": "Izvēlies tehniku un nospied “Sākt”.",
      "breathing.start": "Sākt",
      "breathing.stop": "Apturēt",
      "breathing.mode.478": "4-7-8 tehnika",
      "breathing.mode.belly": "Dziļā vēdera elpošana",
      "breathing.mode.box": "Kvadrāta elpošana",
      "diary.title": "Dienasgrāmata • Garīgās veselības centrs",
      "diary.hero.title": "Dienasgrāmata",
      "diary.helper": "Izvēlies dienu, lai pievienotu emociju un piezīmes.",
      "diary.emotion.label": "Izvēlies emociju:",
      "diary.export": "Eksportēt",
      "diary.import": "Importēt",
      "diary.notes.label": "Piezīmes:",
      "diary.notes.placeholder": "Ko Tu šodien jūti?",
      "diary.month.prev": "Iepriekšējais mēnesis",
      "diary.month.next": "Nākamais mēnesis",
      "diary.month.short": "Mēnesis",
      "reminders.title": "Atgādinājumi • Garīgās veselības centrs",
      "reminders.hero.title": "Atgādinājumi",
      "reminders.intro": "Iestatiet ikdienas atgādinājumus, lai neaizmirstu par elpošanas vingrinājumiem, noskaņojuma pierakstiem un veselīgiem ieradumiem.",
      "reminders.item1.title": "Elpošanas pauze – katru dienu plkst. 10:00",
      "reminders.item1.text": "Īss vingrinājums dienas vidū.",
      "reminders.item2.title": "Noskaņojuma pieraksts – pirms miega",
      "reminders.item2.text": "Piefiksē sajūtas un domas dienas beigās.",
      "reminders.item3.title": "Iknedēļas pārskats – svētdienās plkst. 20:00",
      "reminders.item3.text": "Paskaties, kas palīdzēja visvairāk.",
      "about.title": "Par mums • Garīgās veselības centrs",
      "about.hero.title": "Par mums",
      "about.intro": "Mūsu mērķis ir palīdzēt jauniešiem rūpēties par garīgo veselību, izmantojot vienkāršus un pieejamus rīkus. Apvienojot elpošanas vingrinājumus, noskaņojuma dienasgrāmatu un atgādinājumus, mēs radām vidi, kas palīdz saglabāt mieru un līdzsvaru ikdienā.",
      "about.contacts": "Mūsu kontakti:",
      "about.email": "E-pasts:",
      "about.phone": "Tālrunis:",
      "about.form.name": "Vārds",
      "about.form.email": "Jūsu e-pasta adrese",
      "about.form.message": "Jūsu ziņa",
      "about.form.send": "Sūtīt",
      "about.form.sending": "Nosūta...",
      "about.form.sent": "Ziņojums nosūtīts!",
      "about.contact.fail": "Kļūda, mēģini vēlreiz!",
      "auth.title": "Autorizācija • Garīgās veselības centrs",
      "auth.title.short": "Autorizācija",
      "auth.heading": "Ienākt / Reģistrēties",
      "auth.subtitle": "Izmanto savu e-pastu un paroli, lai piekļūtu kontam.",
      "auth.register": "Reģistrēties",
      "auth.password": "Parole",
      "auth.back": "Atpakaļ uz sākumlapu",
      "auth.status.empty": "Aizpildi visus laukus!",
      "auth.status.exists": "Lietotājs jau eksistē!",
      "auth.status.registered": "Reģistrācija veiksmīga! Tagad vari ienākt.",
      "auth.status.bad": "Nepareizi dati!",
      "auth.status.login": "Ienāci sistēmā!",
      "auth.status.imported": "Dati importēti!",
      "auth.status.export.empty": "Nav datu eksportam!",
      "auth.status.import.bad": "Kļūda failā!",
      "breathing.toast.start": "Elpošanas vingrinājums sākts",
      "breathing.toast.stop": "Apturēts",
      "reminders.toast.on": "Atgādinājums ieslēgts",
      "reminders.toast.off": "Atgādinājums izslēgts",
      "lang.lv": "LV",
      "lang.ru": "RU",
      "lang.en": "EN"
    },
    ru: {
      "common.skip": "Перейти к содержимому",
      "common.brand": "Центр психического здоровья",
      "common.nav.breathing": "Дыхание",
      "common.nav.diary": "Дневник",
      "common.nav.reminders": "Напоминания",
      "common.nav.about": "О нас",
      "common.auth.login": "Войти",
      "common.auth.logout": "Выйти",
      "common.footer": "© {year} Центр психического здоровья • Прототип (HTML/CSS/JS)",
      "index.title": "Центр психического здоровья",
      "index.hero.title": "Освободи разум. Улучши свою жизнь.",
      "index.hero.subtitle": "Стресс — часть жизни, но с ним не нужно справляться в одиночку. Наш сайт предлагает простые инструменты для подростков, чтобы уменьшить тревогу, улучшить настроение и найти баланс. Благодаря дыхательным упражнениям, техникам релаксации и дневнику настроения забота о психическом здоровье становится небольшим, но важным шагом в твоём дне.",
      "index.section.title": "Мы здесь, чтобы помочь тебе найти спокойствие и баланс.",
      "index.card.1.title": "Дыши легче.",
      "index.card.1.text": "Выполняй короткие дыхательные и расслабляющие упражнения, чтобы уменьшить стресс в любое время и в любом месте.",
      "index.card.1.link": "Узнать больше",
      "index.card.2.title": "Записывай настроение.",
      "index.card.2.text": "Используй простой дневник, чтобы отмечать свои чувства и отслеживать прогресс.",
      "index.card.2.link": "Узнать больше",
      "index.card.3.title": "Найди баланс.",
      "index.card.3.text": "Создай ежедневный ритм с напоминаниями и привычками, которые поддерживают хорошее самочувствие.",
      "index.card.3.link": "Узнать больше",
      "breathing.title": "Дыхание • Центр психического здоровья",
      "breathing.hero.title": "Дыхательные упражнения",
      "breathing.technique": "Техника",
      "breathing.option.478": "Техника 4-7-8",
      "breathing.option.belly": "Глубокое дыхание животом",
      "breathing.option.box": "Квадратное дыхание",
      "breathing.helper": "Выбери технику и нажми «Начать». При необходимости — «Остановить».",
      "breathing.exercise.478.title": "Техника 4-7-8",
      "breathing.exercise.478.text": "Простой метод, который помогает быстро успокоиться: вдох на 4 секунды, задержка на 7, выдох на 8 секунд.",
      "breathing.exercise.belly.title": "Глубокое дыхание животом",
      "breathing.exercise.belly.text": "Дыши диафрагмой, чтобы увеличить поступление кислорода и снизить напряжение в теле.",
      "breathing.exercise.box.title": "Квадратное дыхание",
      "breathing.exercise.box.text": "Вдох — 4 секунды → задержка — 4 секунды → выдох — 4 секунды → задержка — 4 секунды. Очень эффективно для снижения стресса.",
      "breathing.circle.ready": "Вдохни",
      "breathing.meta.ready": "Выбери технику и нажми «Начать».",
      "breathing.start": "Начать",
      "breathing.stop": "Остановить",
      "breathing.mode.478": "Техника 4-7-8",
      "breathing.mode.belly": "Глубокое дыхание животом",
      "breathing.mode.box": "Квадратное дыхание",
      "diary.title": "Дневник • Центр психического здоровья",
      "diary.hero.title": "Дневник",
      "diary.helper": "Выбери день, чтобы добавить эмоцию и заметки.",
      "diary.emotion.label": "Выбери эмоцию:",
      "diary.export": "Экспортировать",
      "diary.import": "Импортировать",
      "diary.notes.label": "Заметки:",
      "diary.notes.placeholder": "Что ты чувствуешь сегодня?",
      "diary.month.prev": "Предыдущий месяц",
      "diary.month.next": "Следующий месяц",
      "diary.month.short": "Месяц",
      "reminders.title": "Напоминания • Центр психического здоровья",
      "reminders.hero.title": "Напоминания",
      "reminders.intro": "Настрой ежедневные напоминания, чтобы не забывать о дыхательных упражнениях, записях настроения и полезных привычках.",
      "reminders.item1.title": "Пауза на дыхание — каждый день в 10:00",
      "reminders.item1.text": "Короткое упражнение в середине дня.",
      "reminders.item2.title": "Запись настроения — перед сном",
      "reminders.item2.text": "Отмечай чувства и мысли в конце дня.",
      "reminders.item3.title": "Еженедельный обзор — по воскресеньям в 20:00",
      "reminders.item3.text": "Посмотри, что помогло больше всего.",
      "about.title": "О нас • Центр психического здоровья",
      "about.hero.title": "О нас",
      "about.intro": "Наша цель — помочь подросткам заботиться о психическом здоровье с помощью простых и доступных инструментов. Объединяя дыхательные упражнения, дневник настроения и напоминания, мы создаём среду, которая помогает сохранять спокойствие и баланс в повседневной жизни.",
      "about.contacts": "Наши контакты:",
      "about.email": "E-mail:",
      "about.phone": "Телефон:",
      "about.form.name": "Имя",
      "about.form.email": "Ваш e-mail",
      "about.form.message": "Ваше сообщение",
      "about.form.send": "Отправить",
      "about.form.sending": "Отправка...",
      "about.form.sent": "Сообщение отправлено!",
      "about.contact.fail": "Ошибка, попробуй ещё раз!",
      "auth.title": "Авторизация • Центр психического здоровья",
      "auth.title.short": "Авторизация",
      "auth.heading": "Войти / Зарегистрироваться",
      "auth.subtitle": "Используй свою почту и пароль для доступа к аккаунту.",
      "auth.register": "Зарегистрироваться",
      "auth.password": "Пароль",
      "auth.back": "Назад на главную",
      "auth.status.empty": "Заполни все поля!",
      "auth.status.exists": "Пользователь уже существует!",
      "auth.status.registered": "Регистрация успешна! Теперь можно войти.",
      "auth.status.bad": "Неверные данные!",
      "auth.status.login": "Ты вошёл в систему!",
      "auth.status.imported": "Данные импортированы!",
      "auth.status.export.empty": "Нет данных для экспорта!",
      "auth.status.import.bad": "Ошибка в файле!",
      "breathing.toast.start": "Дыхательное упражнение начато",
      "breathing.toast.stop": "Остановлено",
      "reminders.toast.on": "Напоминание включено",
      "reminders.toast.off": "Напоминание выключено",
      "lang.lv": "LV",
      "lang.ru": "RU",
      "lang.en": "EN"
    },
    en: {
      "common.skip": "Skip to content",
      "common.brand": "Mental Health Center",
      "common.nav.breathing": "Breathing",
      "common.nav.diary": "Diary",
      "common.nav.reminders": "Reminders",
      "common.nav.about": "About",
      "common.auth.login": "Log in",
      "common.auth.logout": "Log out",
      "common.footer": "© {year} Mental Health Center • Prototype (HTML/CSS/JS)",
      "index.title": "Mental Health Center",
      "index.hero.title": "Free your mind. Improve your daily life.",
      "index.hero.subtitle": "Stress is part of life, but you do not have to face it alone. Our website offers simple tools for young people to reduce anxiety, improve mood, and find balance. With breathing exercises, relaxation techniques, and a mood diary, caring for your mental health becomes a small but meaningful step in your day.",
      "index.section.title": "We are here to help you find calm and balance.",
      "index.card.1.title": "Breathe easier.",
      "index.card.1.text": "Do short breathing and relaxation exercises to reduce stress anytime, anywhere.",
      "index.card.1.link": "Learn more",
      "index.card.2.title": "Track your mood.",
      "index.card.2.text": "Use a simple diary to reflect on your feelings and follow your progress.",
      "index.card.2.link": "Learn more",
      "index.card.3.title": "Find balance.",
      "index.card.3.text": "Build a daily routine with reminders and habits that support your well-being.",
      "index.card.3.link": "Learn more",
      "breathing.title": "Breathing • Mental Health Center",
      "breathing.hero.title": "Breathing exercises",
      "breathing.technique": "Technique",
      "breathing.option.478": "4-7-8 technique",
      "breathing.option.belly": "Deep belly breathing",
      "breathing.option.box": "Box breathing",
      "breathing.helper": "Choose a technique and press “Start”. If needed — “Stop”.",
      "breathing.exercise.478.title": "4-7-8 technique",
      "breathing.exercise.478.text": "A simple method that helps you calm down quickly: inhale for 4 seconds, hold for 7, exhale for 8 seconds.",
      "breathing.exercise.belly.title": "Deep belly breathing",
      "breathing.exercise.belly.text": "Breathe with your diaphragm to increase oxygen and reduce tension in your body.",
      "breathing.exercise.box.title": "Box breathing",
      "breathing.exercise.box.text": "Inhale for 4 seconds → hold for 4 seconds → exhale for 4 seconds → hold for 4 seconds. Very effective for reducing stress.",
      "breathing.circle.ready": "Inhale",
      "breathing.meta.ready": "Choose a technique and press “Start”.",
      "breathing.start": "Start",
      "breathing.stop": "Stop",
      "breathing.mode.478": "4-7-8 technique",
      "breathing.mode.belly": "Deep belly breathing",
      "breathing.mode.box": "Box breathing",
      "diary.title": "Diary • Mental Health Center",
      "diary.hero.title": "Diary",
      "diary.helper": "Choose a day to add an emotion and notes.",
      "diary.emotion.label": "Choose an emotion:",
      "diary.export": "Export",
      "diary.import": "Import",
      "diary.notes.label": "Notes:",
      "diary.notes.placeholder": "How do you feel today?",
      "diary.month.prev": "Previous month",
      "diary.month.next": "Next month",
      "diary.month.short": "Month",
      "reminders.title": "Reminders • Mental Health Center",
      "reminders.hero.title": "Reminders",
      "reminders.intro": "Set daily reminders so you do not forget breathing exercises, mood notes, and healthy habits.",
      "reminders.item1.title": "Breathing break — every day at 10:00",
      "reminders.item1.text": "A short exercise in the middle of the day.",
      "reminders.item2.title": "Mood note — before bed",
      "reminders.item2.text": "Record your feelings and thoughts at the end of the day.",
      "reminders.item3.title": "Weekly review — Sundays at 20:00",
      "reminders.item3.text": "Look back at what helped the most.",
      "about.title": "About • Mental Health Center",
      "about.hero.title": "About",
      "about.intro": "Our goal is to help young people care for their mental health using simple and accessible tools. By combining breathing exercises, a mood diary, and reminders, we create an environment that supports calm and balance in everyday life.",
      "about.contacts": "Our contacts:",
      "about.email": "Email:",
      "about.phone": "Phone:",
      "about.form.name": "Name",
      "about.form.email": "Your email address",
      "about.form.message": "Your message",
      "about.form.send": "Send",
      "about.form.sending": "Sending...",
      "about.form.sent": "Message sent!",
      "about.contact.fail": "Something went wrong, try again!",
      "auth.title": "Authorization • Mental Health Center",
      "auth.title.short": "Authorization",
      "auth.heading": "Log in / Register",
      "auth.subtitle": "Use your email and password to access your account.",
      "auth.register": "Register",
      "auth.password": "Password",
      "auth.back": "Back to home",
      "auth.status.empty": "Fill in all fields!",
      "auth.status.exists": "User already exists!",
      "auth.status.registered": "Registration successful! You can log in now.",
      "auth.status.bad": "Incorrect details!",
      "auth.status.login": "You are logged in!",
      "auth.status.imported": "Data imported!",
      "auth.status.export.empty": "No data to export!",
      "auth.status.import.bad": "File error!",
      "breathing.toast.start": "Breathing exercise started",
      "breathing.toast.stop": "Stopped",
      "reminders.toast.on": "Reminder on",
      "reminders.toast.off": "Reminder off",
      "lang.lv": "LV",
      "lang.ru": "RU",
      "lang.en": "EN"
    }
  };

  const PAGE_TITLE_MAP = {
    index: "index.title",
    breathing: "breathing.title",
    diary: "diary.title",
    reminders: "reminders.title",
    about: "about.title"
  };

  function getLang() {
    return localStorage.getItem("lang") || "lv";
  }

  function t(key, lang = getLang(), vars = {}) {
    const dict = DICT[lang] || DICT.lv;
    let value = dict[key] ?? DICT.lv[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      value = value.replaceAll(`{${k}}`, String(v));
    });
    return value;
  }

  function updateAuthUI() {
    const user = localStorage.getItem("currentUser");
    const btn = document.getElementById("authBtn");
    const emailSpan = document.getElementById("userEmail");
    if (!btn && !emailSpan) return;
    const lang = getLang();
    if (user) {
      if (emailSpan) emailSpan.textContent = user;
      if (btn) {
        btn.textContent = t("common.auth.logout", lang);
        btn.onclick = () => {
          localStorage.removeItem("currentUser");
          updateAuthUI();
          window.location.href = "index.html";
        };
      }
    } else {
      if (emailSpan) emailSpan.textContent = "";
      if (btn) {
        btn.textContent = t("common.auth.login", lang);
        btn.onclick = () => {
          window.location.href = "auth.html";
        };
      }
    }
  }

  function applyTranslations(lang = getLang()) {
    document.documentElement.lang = lang;
    const pageKey = document.body?.dataset.pageTitle;
    if (pageKey) document.title = t(pageKey, lang, { year: new Date().getFullYear() });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key, lang, { year: new Date().getFullYear() });
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = t(key, lang);
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.dataset.i18nAriaLabel;
      const value = t(key, lang);
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-option]").forEach((el) => {
      const key = el.dataset.i18nOption;
      const value = t(key, lang);
      if (value !== undefined) el.textContent = value;
    });

    updateAuthUI();
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  function initNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-primary-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  window.getCurrentLang = getLang;
  window.t = t;

  window.showToast = function (message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast.__t);
    toast.__t = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  };

  window.exportDiary = function () {
    const data = localStorage.getItem("gv-diaries-v1");
    if (!data) {
      alert(t("auth.status.export.empty"));
      return;
    }
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diary.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.importDiary = function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        localStorage.setItem("gv-diaries-v1", JSON.stringify(data));
        if (typeof showToast === "function") showToast(t("auth.status.imported"));
      } catch {
        alert(t("auth.status.import.bad"));
      }
    };
    reader.readAsText(file);
  };

  window.logout = function () {
    localStorage.removeItem("currentUser");
    updateAuthUI();
    window.location.href = "auth.html";
  };

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const status = document.getElementById("status");
      if (!status) return;
      status.textContent = t("about.form.sending");
      status.style.color = "gray";
      setTimeout(() => {
        status.textContent = t("about.form.sent");
        status.style.color = "#4CAF50";
        form.reset();
      }, 800);
    });
  }

  function initLanguage() {
    const select = document.getElementById("langSelect");
    if (!select) return;
    const storedLang = getLang();
    select.value = storedLang;
    applyTranslations(storedLang);
    select.addEventListener("change", () => {
      const newLang = select.value;
      localStorage.setItem("lang", newLang);
      applyTranslations(newLang);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initContactForm();
    initLanguage();
    applyTranslations(getLang());
  });

  window.addEventListener("storage", (e) => {
    if (e.key === "currentUser") updateAuthUI();
    if (e.key === "lang") applyTranslations(getLang());
  });
})();