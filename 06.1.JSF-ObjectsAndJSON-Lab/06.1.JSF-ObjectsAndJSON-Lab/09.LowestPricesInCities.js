function solve(arr){
    let objP = {};

    for (let i = 0; i < arr.length; i++) {
        let objT = '';
        let data = arr[i].split(' | ');
        let town = data[0];
        let product = data[1];
        let price = data[2];

        if (objP[product]) {
            objT+= `${town}:${price}`;
            
            let nowP =objP[product].split(':')
            if (+nowP[1] > +price) {
                objP[product] = objT;
            }
            
        } else {
            objT+= `${town}:${price}`;
            objP[product]=objT;

        }
            
    }

    for (let key in objP) {
        if (objP.hasOwnProperty(key)) {
            let element = objP[key];
            let out = element.split(':')
            console.log(`${key} -> ${out[1]} (${out[0]})`)
           
        }
    }
}
solve(
    ['Sample Town | Sample Product | 1000','Sample Town | Orange | 2','Sample Town | Peach | 1','Sofia | Orange | 3','Sofia | Peach | 2','New York | Sample Product | 1000.1','New York | Burger | 10']
)