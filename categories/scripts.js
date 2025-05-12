// Add to Cart interaction
function addToCart(productName) {
    alert(productName + " added to cart!");
}

// Newsletter form subscription (if newsletter form exists)
const newsletterForm = document.getElementById('newsletter-form');
if(newsletterForm){
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();
        if(validateEmail(email)) {
            alert('Thank you for subscribing, ' + email + '!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
            emailInput.focus();
        }
    });
}

function validateEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
