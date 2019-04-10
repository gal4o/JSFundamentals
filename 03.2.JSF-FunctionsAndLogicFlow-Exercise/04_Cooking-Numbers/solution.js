function solve() {
    let inputNum = document.querySelector('#exercise input');
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', chop);
    buttons[1].addEventListener('click', dice);
    buttons[2].addEventListener('click', spice);
    buttons[3].addEventListener('click', bake);
    buttons[4].addEventListener('click', fillet);
    let result = document.getElementById('output');
    function getNum(){
        let num = +result.textContent || +inputNum.value
        return num;
    }

    function chop() {
        let num = getNum();
        let resNum = num/2;
        result.textContent = resNum;
    }
    function dice() {
        let num = getNum();
        let resNum = Math.sqrt(num);
        result.textContent = resNum;
    }
    function spice() {
        let num = getNum();
        let resNum = +num+1;
        result.textContent = resNum;
    }
    function bake() {
        let num = getNum();
        let resNum = num*3;
        result.textContent = resNum;
    }
    function fillet() {
        let num = getNum();
        let resNum = num*0.8;
        result.textContent = resNum;
    }
}
