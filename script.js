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
