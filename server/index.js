// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(bodyParser.json());

// Mailjet API credentials
const MAILJET_API_KEY = 'your-mailjet-api-key';
const MAILJET_SECRET_KEY = 'your-mailjet-secret-key';

// Endpoint to handle email sending
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const mailjetData = {
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

    try {
        const response = await fetch('https://api.mailjet.com/v3.1/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64')
            },
            body: JSON.stringify(mailjetData)
        });

        const data = await response.json();
        if (response.ok) {
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } else {
            res.status(500).json({ success: false, message: 'Failed to send email.', error: data });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
