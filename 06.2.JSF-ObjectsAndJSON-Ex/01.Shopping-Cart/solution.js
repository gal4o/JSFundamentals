function solve() {
    let products = [];
    let total = 0;
    let output = document.getElementsByTagName('textarea')[0];
    for (let i = 0; i < 3; i++) {
        let element = document.getElementsByClassName('product')[i];
        let elementName = element.children[1].innerHTML;
        let elementPrice = element.children[2].innerHTML.split(': ')[1];
       document.getElementsByTagName('button')[i].addEventListener('click', () => {
        products.push(elementName);
        total+=Number(elementPrice);

        output.value += `Added ${elementName} for ${elementPrice.toFixed(2)} to the cart.\n`;
       })

        
    }
    document.getElementsByTagName('button')[3].addEventListener('click', () => {
        output.value +=`You bought ${products.join(', ')} for ${total.toFixed(2)}.`;
    })
}

// with obj:

// products.push({elementName, elementPrice});
// let list = products.map(p => p.elementName).filter((el, idx, arr) => {
//     if (arr.indexOf(el) === idx) {
//         return el;
//     }
// })
// let total = products.map(p => p.elementPrice).reduce((a,b) => {
//     return a+b;
// });

