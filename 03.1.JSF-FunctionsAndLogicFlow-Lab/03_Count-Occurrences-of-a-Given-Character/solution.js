function solve() {
  let string = document.getElementById('string').value;
  let char = document.getElementById('character').value;
  let result = document.getElementById('result');
  result.textContent=`Count of ${char} is ${evenOdd(countOccurrences(string, char))}.`;

  function countOccurrences(string, char) {
    let counter = 0;
    for(let i = 0; i<string.length; i++) {
      if(string[i] === char) {
        counter++;
      }
    }
    return counter;
  }

  function evenOdd(count) {
    if(count%2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
}