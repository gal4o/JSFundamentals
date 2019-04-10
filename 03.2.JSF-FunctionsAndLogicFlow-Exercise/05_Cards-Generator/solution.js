function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', getCards);
    let range = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    function getCards() {
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;
        let suit = document.querySelector('option:checked').textContent.split(' ')[1];
        for(let i = range.indexOf(from); i<=range.indexOf(to); i++)  {
            let cards = document.getElementById('cards');
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            let p1 = document.createElement('p');
            p1.textContent = suit;
            divCard.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = range[i];
            divCard.appendChild(p2);
            let p3 = document.createElement('p');
            p3.textContent = suit;
            divCard.appendChild(p3);
            cards.appendChild(divCard);
        }
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
    }
}