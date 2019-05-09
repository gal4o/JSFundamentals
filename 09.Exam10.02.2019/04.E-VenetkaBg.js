function solve(cars) {
    let towns = {};
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        if (towns[car.town]) {
            towns[car.town].profit += +car.price;
            towns[car.town].counter +=1;
        } else {
            towns[car.town] = {};
            towns[car.town].profit = +car.price;
            towns[car.town].counter =1;
        }
    }
   
    let sortedTowns = Object.keys(towns)
    .sort(
        (a,b) => { // more: sort by name
            if (towns[a].profit === towns[b].profit) {
                if (towns[a].counter === towns[b].counter) {
                    return b<a
                }
                return towns[b].counter>towns[a].counter
            }
        return towns[b].profit>towns[a].profit
    }
    )  
    console.log(`${sortedTowns[0]} is most profitable - ${towns[sortedTowns[0]].profit} BGN`)
    let mostPopularCar = {}
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        if (car.town === sortedTowns[0]) {
            if (mostPopularCar[car.model]) {
                mostPopularCar[car.model] += 1;
            } else {
                mostPopularCar[car.model] = {};
                mostPopularCar[car.model]=1;
            }
        }
        
    }

    let sortedCars = Object.keys(mostPopularCar)
    .sort((a,b) => { // more sort by price model name
        return mostPopularCar[b]>mostPopularCar[a]
    }) 
    console.log(`Most driven model: ${sortedCars[0]}`)

    let result = {}
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        if (car.model === sortedCars[0]) {
            if (result[car.town]) {
                result[car.town].push(car.regNumber);
            } else {
                result[car.town] = [];
                result[car.town].push(car.regNumber);
            }
            
        } 
    }
    let absResult = Object.keys(result).sort() 
    for (let key in absResult) {
        if (absResult.hasOwnProperty(key)) {
            let element = absResult[key];
            let sortNums = result[element].sort()
            console.log(`${element}: ${sortNums.join(', ')}`);
            
        }
    }
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 9},
// { model: 'Lada', regNumber: 'C5959CZZ', town: 'Sofia', price: 8},
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
)