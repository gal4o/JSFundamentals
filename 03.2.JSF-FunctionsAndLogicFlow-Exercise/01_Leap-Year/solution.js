function leapYear() {
    let button = document.getElementsByTagName('button');
    button[0].addEventListener('click', printYear);
    let year = document.getElementsByTagName('input')[0];
    let h2 = document.querySelector('#year h2');
    let div = document.querySelector('#year div');

    function printYear(){
        let leap = checkYear(year.value);
        h2.textContent=`${leap} Year`;
        div.textContent=(year.value);
        year.value = "";
    }

    function checkYear(year) {
        if(year%4 === 0 && year%100 !== 0) {
            return "Leap";
        } else if(year%400 === 0) {
            return "Leap";
        } else {
            return "Not Leap";
        }
        
    }
}