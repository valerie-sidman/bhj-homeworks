const productQuantityQontrols = document.querySelectorAll('.product__quantity-controls');
const cartProducts = document.querySelector('.cart__products');


for (let i = 0; i < productQuantityQontrols.length; i++) {
  const productQuantityControlDec = productQuantityQontrols[i].querySelector('.product__quantity-control_dec');
  const productQuantityControlInc = productQuantityQontrols[i].querySelector('.product__quantity-control_inc');
  const productQuantityValue = productQuantityQontrols[i].querySelector('.product__quantity-value');
  const product = productQuantityQontrols[i].closest('.product');
  const productAdd = product.querySelector('.product__add');
  const img = product.querySelector('.product__image');

  productQuantityControlInc.addEventListener('click', () => {
    productQuantityValue.innerText = Number(productQuantityValue.textContent) + 1;
  })

  productQuantityControlDec.addEventListener('click', () => {
    if (Number(productQuantityValue.textContent) > 1)
    productQuantityValue.innerText = Number(productQuantityValue.textContent) - 1;
  })

  productAdd.addEventListener('click', () => {
    const productInCart = cartProducts.querySelector(`.cart__product[data-id="${product.getAttribute('data-id')}"]`);
    if (productInCart) {
      const cartProductCount = productInCart.querySelector('.cart__product-count');
      cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productQuantityValue.textContent);
    } else {
      cartProducts.insertAdjacentHTML('beforeEnd',
    `<div class="cart__product" data-id="${product.getAttribute('data-id')}">
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${productQuantityValue.textContent}</div>
    </div>`)
    }
  })
}
