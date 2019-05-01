function solve() {
  let inputEl = document.getElementsByTagName('textarea')[0];
  let list = document.getElementById('furniture-list');
  let output = document.getElementsByTagName('textarea')[1];
  let outputList = [];
  let total = 0;
  let avg = [];

  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let input = JSON.parse(inputEl.value);
    for (let i = 0; i < input.length; i++) {
      let product = input[i];
      let furniture = document.createElement('div');
      furniture.className = 'furniture';
      let name = document.createElement('p');
      name.innerHTML = `Name: ${product.name}`;
      let price = document.createElement('p');
      price.innerHTML = `Price: ${product.price}`;
      let decoration = document.createElement('p');
      decoration.innerHTML = `Name: ${product.decFactor}`;
      let check = document.createElement('input');
      check.type = "checkbox";
      furniture.appendChild(name);
      furniture.appendChild(price);
      furniture.appendChild(decoration);
      furniture.appendChild(check);
      list.appendChild(furniture);
    }
  })

  document.getElementsByTagName('button')[1].addEventListener('click', () => {
    let taked = Array.from(document.getElementById('furniture-list').children);
    for (let i = 0; i < taked.length; i++) {
      let isChecked = taked[i].getElementsByTagName('input')[0].checked;
      if (isChecked) {
        let product = taked[i].getElementsByTagName('p')[0].innerHTML.split(': ')[1];
        outputList.push(product);
        total+=Number(taked[i].getElementsByTagName('p')[1].innerHTML.split(': ')[1]);
        avg.push(Number(taked[i].getElementsByTagName('p')[2].innerHTML.split(': ')[1]))
      }
      
    }
    output.value = `Bought furniture: ${outputList.join(', ')}\n`;
    output.value += `Total price: ${total.toFixed(2)}\n`;
    let avgValue = avg.reduce((a, b) => {
      return (a+b)/avg.length;
    })
    output.value +=  `Average decoration factor: ${avgValue}`;  
    // console.log(`Bought furniture: ${outputList.join(', ')}`);
    // console.log(`Total price: ${total.toFixed(2)}`);

  })

}

// [{"name": "Sofia", "price": 200, "decFactor": 1.5},{"name": "Wardrobe", "price": 160, "decFactor": 0.8}]