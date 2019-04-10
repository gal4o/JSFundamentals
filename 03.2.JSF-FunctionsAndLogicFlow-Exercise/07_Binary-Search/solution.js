function binarySearch() {
    let arr  = document.getElementById('arr').value.split(', ');
    let num = document.getElementById('num').value;
    let output = document.getElementById('result');
    output.textContent = result(arr, num);

    function result(arr, num) {
        for (let i = 0; i<arr.length; i++) {
            console.log(arr[i]);
            if(arr[i] === num) {
                return `Found ${num} at index ${arr.indexOf(num)}`;
            }
        }
        return `${num} is not in the array`;
       
    }
}