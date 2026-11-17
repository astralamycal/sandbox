const products = [
    { name: "Clavier", price: 45, inStock: true },
    { name: "Souris", price: 25, inStock: false },
    { name: "Écran", price: 250, inStock: true },
];

let productCount = 0;
let productPriceAvg = 0;

for (product of products) {
    if (product.inStock === true) {
        productCount++;
        productPriceAvg += product.price;
    }
}
productPriceAvg = productPriceAvg / productCount;
console.log(productPriceAvg);