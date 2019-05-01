function solve(text){
    let arr = JSON.parse(text);
    console.log('<table>')
    console.log('<tr><th>name</th><th>score</th></tr>');
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            console.log(`<tr><td>${escapeHtml(obj.name)}</td><td>${obj.score}</td></tr>`);
        }
    console.log('</table>'); 

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
    }
     
}
solve(
    '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');