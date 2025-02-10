// 初始化 EmailJS
(function() {
  emailjs.init("YOUR_USER_ID");  // 替换成你的 EmailJS 用户 ID
})();

// 处理表单提交
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // 阻止表单默认提交

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // 表单验证
  if (name && email && message) {
    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    // 使用 EmailJS 发送邮件
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(function(response) {
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();  // 重置表单
      }, function(error) {
        alert('Oops, something went wrong. Please try again!');
      });
  } else {
    alert('Please fill out all fields!');
  }
});
