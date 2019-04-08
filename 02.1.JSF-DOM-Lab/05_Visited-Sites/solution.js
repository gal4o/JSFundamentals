function solve() {
  let linkElements = document.querySelectorAll('#exercise a');
    
  for (let linkElement of linkElements){
        linkElement.addEventListener('click', clickEvent);
    }

    function clickEvent() {
      let textEl = this.parentNode.children[1];
      let text = textEl.textContent.toString();
      let number = Number(text.match(/\d+/)[0]);
      text = text.replace(number, (number+1).toString());
      textEl.innerHTML = text;
  }
}