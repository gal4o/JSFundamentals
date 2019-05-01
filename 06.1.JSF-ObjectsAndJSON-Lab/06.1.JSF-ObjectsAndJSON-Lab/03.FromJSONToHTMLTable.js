function solve(text){
    let arr = JSON.parse(text);
    console.log('<table>')
    let str = '';
    str += '<tr>';
    for (let key in arr[0]) {
        str+=`<th>${key}</th>`;
    }
    str+='</tr>';
    console.log(str);
    str = '<tr>';
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            for (let key in obj) {
                str+=`<td>${escapeHtml(obj[key])}</td>`;
            }
            str+='</tr>';
            console.log(str);
            str = '<tr>';
        }
    console.log('</table>'); 

    function escapeHtml(unsafe) {
        unsafe = unsafe.toString();
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
    }
     
}
solve(
    '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'

    );