function solve() {
  let arr =JSON.parse(document.getElementById('arr').value);
  let str = document.getElementById('str').value;
  let result = document.getElementById('result');
  let needle = arr[0].split(' ')[2];
  let regex = new RegExp(needle, 'gi');
  for (let row of arr) {
    row = row.replace(regex, str);
    let p = document.createElement('p');
    p.textContent = row;
    result.appendChild(p);
  }


  // let needle = FirstStr[2].toLowerCase();
  // for (let i = 0; i < arr.length; i++) {
  //   let row = arr[i].split(' ');
  //   for (let j = 0; j < row.length; j++) {
  //     let word = row[j];
  //     if (word.toLowerCase() === needle) {
  //       arr[i]=arr[i].replace(word, str)
  //     }
      
  //   }
  // }
  
}