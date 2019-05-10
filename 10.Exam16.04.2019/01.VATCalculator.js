function solve(priceWithVAT, rate) {
    let price = priceWithVAT/(1+rate/100);
    console.log(price.toFixed(2))
}

solve(220.00,
    10.00)