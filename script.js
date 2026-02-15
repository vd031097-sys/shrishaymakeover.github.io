// Toggle Menu for Mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// WhatsApp Booking Logic
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh

        // 1. Get values from the form
        const name = document.getElementById('cName').value;
        const phone = document.getElementById('cPhone').value;
        const service = document.getElementById('cService').value;
        const date = document.getElementById('cDate').value;

        // 2. YOUR Phone Number (Replace this!)
        // Format: CountryCode + Number (e.g., 919001289218 for India)
        const salonNumber = "919001289218"; 

        // 3. Create the message
        // %0A creates a new line in the message
        const message = `Hello, I would like to book an appointment.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}`;

        // 4. Open WhatsApp
        // Uses the WhatsApp API to open a chat with the message pre-filled
        const whatsappUrl = `https://wa.me/${salonNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}
// ... (Keep your existing Menu and Booking code above) ...

// WhatsApp REVIEW Logic
const reviewForm = document.getElementById('reviewForm');

if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Get values
        const name = document.getElementById('rName').value;
        const rating = document.getElementById('rRating').value;
        const message = document.getElementById('rMessage').value;

        // 2. YOUR Phone Number
        const salonNumber = "919001289218"; // Change this!

        // 3. Create Message
        const whatsappText = `*New Customer Feedback* %0A%0A*Name:* ${name}%0A*Rating:* ${rating}%0A*Feedback:* ${message}`;

        // 4. Open WhatsApp
        const whatsappUrl = `https://wa.me/${salonNumber}?text=${whatsappText}`;
        window.open(whatsappUrl, '_blank');
        
        // Optional: Clear the form after sending
        reviewForm.reset();
    });

}
