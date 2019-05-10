function solve(arr) {
    let instructions = [];
    let parts = {};
    arr.forEach(row => {
        let tokens = row.split(' ');
        switch (tokens[0]) {
            case 'instructions':
                instructions.push(tokens[1]);
                break;
            case 'addPart':
                let model = tokens[1];
                let part = tokens[2];
                let serialNum = tokens[3];
                if (parts[model]) {
                    if (parts[model][part]) {
                        parts[model][part].push(serialNum)
                    } else {
                        let serial = {}
                        serial[part]=serialNum 
                        parts[model][part]=[];     
                        parts[model][part].push(serialNum);
                    }
                } else {
                    let serial = {}
                    parts[model] = {}
                    serial[part]=serialNum
                    parts[model][part]=[];
                    parts[model][part].push(serialNum)
                }

                break;
            case 'repair':
                let modelN = tokens[1];
                let specifications =JSON.parse(tokens[2]);
                if (instructions.includes(modelN)) {
                    for (let key in specifications) {
                        if (specifications.hasOwnProperty(key)) {
                            let element = specifications[key];
                            if (element === 'broken') {
                                if (parts[modelN][key]) {
                                specifications[key] = parts[modelN][key][0];
                                parts[modelN][key].shift();
                                }   
    
                            }
                        }
                    }
                    console.log(`${modelN} client - ${JSON.stringify(specifications)}`)
                } else {
                    console.log(`${modelN} is not supported`)
                }
                
                break;
        }
    });
    let output =Object.keys(parts).sort((a,b) => {
        return a>b
    })

    for (let keyMod in output) {
        let outStr = '';
        if (output.hasOwnProperty(keyMod)) {
            let element = output[keyMod];
            outStr += `${element} - JSON.stringify(parts[element])`;
        }
        console.log(outStr)
    }
}

solve([  
  'instructions bmw',    
  'addPart opel engine GV1399SSS',
  'addPart opel transmission SMF556SRG',
  'addPart bmw engine GV1399SSS',   
  'addPart bmw transmission SMF444ORG',
  'addPart opel transmission SMF444ORG',
  'instructions opel',
  'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'

])