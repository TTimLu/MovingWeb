document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.substring(0, 2);
  const defaultLang = "en";
  const savedLang = localStorage.getItem("language") || userLang || defaultLang;
  const languageSelect = document.getElementById("languageSelect");

  // 设置语言选择器的默认值
  languageSelect.value = savedLang;

  // 监听语言选择变化
  languageSelect.addEventListener("change", (e) => switchLanguage(e.target.value));

  // 加载翻译
  loadTranslations(savedLang);
});

// 切换语言
function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  loadTranslations(lang);
}

// 加载 JSON 语言包
function loadTranslations(lang) {
  fetch("translations.json")
    .then(response => response.json())
    .then(translations => {
      const selectedLang = translations[lang] ? lang : "en";
      applyTranslations(translations[selectedLang]);
    })
    .catch(error => console.error("Error loading translations:", error));
}

// 应用翻译
function applyTranslations(translations) {
  document.getElementById("header").textContent = translations.header;
  document.getElementById("tagline").textContent = translations.tagline;
  document.getElementById("about").textContent = translations.about;
  document.getElementById("services").textContent = translations.services;
  document.getElementById("contact").textContent = translations.contact;
  document.getElementById("aboutText").textContent = translations.aboutText;
  document.getElementById("quoteButton").textContent = translations.quoteButton;
}
