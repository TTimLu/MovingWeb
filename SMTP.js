document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    sendEmail(name, email, message);
});

function sendEmail(name, email, message) {
    Email.send({
        SecureToken: "your-secure-token-here",  // SMTP.js提供的SecureToken
        To: 'your-email@example.com',
        From: email,
        Subject: `New message from ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(function(response) {
        alert('Message sent successfully!');
    }).catch(function(error) {
        alert('Error sending message.');
    });
}
