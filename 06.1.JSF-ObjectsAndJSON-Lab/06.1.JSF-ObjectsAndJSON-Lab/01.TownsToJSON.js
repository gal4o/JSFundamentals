function solve(text){
    let tableName = text[0].split('|');
    let result = [];
    let output = {};
    for (let i = 1; i < text.length; i++) {
        let row = text[i].split('|');
        output[tableName[1].trim()] = row[1].trim();
        output[tableName[2].trim()] = Number(row[2].trim());
        output[tableName[3].trim()] = Number(row[3].trim());
        result.push(output);
        output = {};
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);