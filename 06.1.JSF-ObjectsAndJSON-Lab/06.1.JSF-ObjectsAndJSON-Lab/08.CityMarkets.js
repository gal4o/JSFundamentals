function solve(arr){
    let objT = {};

    for (let i = 0; i < arr.length; i++) {
        let objP = {};
        let data = arr[i].split(' -> ');
        let town = data[0];
        let product = data[1];
        let info = [];
        info = data[2].split(' : ');
        let total = Number(info[0])*Number(info[1]);   
        if (objT[town]) {
            objP[product]=total;
            objT[town].push(objP);
        } else {
            objT[town] = [];
            objP[product]=total;
            objT[town].push(objP);

        }
            
    }
    for (let town in objT) {
        if (objT.hasOwnProperty(town)) {
            console.log(`Town - ${town}`)
            objT[town].forEach(element => {
                for (let product in element) {
                    console.log(`$$$${product} : ${element[product]}`)
                }
            });
                        
        }
    }

}
solve(
    ['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Sofia -> Audi Q7 -> 200 : 100000','Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3']
    )