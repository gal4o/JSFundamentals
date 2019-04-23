function solve() {
  let input =JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let target = Number(input[0]);
  for (let i = 1; i < input.length; i++) {
    let start = Number(input[i]);
    let p1 = document.createElement('p');
    p1.textContent = `Processing chunk ${start} microns`;
    output.appendChild(p1);

    let count = 0;
    while (start/4>=target) {
      start = start/4;
      count++;
    }
    start = Math.ceil(start);
    if (count>0) {
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      p2.textContent = `Cut x${count}`;
      p3.textContent ='Transporting and washing';
      output.appendChild(p2);
      output.appendChild(p3);
    }
    count = 0;
    while (start*0.8>=target) {
      start -= start*0.2;
      count++;
    }
    start = Math.ceil(start);
    if (count>0) {
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      p2.textContent = `Lap x${count}`;
      p3.textContent ='Transporting and washing';
      output.appendChild(p2);
      output.appendChild(p3);
    }
    count = 0;
    while ((start-20)>=target) {
      start -= 20;
      count++;
    }
    start = Math.ceil(start);
    if (count>0) {
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      p2.textContent = `Grind x${count}`;
      p3.textContent ='Transporting and washing';
      output.appendChild(p2);
      output.appendChild(p3);
    }
    count = 0;
    while (start>target) {
      start -= 2;
      count++;
      start = Math.ceil(start);
    }
    
    if (count>0) {
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      p2.textContent = `Etch x${count}`;
      p3.textContent ='Transporting and washing';
      output.appendChild(p2);
      output.appendChild(p3);
    }
    count = 0;
    if (start<target) {
      start += 1;
      count++;
      let p2 = document.createElement('p');
      p2.textContent = `X-ray x${count}`;
      output.appendChild(p2);
    } 
  
    let p2 = document.createElement('p');
    p2.textContent = `Finished crystal ${start} microns`;
    output.appendChild(p2)
  }
    
}