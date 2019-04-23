function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');
  let key = arr[0];
  let pattern = new RegExp(`(\\s|^)(${key}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

  for (let i = 1; i < arr.length; i++) {
    let str = arr[i];
    let match = pattern.exec(str);
    while (match) {
      let encodeMsg = match[3];
      if (encodeMsg.toUpperCase() !== encodeMsg) {
        match = pattern.exec(str);
        continue;
      }
      let decodeMsg = decode(encodeMsg);
      let message = match[1]+match[2]+decodeMsg+match[4];
      str = str.replace(match[0], message);
      match = pattern.exec(str);

    }
    
    let p = document.createElement('p');
    p.textContent = str;
    result.appendChild(p);
  }
  
  function decode(forEncode) {
    while (forEncode.indexOf('!') !== -1) {
      forEncode = forEncode.replace('!', '1');
    }
    while (forEncode.indexOf('%') !== -1) {
      forEncode = forEncode.replace('%', '2');
    }
    while (forEncode.indexOf('#') !== -1) {
      forEncode = forEncode.replace('#', '3');
    }
    while (forEncode.indexOf('$') !== -1) {
      forEncode = forEncode.replace('$', '4');
    }
    return forEncode.toLowerCase();
  }

}