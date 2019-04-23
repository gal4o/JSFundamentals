function solve() {
  let str = document.getElementById('str').value;
  let text = document.getElementById('text').value;
  let result = document.getElementById('result');

  let regex = /(north|east)[\s\S]*?([\d]{2})[^,]*?(,)[^,]*?([\d]{6})/gi;
  let m;
  let north = '';
  let east = '';
while ((m = regex.exec(text)) !== null) {
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    if (m[1].toUpperCase() === 'NORTH') {
      north = `${m[2]}.${m[4]} N`;
    } else if (m[1].toUpperCase() === 'EAST') {
      east = `${m[2]}.${m[4]} E`;
    }

}

  let message = document.createElement('p');
  let northP = document.createElement('p');
  let eastP = document.createElement('p');
  northP.textContent = north;
  eastP.textContent = east;
  message.textContent = `Message: ${text.substring(text.indexOf(str)+str.length, text.lastIndexOf(str))}`;
  result.appendChild(northP);
  result.appendChild(eastP);
  result.appendChild(message);

}