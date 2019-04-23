function solve() {
    let input = document.getElementById('str').value.split(', ');
    let result = document.getElementById('result');
    let str = input[0];
    let info = input[1];

    let namePatt = / [A-Z][A-Za-z]*(-[A-Z][A-Za-z]*\.)?-[A-Z][A-Za-z]* /g;
    let airportPatt = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightPatt = / [A-Z]{1,3}[\d]{1,5} /g;
    let companyPatt = /- [A-Z][a-z]*\*[A-Z][a-z]* /g;
    
    let airport = '';

switch (info) {
    case 'name':
        result.textContent = `Mr/Ms, ${machedInfo(str,namePatt).replace('-', ' ')}, have a nice flight!`;
        break;
    case 'flight':
        airport = machedInfo(str, airportPatt).split('/');
        result.textContent = `Your flight number ${machedInfo(str, flightPatt)} is from ${airport[0]} to ${airport[1]}.`;
        break;
    case 'company':
        result.textContent = `Have a nice flight with ${machedInfo(str, companyPatt).replace('-','').trim().replace('*',' ')}.`;
        break;
    case 'all':
    airport = machedInfo(str, airportPatt).split('/');
        result.textContent = `Mr/Ms, ${machedInfo(str, namePatt).replace('-', ' ')}, your flight number ${machedInfo(str, flightPatt)} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${machedInfo(str, companyPatt).replace('-','').trim().replace('*',' ')}.`;
        break;
    // default:
    //     result.textContent = `Error!`;
    //     break;
}

function machedInfo(text,patt) {
    let info = text.match(patt);
    let machedInfo =  info[0].trim();
    return machedInfo;
}
}