function solve() {
  let storage = {};
  let profit = 0;

  document.getElementsByTagName('button')[0].addEventListener('click', add)
  document.getElementsByTagName('button')[1].addEventListener('click', buy)
  document.getElementsByTagName('button')[2].addEventListener('click', end)


  function add() {
    let data = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    
    for (let item of data) {
      if (!storage.hasOwnProperty(item.name)) {
        storage[item.name] = {
          price: item.price,
          quantity: item.quantity
        }
      } else {
        storage[item.name] = {
          price: item.price,
          quantity: storage[item.name].quantity + item.quantity
        }
      }
      document.getElementsByTagName('textarea')[2].value+=`Successfully added ${item.quantity} ${item.name}. Price: ${item.price}\n`;

    }

  }
  
  function buy() {
    let product = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    if (storage.hasOwnProperty(product.name) && storage[product.name].quantity >= product.quantity) {
      storage[product.name].quantity-=product.quantity;
      profit+=Number(product.quantity)*Number(storage[product.name].price);
      document.getElementsByTagName('textarea')[2].value+=`${product.quantity} ${product.name} sold for ${Number(product.quantity)*Number(storage[product.name].price)}.\n`;
      
    } else {
      document.getElementsByTagName('textarea')[2].value+='Cannot complete order.\n';
    }
  }

  function end() {
    document.getElementsByTagName('textarea')[2].value+=`Profit: ${profit.toFixed(2)}.`;
    document.getElementsByTagName('button')[0].removeEventListener('click', add)
    document.getElementsByTagName('button')[1].removeEventListener('click', buy)
    document.getElementsByTagName('button')[2].removeEventListener('click', end)
  
  }
}

// [{"name": "tomatoes", "quantity": 20, "price": 0.50}, {"name": "potatoes", "quantity": 10, "price": 0.60}]