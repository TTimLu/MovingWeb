document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        Messages: [
            {
                From: {
                    Email: "your-email@example.com",
                    Name: "US Brother Moving"
                },
                To: [
                    {
                        Email: "recipient-email@example.com",
                        Name: "Recipient Name"
                    }
                ],
                Subject: "New Contact Form Submission",
                TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            }
        ]
    };

    fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('your-mailjet-api-key:your-mailjet-secret-key')
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});
