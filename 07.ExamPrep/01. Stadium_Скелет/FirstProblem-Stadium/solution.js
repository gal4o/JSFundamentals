function solve() {
    let buttons = Array.from(document.getElementsByClassName('seat'))
    let profit = [];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let number = button.innerHTML;
            let team = button.parentElement.parentElement.parentElement.parentElement.parentElement.className;
            let sectors = button.parentElement.parentElement.children;
            let sector = '';
            if (sectors[0].children[0] === button) {
                sector = 'A';
            } else if (sectors[1].children[0] === button) {
                sector = 'B';
            } else {
                sector = 'C';
            }

            if (button.style.background=="rgb(255, 0, 0)") {
                document.getElementById('output').value+=` Seat ${number} in zone ${team} sector ${sector} is unavailable.\n`
            } else {
                let ticedPrice = price(team, sector);
                profit.push(ticedPrice);
                document.getElementById('output').value+=` Seat ${number} in zone ${team} sector ${sector} was taken.\n`
                button.style.background = "rgb(255, 0, 0)";
           }
        })
    });

    document.getElementById('summary').children[0].addEventListener('click', () => {
        let total = 0;
        profit.forEach(element => {
            total+=Number(element);
        });
        document.getElementById('summary').children[1].innerHTML =`${total} leva, ${profit.length} fans.`
    })

    function price(team, sector) {
        let price = 0;
        if (team === 'VIP') {
            switch (sector) {
                case 'A':
                    price = 25;
                    break;
                case 'B':
                    price = 15;
                    break;
                default:
                    price = 10;
                    break;
            }
        } else {
            switch (sector) {
                case 'A':
                    price = 10;
                    break;
                case 'B':
                    price = 7;
                    break;
                default:
                    price = 5;
                    break;
            }
        }
        return price;
    }
}