const translations = {
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        welcome: "Welcome to US Brother Moving",
        description: "We provide the best moving services in the area.",
        contact_us: "Contact Us",
        send: "Send",
        footer: "© 2023 US Brother Moving. All rights reserved."
    },
    ja: {
        home: "ホーム",
        services: "サービス",
        contact: "お問い合わせ",
        welcome: "US Brother Movingへようこそ",
        description: "私たちはこの地域で最高の引越しサービスを提供しています。",
        contact_us: "お問い合わせ",
        send: "送信",
        footer: "© 2023 US Brother Moving. 全著作権所有。"
    },
    zh: {
        home: "首页",
        services: "服务",
        contact: "联系我们",
        welcome: "欢迎来到US Brother Moving",
        description: "我们提供该地区最好的搬家服务。",
        contact_us: "联系我们",
        send: "发送",
        footer: "© 2023 US Brother Moving. 版权所有。"
    },
    ko: {
        home: "홈",
        services: "서비스",
        contact: "연락처",
        welcome: "US Brother Moving에 오신 것을 환영합니다",
        description: "우리는 이 지역에서 최고의 이사 서비스를 제공합니다.",
        contact_us: "연락처",
        send: "보내기",
        footer: "© 2023 US Brother Moving. 모든 권리 보유."
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});

// Set default language to English
updateLanguage('en');
