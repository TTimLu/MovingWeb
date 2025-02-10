var userLang = navigator.language || navigator.userLanguage; 
  if (userLang.includes('zh')) {
    window.location.href = 'index_zh.html';
  } else if (userLang.includes('ko')) {
    window.location.href = 'index_ko.html';
  } else if (userLang.includes('ja')) {
    window.location.href = 'index_jp.html';
  else {
    window.location.href = 'index_en.html'; // 默认英语
  }


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
