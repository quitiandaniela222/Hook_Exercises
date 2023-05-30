//Statement:Given an array of objects that represent products, you must create a new array that contains only the names of the products.
function getProductNames(products) {
    return products.map((product) => product.name);
}


const products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 500 }
];
const productNames = getProductNames(products);
console.log(productNames);