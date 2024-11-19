//Task4
// defining a product interface that represent product structure
interface Product {
    name: string;
    price: number;
}
//function calculate total price receives an array of product then calculates the total price
function calculateTotalPrice(products: Product[]): number {
    return products.map(product => product.price).reduce((total, price) => total + price, 0);
}

const products: Product[] = [
    { name: "TV", price: 1000 },
    { name: "IPhone", price: 500 },
    { name: "Samsung", price: 300 },
];

const totalPrice = calculateTotalPrice(products);
console.log("Total Price:", totalPrice);
// to compile  tsc product.ts
// to run      node product.js