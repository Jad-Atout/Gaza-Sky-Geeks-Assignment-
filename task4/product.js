//function calculate total price receives an array of product then calculates the total price
function calculateTotalPrice(products) {
    return products.map(function (product) { return product.price; }).reduce(function (total, price) { return total + price; }, 0);
}
var products = [
    { name: "TV", price: 1000 },
    { name: "IPhone", price: 500 },
    { name: "Samsung", price: 300 },
];
var totalPrice = calculateTotalPrice(products);
console.log("Total Price:", totalPrice);
// to compile  tsc product.ts
// to run      node product.js
