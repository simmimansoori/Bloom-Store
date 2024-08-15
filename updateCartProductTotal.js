import { getCartProductFromLS } from "./getCartProduct"
import { updateCartValue } from "./updateCartValue";

export const updateCartProductTotal = () => {
    let localCartProducts = getCartProductFromLS();


    let initialValue = 0;

    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },initialValue) ;
    
    document.querySelector(".productSubTotal").innerText = `₹${totalProductPrice.toFixed(2)}`;
    
    document.querySelector(".productFinalTotal").innerText = `₹${totalProductPrice + 50}` ;

    
    console.log(totalProductPrice);

    
};