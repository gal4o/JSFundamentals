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
        shelves[data[0]] = data[1];
      }
      
    } else {
      let data = element.split(': ');
      let title = data[0];
      let author = data[1].split(', ')[0];
      let genre = data[1].split(', ')[1];

      if (shelves.includes(genre)) {
        let book = `--> ${data[0]}: ${data[1].split(', ')[0]}`

        books.push(book);
      }
    }
  }

  // shelves.sort((a, b) => {
  //   a-b;
  // })

  shelves.forEach(element => { // izpi6i
    let p = document.createElement('p');
    p.textContent = `${element}: count
    ${books.join('\n')}
    `;
    output.appendChild(p);
  });
  // console.log(shelves);
  // console.log(books);
}