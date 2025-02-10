document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.substring(0, 2);
  const defaultLang = "en";
  const savedLang = localStorage.getItem("language") || userLang || defaultLang;
  const languageSelect = document.getElementById("languageSelect");

  languageSelect.value = savedLang;
  languageSelect.addEventListener("change", (e) => switchLanguage(e.target.value));
  loadTranslations(savedLang);
});

function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  loadTranslations(lang);
}

function loadTranslations(lang) {
  fetch("translations.json")
    .then(response => response.json())
    .then(translations => {
      const selectedLang = translations[lang] ? lang : "en";
      applyTranslations(translations[selectedLang]);
    })
    .catch(error => console.error("Error loading translations:", error));
}


function loadTranslations(lang) {
  fetch("translations.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load translations.");
      }
      return response.json();
    })
    .then(translations => {
      const selectedLang = translations[lang] ? lang : "en";
      applyTranslations(translations[selectedLang]);
    })
    .catch(error => console.error("Error loading translations:", error));
}


function applyTranslations(translations) {
  document.getElementById("header").textContent = translations.header;
  document.getElementById("tagline").textContent = translations.tagline;
  document.getElementById("about").textContent = translations.about;
  document.getElementById("services").textContent = translations.services;
  document.getElementById("contact").textContent = translations.contact;
  document.getElementById("aboutText").textContent = translations.aboutText;
  document.getElementById("quoteButton").textContent = translations.quoteButton;
}
