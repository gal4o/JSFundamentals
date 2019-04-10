function validate() {
    let button = document.querySelector('button');
    button.addEventListener('click', egn);
    let egnValue = document.getElementById('egn');
    

    function egn(){    
        let egnText = '';   
        let year = document.getElementById('year');
        let month = document.querySelector('option:checked');
        let date = document.getElementById('date');
        let gender = document.querySelector('input[type = radio]:checked');
        let region = document.getElementById('region');
        
        if(+year.value%100<10) {
            egnText += `${0}${+year.value%100}`;
        } else {
            egnText += +year.value%100;
        }

        switch(month.value) {
            case "January": egnText += `01`; break;
            case "February": egnText += `02`; break;
            case "March": egnText += `03`; break;
            case "April": egnText += `04`; break;
            case "May": egnText += `05`; break;
            case "June": egnText += `06`; break;
            case "July": egnText += `07`; break;
            case "August": egnText += `08`; break;
            case "September": egnText += `09`; break;
            case "October": egnText += `10`; break;
            case "November": egnText += `11`; break;
            case "December": egnText += `12`; break;
        }

        if(date.value<10) {
            egnText += `${0}${date.value}`;
        }else{
            egnText += date.value;

        }

        if(region.value<=99) {
            egnText += region.value;
        } else {
            egnText += Math.floor(region.value/10);
        }

        if(gender.value === 'Male') {
            egnText += '2';
        } else {
            egnText += '1';
        }
        
        egnText += reminder(egnText);
        egnValue.textContent =`Your EGN is: ${egnText}`;

        document.getElementById('year').value="";
        document.querySelector('option:checked').checked=false;
        document.getElementById('date').value="";
        document.querySelector('input[type = radio]:checked').checked=false;
        document.getElementById('region').value="";
    }

    function reminder(input) {
        let sum = 0;
        let multi = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for(let i = 0; i<9; i++) {
            sum+=Number(input[i])*Number(multi[i]);
        }

        if(sum%11 === 10) {
            return 0;
        } else {
            return sum%11;
        }
    }
}