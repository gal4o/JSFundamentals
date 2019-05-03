function solve() {
    let fields = document.getElementsByTagName('fieldset');
    let trucks = {};
    let tires = [];
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons[0].addEventListener('click', addTruck);
    buttons[1].addEventListener('click', addTires);
    buttons[2].addEventListener('click', work);
    buttons[3].addEventListener('click', end);

    function addTruck() {
        let tire = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);
        if (!trucks[document.getElementById('newTruckPlateNumber').value]) {
            trucks[document.getElementById('newTruckPlateNumber').value]= {
                'tireCond': tire,
                'distance': 0
            } 
          let truck = document.createElement('div')
          truck.classList.add("truck");
          truck.textContent = document.getElementById('newTruckPlateNumber').value;
          fields[4].appendChild(truck)
        }
    }

    function addTires() {
        document.getElementById('newTiresCondition').value;
        tires.push(document.getElementById('newTiresCondition').value.split(' ').map(Number));
        let tire = document.createElement('div')
          tire.classList.add("tireSet");
          tire.textContent = document.getElementById('newTiresCondition').value;
          fields[3].appendChild(tire);
    }

    function work() {
        let number = document.getElementById('workPlateNumber').value;
        let distance = +document.getElementById('distance').value;
        if (trucks[number]) {
            let minCond = getMinTireCond(trucks[number].tireCond)
            if (distance/1000<=minCond) {
                trucks[number].distance+=distance;
                for(let i = 0; i<8; i++) {         
                    trucks[number].tireCond[i]-=distance/1000;                   
                }
            } else if (tires.length>0) {
                let minCond = getMinTireCond(tires[0]);
                if (distance/1000<=minCond) {
                    trucks[number].distance+=distance;
                    trucks[number].tireCond = tires[0];
                    for(let i = 0; i<8; i++) {         
                        trucks[number].tireCond[i]-=distance/1000;                   
                    }
                    tires.shift();
                }    
            } 
        }
    }

    function end() {
        let output = document.getElementsByTagName('textarea')[0];
        for (let num in trucks) {
            if (trucks.hasOwnProperty(num)) {
                let element = trucks[num];
                output.value += `Truck ${num} has traveled ${element.distance}.\n`;
            }
        }
        output.value+=`You have ${tires.length} sets of tires left.\n`;
    }

    function getMinTireCond(arr) {
        let minCond = arr[0];
            arr.forEach(tire => {
                minCond = Math.min(minCond, tire);     
            });
            return minCond;
    }
    
}