const cartValue = document.querySelector("#bagValue");

export const updateCartValue = (cartProducts) => {
  return (
    cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> 
    ${cartProducts.length} </i>`);
};