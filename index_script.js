

document.addEventListener('DOMContentLoaded', () => {
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach(card => {
    let targetPage = '';
    const label = card.getAttribute('aria-label').toLowerCase();

    // Determine target page based on aria-label
    if (label.includes('tops')) {
      targetPage = 'categories/tops.html';
    } else if (label.includes('dresses')) {
      targetPage = 'categories/dresses.html';
    } else if (label.includes('bottoms')) {
      targetPage = 'categories/bottoms.html';
    } else if (label.includes('accessories')) {
      targetPage = 'categories/accessories.html';
    }

    if (!targetPage) return; // skip if no target found

    card.addEventListener('click', () => {
      window.location.href = targetPage;
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = targetPage;
      }
    });
  });
});

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
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

    function validateEmail(email) {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValid ? email : null;
    }