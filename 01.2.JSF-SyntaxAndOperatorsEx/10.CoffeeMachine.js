function solve(arr) {
    let income = 0;
    for (let i = 0; i < arr.length; i++) {
        let price = 0;
        let token = arr[i].split(', ');
        let coins = Number(token[0]);
        let drink = token[1];
        let drinkPart;
        let sugar = Number(token[token.length-1]);
        if (drink === 'coffee') {
            drinkPart = token[2];
            if (drinkPart === 'caffeine') {
                price=0.80
            } else {
                price = 0.90
            }
        } else {
            price =0.80;
        }

        if (token.includes('milk')) {
			let milkPrice = price*0.10;
            price+=milkPrice;
        }

        if(sugar>=1&&sugar<=5) {
            price+=0.10;
        }
        if (coins>=price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(1)}0$ Change: ${(coins-price).toFixed(1)}0$`);
            income+=price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price-coins).toFixed(1)}0$ more.`);
        }
    }
    console.log(`Income Report: ${income.toFixed(1)}0$`)
}

solve(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);