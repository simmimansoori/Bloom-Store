import './style.css'
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCard";

// calling the function to display the product detains on card

showProductContainer(products);
console.log(products[0].id);

