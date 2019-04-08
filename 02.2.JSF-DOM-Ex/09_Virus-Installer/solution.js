function solve() {
    let buttons = document.getElementsByTagName('button');
    let next  = buttons[0];
    let cancel = buttons[1];
    buttons[0].addEventListener('click', nextP);
    buttons[1].addEventListener('click', cancelP);

    function nextP() {
        if((document.getElementById('firstStep').style.display == '')&&
        (document.getElementById('secondStep').style.display == '')&&
        (document.getElementById('thirdStep').style.display == '')) {
            document.querySelector('#content').style.backgroundImage="none";
            document.getElementById('firstStep').style.display="block";
        } else if(document.getElementById('firstStep').style.display == 'block') {
            if(document.querySelector('input[value="agree"]:checked')) {
                document.getElementById('firstStep').style.display="none";
                document.getElementById('secondStep').style.display="block";
                next.style.display="none";
                setTimeout(function() {
                    next.style.display="";
                }, 3000)
            }
        } else if(document.getElementById('secondStep').style.display == 'block') {
            document.getElementById('secondStep').style.display="none";
            document.getElementById('thirdStep').style.display="block";
            next.style.display="none";
            cancel.textContent="Finish";
        }
        
    }
    
    function cancelP() {
        document.querySelector('section').style.display="none";
    }

}