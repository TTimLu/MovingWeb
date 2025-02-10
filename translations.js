const translations = {
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        welcome: "Welcome to US Brother Moving",
        description: "We provide the best moving services in the area.",
        contact_us: "Contact Us",
        send: "Send",
        footer: "© 2023 US Brother Moving. All rights reserved.",
        local_moving: "Local Moving",
        local_moving_desc: "We offer fast and reliable local moving services.",
        long_distance_moving: "Long Distance Moving",
        long_distance_moving_desc: "Trust us for your long-distance moving needs.",
        packing_services: "Packing Services",
        packing_services_desc: "Let us handle the packing for you."
    },
    ja: {
        home: "ホーム",
        services: "サービス",
        contact: "お問い合わせ",
        welcome: "US Brother Movingへようこそ",
        description: "私たちはこの地域で最高の引越しサービスを提供しています。",
        contact_us: "お問い合わせ",
        send: "送信",
        footer: "© 2023 US Brother Moving. 全著作権所有。",
        local_moving: "ローカル引越し",
        local_moving_desc: "迅速で信頼性の高いローカル引越しサービスを提供します。",
        long_distance_moving: "長距離引越し",
        long_distance_moving_desc: "長距離引越しのニーズにお応えします。",
        packing_services: "梱包サービス",
        packing_services_desc: "梱包は私たちにお任せください。"
    },
    zh: {
        home: "首页",
        services: "服务",
        contact: "联系我们",
        welcome: "欢迎来到US Brother Moving",
        description: "我们提供该地区最好的搬家服务。",
        contact_us: "联系我们",
        send: "发送",
        footer: "© 2023 US Brother Moving. 版权所有。",
        local_moving: "本地搬家",
        local_moving_desc: "我们提供快速可靠的本地搬家服务。",
        long_distance_moving: "长途搬家",
        long_distance_moving_desc: "我们为您提供长途搬家服务。",
        packing_services: "打包服务",
        packing_services_desc: "让我们为您处理打包工作。"
    },
    ko: {
        home: "홈",
        services: "서비스",
        contact: "연락처",
        welcome: "US Brother Moving에 오신 것을 환영합니다",
        description: "우리는 이 지역에서 최고의 이사 서비스를 제공합니다.",
        contact_us: "연락처",
        send: "보내기",
        footer: "© 2023 US Brother Moving. 모든 권리 보유.",
        local_moving: "지역 이사",
        local_moving_desc: "빠르고 신뢰할 수 있는 지역 이사 서비스를 제공합니다.",
        long_distance_moving: "장거리 이사",
        long_distance_moving_desc: "장거리 이사 요구 사항을 충족시켜 드립니다.",
        packing_services: "포장 서비스",
        packing_services_desc: "포장은 저희에게 맡겨주세요."
    }
};


// Function to update the language
function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to detect browser language and set the page language
function detectLanguage() {
    const browserLanguage = navigator.language.split('-')[0]; // Get the primary language (e.g., "en" from "en-US")
    const supportedLanguages = ['en', 'ja', 'zh', 'ko']; // Supported languages

    // Check if the browser language is supported
    if (supportedLanguages.includes(browserLanguage)) {
        updateLanguage(browserLanguage);
        document.getElementById('language-selector').value = browserLanguage; // Update the language selector
    } else {
        // Default to English if the browser language is not supported
        updateLanguage('en');
        document.getElementById('language-selector').value = 'en';
    }
}

// Call the detectLanguage function when the page loads
document.addEventListener('DOMContentLoaded', detectLanguage);

// Add event listener to the language selector
document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
