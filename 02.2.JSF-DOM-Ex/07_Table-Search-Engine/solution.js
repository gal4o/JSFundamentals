function solve() {
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    let cells = Array.from(document.getElementsByTagName('td'));
    
    function search() {
        let searching = document.getElementById('searchField').value;
        cells.forEach(cell => {
            cell.parentNode.classList.remove("select");
        });
        cells.forEach(cell => {
            if(cell.textContent.includes(searching)) {
                cell.parentNode.classList.add("select");
            } 
        });
        document.getElementById('searchField').value='';
    }
}