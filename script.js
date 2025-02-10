// 滚动时给导航栏添加阴影
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// 滚动到联系表单
function openForm() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// 按钮点击动画
document.querySelectorAll('.hero-btn, .quote-btn').forEach(button => {
  button.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
  });

  button.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
  });
});


document.addEventListener("DOMContentLoaded", function () {
    var userLang = navigator.language || navigator.userLanguage;
    var lang = "en"; // 默认英语

    if (userLang.includes("zh")) lang = "zh";
    else if (userLang.includes("ko")) lang = "ko";
    else if (userLang.includes("ja")) lang = "ja";

    fetch("translations.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("title").innerText = data[lang].title;
            document.getElementById("hero-headline").innerText = data[lang].hero_section.headline;
            document.getElementById("hero-subtext").innerText = data[lang].hero_section.subtext;
            document.getElementById("hero-button").innerText = data[lang].hero_section.button;
            document.getElementById("about-title").innerText = data[lang].about_section.title;
            document.getElementById("about-description").innerText = data[lang].about_section.description;
        })
        .catch(error => console.error("Error loading language file:", error));
});
