document.addEventListener("DOMContentLoaded", () => {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init(
      {
        fallbackLng: "ru",
        debug: false,
        ns: ["translation"],
        defaultNS: "translation",
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      },
      (err, t) => {
        if (err) {
          console.error("Error initializing i18next:", err);
          return;
    }

    // Функция для обновления текстов на странице
    const updateContent = () => {
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = i18next.t(key);
      });
    };

    // Обновляем текст на странице при инициализации
    updateContent();

    // Обработчик переключения языка
    const changeLanguage = (lng) => {
      i18next.changeLanguage(lng, (err) => {
        if (err) {
          console.error("Error changing language:", err);
          return;
        }
        updateContent();
      });
    };

    // Добавляем слушатели событий для переключателей языка
    const languageSwitchers = document.querySelectorAll(".language-switch");
    languageSwitchers.forEach((switcher) => {
      switcher.addEventListener("click", (event) => {
        event.preventDefault();
        const lng = event.target.getAttribute("data-lng");
        changeLanguage(lng);
      });
    });
  }
);
});

