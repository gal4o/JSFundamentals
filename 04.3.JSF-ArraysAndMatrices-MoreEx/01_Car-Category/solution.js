function solve() {
  let input =JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let category = [];
  category['BulgarianArmy'] = 0;
  category['CivilProtection'] = 0;
  category['Diplomatic'] = 0;
  category['Foreigners'] = 0;
  category['Other'] = 0;
  category['Province'] = 0;
  category['Sofia'] = 0;
  category['Transient'] = 0;
  let patBA = /[B][A] [0-9]{3} [0-9]{3}/;
  let civil = /^[C][P] [0-9]{2} [0-9]{3}$/;
  let diplo = /^CT|C [0-9]{4}$/;
  let forei = /^[X]{2} [0-9]{4}$/;
  let province = /^[A-Z]{1,2} [0-9]{4} [A-Z]{1,2}$/;
  let sofia = /^[C][A]?[B]? [0-9]{4} [C][A]?[B]?$/;
  let trans = /^[0-9]{3} [A-Z]{1} [0-9]{3}$/;
  for(let i  = 0; i < input.length; i++) {
      let num = input[i];      
      switch(true) {
        case patBA.test(num): category['BulgarianArmy']+=1;break;
        case civil.test(num): category['CivilProtection']+=1;break;
        case diplo.test(num): category['Diplomatic']+=1;break;
        case forei.test(num): category['Foreigners']+=1;break;
        case trans.test(num): category['Transient']+=1;break;
        case sofia.test(num): category['Sofia']+=1;break;
        case province.test(num): category['Province']+=1;break;
        default: category['Other']+=1;
      }
  }
 
  category.sort(function(a, b) {
    return a.value - b.value;
  });
  for (let key in category) {
    if (category.hasOwnProperty(key)) {
      let element = category[key];
      let p = document.createElement('p');
    p.textContent = `${key} -> ${element}`
    output.appendChild(p);
    }
  }

}