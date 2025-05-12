// Add to Cart interaction
function addToCart(productName) {
    alert(productName + " added to cart!");
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            alert('Thank you for subscribing, ' + email + '!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
            emailInput.focus();
        }
    });
}

function validateEmail(email) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? email : null;
}

// Contact form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}
