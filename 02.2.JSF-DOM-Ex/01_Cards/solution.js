function solve() {
    let imgs = document.querySelectorAll('#exercise img');
    for (let img of imgs){
        img.addEventListener('click', clickEvent);
    }

    // secod variant to add event to cards:
    // Array.from(document.getElementsByName('img'))
    // .forEach((img) => {
    //     img.addEventListener('click', clickEvent);
    // });

    function clickEvent(e) {
        let card = e.target; //take card
        let parent = card.parentNode; //take player
        this.src="images/whiteCard.jpg";
        //remove event
        card.removeEventListener('click', clickEvent);

        let spans = document.getElementById('result').children;
        if(parent.id === 'player1Div') {
            spans[0].textContent = card.name;
        } else {
            spans[2].textContent = card.name;
        }

        if(spans[0].textContent && spans[2].textContent) {
            let winner;
            let looser;
            if(+spans[0].textContent >= +spans[2].textContent) { //+ cast number
                winner = document.querySelector(`#player1Div img[name="${spans[0].textContent}"]`)
                looser = document.querySelector(`#player2Div img[name="${spans[2].textContent}"]`)
            } else {
                winner = document.querySelector(`#player2Div img[name="${spans[2].textContent}"]`)
                looser = document.querySelector(`#player1Div img[name="${spans[0].textContent}"]`)
            }
            winner.style.border = `2px solid green`;
            looser.style.border = `2px solid darkred`;
            document.getElementById('history').textContent += `[${spans[0].textContent} vs ${spans[2].textContent}] `;

            setTimeout(function() {
                spans[0].textContent = "";
                spans[2].textContent = "";
            }, 2000)
        }
    }
}