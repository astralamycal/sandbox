function calculatePriceTTC(priceHT, vatRate) {
    return priceHT * (1 + vatRate / 100);
}

function calculateDiscount(price, discountPercentage) {
    return price * (discountPercentage / 100);
}

function calculateShippingFees(weight) {
    if (weight < 1) {
        return 5;
    } else if (weight >= 5) {
        return 15;
    }
    return 10;
}

function calculateFinalTotal(priceHT, vatRate, discountPercentage, weight) {
    let finalPrice = calculatePriceTTC(priceHT, vatRate);
    finalPrice = calculateDiscount(finalPrice, discountPercentage);
    return finalPrice + calculateShippingFees(weight);
}

console.log(calculatePriceTTC(100, 20)); // Devrait afficher 120
console.log(calculatePriceTTC(50, 5.5)); // Devrait afficher 52.75