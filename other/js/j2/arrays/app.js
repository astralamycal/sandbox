const orders = [
    { id: 1, customer: "Alice", amount: 150, status: "livrée", products: 3 },
    { id: 2, customer: "Bob", amount: 85, status: "en cours", products: 2 },
    { id: 3, customer: "Charlie", amount: 200, status: "livrée", products: 5 },
    { id: 4, customer: "Diana", amount: 45, status: "annulée", products: 1 },
    { id: 5, customer: "Alice", amount: 120, status: "livrée", products: 2 }
];

console.log(orders.map((order) => order.amount * order.products * 1.1));

console.log(orders.filter((order) => order.status === "livrée"));

console.log(orders.filter((order) => order.status !== "annulée").map((order) => order.amount * order.products * 1.1).reduce((add, number) => add + number, 0));

console.log(orders.find((order) => order.id === 3));

console.log(orders.sort((order1, order2) => order2.amount - order1.amount));