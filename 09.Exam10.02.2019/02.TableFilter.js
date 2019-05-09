function solve(arr, str) {
    let elements = [];
    for (let i = 1; i < arr.length; i++) {
        let element = {}
        for (let j = 0; j < arr[0].length; j++) {
            element[arr[0][j]] = arr[i][j];         
        }        
        elements.push(element)
    }

    let header = str.split(' ')[1];

    switch (str.split(' ')[0]) {
        case 'sort':
            elements.sort((a, b) => {
                return a[header]>b[header]
            })
            console.log(arr[0].join(' | '))
            for (let i = 0; i < elements.length; i++) {
                let row = []
                for (const key in elements[i]) {
                    if (elements[i].hasOwnProperty(key)) {
                        let kl = elements[i][key];
                        row.push(kl)
                    }
                }
                console.log(row.join(' | '))
            }
            break;
    
        case 'hide':
            for (let i = 0; i < elements.length; i++) {
                let row = []
                for (const key in elements[i]) {
                    if (elements[i].hasOwnProperty(key)) {
                        let kl = elements[i][key];
                        row.push(kl)
                    }
                }
                console.log(row.join(' | '))
            }
        break;
        case 'filter':
            let value = str.split(' ')[2];
            console.log(arr[0].join(' | '))
            for (let i = 0; i < elements.length; i++) {
                for (const key in elements[i]) {
                    if (elements[i].hasOwnProperty(key)&&key === header) {
                        let kl = elements[i][key];
                        if (kl === value) {
                            console.log(arr[i+1].join(' | '))
                        }
                    }
                }
            }
        break;
    }
}

solve([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Gee', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
'filter grade 6.00')