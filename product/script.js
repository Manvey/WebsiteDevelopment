// Enhance Add to Cart button with size validation
document.querySelector('.add-to-cart-btn').addEventListener('click', function(){
    const sizeSelect = document.getElementById('size-select');
    const quantityInput = document.getElementById('quantity-input');
    if(!sizeSelect.value) {
      alert('Please select a size before adding to cart.');
      sizeSelect.focus();
      return;
    }
    const quantity = parseInt(quantityInput.value);
    if(quantity < 1 || quantity > 10 || isNaN(quantity)) {
      alert('Please enter a valid quantity between 1 and 10.');
      quantityInput.focus();
      return;
    }
    addToCart(`${sizeSelect.value} Floral White Dress x${quantity}`);
  });