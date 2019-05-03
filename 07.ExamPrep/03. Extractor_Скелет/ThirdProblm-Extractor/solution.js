function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', extract)
    let countPat = /^([0-9]+)([\S\s]+)/gm;
    let result = '';

    function extract() {
        let input = document.getElementById('input');
        let m;
        let count = 0;

        while ((m = countPat.exec(input.value)) !== null) {
            if (m.index === countPat.lastIndex) {
                countPat.lastIndex++;
            }
            
            m.forEach((match, groupIndex) => {
                if (groupIndex === 1) {
                    count = +match;
                } else if (groupIndex === 2) {
                    for (let i = 0; i < Math.min(count, match.length); i++) {
                        let char = match[i];
                        result += char;
                    }
                }
            });
        }

        resultArr = result.split(`${result[result.length-1]}`);
        let res = resultArr[1].replace(new RegExp(`[${resultArr[0]}]`,'g'), '').replace(/[#]/g,' ')
        document.getElementById('output').value = res;
    }
    
}