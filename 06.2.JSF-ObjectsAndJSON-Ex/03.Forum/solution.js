function solve() {
    // let users = [];
    
    document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
        event.preventDefault();
        let data = Array.from(document.getElementsByClassName('user-info')[0].children);
        let topics = Array.from(document.getElementsByClassName('topics')[0].children).filter(el => el.checked).map(el =>el.value);
        let user = {
            username: data[1].value, 
            password: data[3].value, 
            email: data[5].value, 
            topics: topics
        };
        // users.push(user); // ???
        let tr = document.createElement('tr');
        let tdUsernsme = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdTopics = document.createElement('td');
        tdUsernsme.innerHTML = user.username;
        tdEmail.innerHTML = user.email;
        tdTopics.innerHTML = user.topics.join(' ');
        tr.appendChild(tdUsernsme);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);
        document.getElementsByTagName('tbody')[0].appendChild(tr);
    });
    
    document.getElementsByTagName('button')[1],addEventListener('click', () => {
        let str  = document.getElementsByTagName('input')[7].value;
        Array.from(document.getElementsByTagName('tbody')[0].children).filter((el) =>
        el.style.visibility = "visible");
        let trArr =Array.from(document.getElementsByTagName('tbody')[0].children).filter((el) =>
        !el.innerText.includes(str)).forEach((el) => el.style.visibility = "hidden");

    });

}