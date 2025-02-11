    // 初始化 EmailJS
    emailjs.init('y4CVoupE5M1LSDZ1F'); // 用你的 EmailJS 用户 ID 替换 'YOUR_USER_ID'

    // 获取表单和状态消息元素
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    // 监听表单提交事件
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // 防止表单提交并刷新页面

        // 获取表单数据
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        // 使用 EmailJS 发送邮件
        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            message: message
        };

    emailjs.send("service_959e2bo","template_chpyn2l", templateParams)
        .then(function(response) {
            console.log('Success:', response);
            statusMessage.textContent = 'Your message has been sent successfully!';
            statusMessage.style.color = 'green';
            form.reset();  // 清空表单
        }, function(error) {
            console.log('Failed:', error);
            statusMessage.textContent = 'Failed to send message. Please try again.';
            statusMessage.style.color = 'red';
        });
});

 
// Smooth scrolling for navigation links
document.querySelectorAll('nav a[data-target]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('data-target'); // Get the target section id
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            // Smooth scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'     // Align to the top of the section
            });
        }
    });
});
