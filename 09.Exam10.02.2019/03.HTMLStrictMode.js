function solve (arr) {
    let result = [];
for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let m = str.match(/(\w+>)/gm);

    m.forEach((match) => {       
        let openTag = '<'+match;
        let closeTag = '</'+match;
       
        if (str.indexOf(openTag) === 0&&str.indexOf(closeTag) === str.length-closeTag.length) {
            str = str.substring(openTag.length, str.indexOf(closeTag));
            if (!str.match(/(\w+>)/gm)) {
                result.push(str);

            }
        } 
    });
}

console.log(result.join(' '))
}
 
solve(['<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is not</p><div>']
)