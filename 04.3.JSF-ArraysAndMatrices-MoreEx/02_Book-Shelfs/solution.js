function solve() {
  let input =JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let shelves = [];
  let books = [];

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element.includes('->')) {
      let data = element.split(' -> ');
      
        if (!(data[0] in shelves)) {
          shelves[data[0]] =data[1];
        
      }
      
    } else {
      let data = element.split(': ');
      let title = data[0];
      let author = data[1].split(', ')[0];
      let genre = data[1].split(', ')[1];

      if (shelves.includes(genre)) {
        let book = {};
        book['title'] = title;
        book['author'] = author;
        book['genre'] = genre;

        books.push(book);
      }
    }
  }

  let result = [].concat(shelves);
  result.sort((a, b) => {
    counter(a,books)>=counter(b,books);
  })
  books.sort((a, b) => {
    if(a.title < b.title) { return -1; }
    if(a.ti > b.title) { return 1; }
    return 0
  })
  
for (let key in result) {  
  if (result.hasOwnProperty(key)) {
    let element = result[key];
    let p = document.createElement('p');
    let number;
    for (let i = 0; i < shelves.length; i++) {
      let genre = shelves[i];
      if (genre === element) {
        number = i;
        break;
      }
    }
    p.textContent = `${number} ${element}: ${counter(element, books)}`;
    
    output.appendChild(p);
    books.forEach(book => { 
      if (book.genre === element) {
        let p = document.createElement('p');
      p.textContent = `--> ${book.title}: ${book.author}`;
      output.appendChild(p);

      }    
    });
  }
}

function counter(element, books) {
  let count = 0;
  
    books.forEach(book => { 
      if (book.genre === element) {
        count++;
      }    
    });
  return count;
}

}