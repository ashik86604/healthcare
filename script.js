// Simple JavaScript to show alert on button click

document.getElementById('bookAppointmentBtn').addEventListener('click', () => {
    alert('Booking appointment feature coming soon!');
});

document.getElementById('learnMoreBtn').addEventListener('click', () => {
    window.location.href = '#services';
});
// Home page buttons (only on index.html)
const bookBtn = document.getElementById('bookAppointmentBtn');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        window.location.href = 'book-appointment.html';
    });
}

const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        window.location.href = 'learn-more.html';
    });
}

// Appointment form submission handling
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // You can add validation or send data to backend here

        // Hide form and show confirmation
        appointmentForm.style.display = 'none';
        const message = document.getElementById('confirmationMessage');
        if (message) message.style.display = 'block';
    });
}
