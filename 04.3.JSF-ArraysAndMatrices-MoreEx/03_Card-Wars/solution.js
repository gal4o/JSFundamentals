function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let firstPlCards = input[0];
  let secondPlCards = input[1];
  let count = 0;

  while (count<20) {
        let firstCard = takeValue(firstPlCards[0]);
        let secondCard = takeValue(secondPlCards[0]);

      if (firstCard>secondCard) {
        firstPlCards.push(firstPlCards[0]);
        firstPlCards.push(secondPlCards[0]);
        firstPlCards.splice(0, 1);
        secondPlCards.splice(0, 1);
      } else {
        secondPlCards.push(firstPlCards[0])
        secondPlCards.push(secondPlCards[0])
        secondPlCards.splice(0, 1);
        firstPlCards.splice(0, 1);
      }
      count++;
      if (firstPlCards.length === 0 || secondPlCards.length === 0) {
        break;
      }

  }
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  p.textContent = `First -> ${firstPlCards.join(', ')}`;
  p2.textContent = `Second -> ${secondPlCards.join(', ')}`;
  output.appendChild(p);
  output.appendChild(p2);

  function takeValue(card) {
    let cardValue;
    switch (card) {
      case 2: cardValue = 2; break;
      case 3: cardValue = 3; break;
      case 4: cardValue = 4; break;
      case 5: cardValue = 5; break;
      case 6: cardValue = 6; break;
      case 7: cardValue = 7; break;
      case 8: cardValue = 8; break;
      case 9: cardValue = 9; break;
      case 10: cardValue = 10; break;
      case 'J': cardValue = 11; break;
      case 'Q': cardValue = 12; break;
      case 'K': cardValue = 13; break;
      case 'A': cardValue = 14; break;
    }
    return Number(cardValue);
  }

}