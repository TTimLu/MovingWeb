document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        if (data.success) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message.');
    }
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
