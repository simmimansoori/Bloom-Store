import { getCartProductFromLS } from "./getCartProduct"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cardProducts = getCartProductFromLS();
    cardProducts = cardProducts.filter( (curPod) => curPod.id !== id);

    localStorage.setItem("cartProductLS", JSON.stringify(cardProducts));


    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete", id);
    };

    updateCartValue(cardProducts);
}