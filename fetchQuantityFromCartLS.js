import { getCartProductFromLS } from "./getCartProduct"

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductFromLS();

    let existingProdduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity = 1;

    if(existingProdduct) {
        quantity = existingProdduct.quantity;
        price = existingProdduct.price;
    }

    return {quantity , price};
}