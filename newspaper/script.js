function addToCart(productName) {
    alert(productName + " added to cart!");
  }
  
  // Newsletter form submission validation and feedback
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
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