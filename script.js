document.getElementById('language-selector').addEventListener('change', function() {
    const lang = this.value;
    switch (lang) {
        case 'ja':
            translatePage('ja');
            break;
        case 'zh':
            translatePage('zh');
            break;
        case 'ko':
            translatePage('ko');
            break;
        default:
            translatePage('en');
            break;
    }
});

function translatePage(language) {
    const translations = {
        en: {
            heading: "Moving Made Easy",
            introText: "We offer reliable moving services to make your transition smooth and hassle-free.",
            quoteButton: "Get a Free Quote",
            contact: "Contact Us",
            sendMessage: "Send Message"
        },
        ja: {
            heading: "簡単に引っ越し",
            introText: "スムーズでストレスのない移行のために信頼性のある引っ越しサービスを提供します。",
            quoteButton: "無料見積もり",
            contact: "お問い合わせ",
            sendMessage: "メッセージを送信"
        },
        zh: {
            heading: "轻松搬家",
            introText: "我们提供可靠的搬家服务，让您的过渡顺利无忧。",
            quoteButton: "获取免费报价",
            contact: "联系我们",
            sendMessage: "发送信息"
        },
        ko: {
            heading: "이사 쉽게 하기",
            introText: "원활하고 번거롭지 않은 전환을 위해 신뢰할 수 있는 이사 서비스를 제공합니다.",
            quoteButton: "무료 견적 받기",
            contact: "연락처",
            sendMessage: "메시지 보내기"
        }
    };

    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('intro-text').textContent = translations[language].introText;
    document.getElementById('get-quote-button').textContent = translations[language].quoteButton;
    document.getElementById('contact-section').querySelector('h2').textContent = translations[language].contact;
    document.getElementById('submit-btn').textContent = translations[language].sendMessage;
}
