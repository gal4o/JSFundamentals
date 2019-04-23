function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  output.textContent = reverseArr(input);

  function reverseArr(arr) {
    arr.forEach((element, index) => {
      arr[index] = element.split('').reverse().join('');
    });

    arr.forEach((element, index) => {
      arr[index] = element.charAt(0).toUpperCase().concat(element.slice(1));
    });
    return arr.join(' ');
  }
}