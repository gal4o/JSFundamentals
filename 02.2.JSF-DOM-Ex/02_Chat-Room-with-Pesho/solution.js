function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let messages = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', event);
    })

    function event(e) {
        let div = document.createElement('div');
        let span = document.createElement('span');
        let p = document.createElement('p');
        let sender = e.target.name;
        
        if(sender === 'myBtn') {
            span.textContent = 'Me';
                p.textContent = document.getElementById('myChatBox').value;
                div.style.textAlign='left';
                messages[0].value = "";
        } else {
            span.textContent = 'Pesho';
                p.textContent = document.getElementById('peshoChatBox').value;
                div.style.textAlign='right';
                messages[1].value = "";
        }
        
        div.appendChild(span);
        div.appendChild(p);
        document.getElementById('chatChronology').appendChild(div);
    }
}