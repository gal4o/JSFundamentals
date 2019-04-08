function solve() {
	document.querySelector('button').addEventListener('click', myNums);

	function myNums() {
		let input = document.getElementsByTagName('input');
		let inputNums = input[0].value.split(' ');
		let myNums = [];
		if(inputNums.length === 6) {
			inputNums.forEach(num => {
				if((num>=1 && num<=49)&& !myNums.includes(num)) {
					myNums[myNums.length] = +num;
				}
			});
			if(myNums.length == 6) {
				for(let i = 1; i <=49; i++) {
					let div = document.createElement('div');
					div.textContent = i;
					div.classList.add('numbers');
					if(myNums.includes(+i)) {
						div.style.background='orange';
					}
					document.getElementById('allNumbers').appendChild(div);
				}
			}
		}
		input[0].disabled = true;
		document.querySelector('button').disabled = true;
	}
}