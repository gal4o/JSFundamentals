function solve() {
	let div = document.querySelector('#exercise div');
	
		setInterval(function() {
			let horizontal = Math.round(Math.random() * 81) + 1;
			let vertical = Math.round(Math.random() * 45) + 1;
			div.style.margin=`${horizontal}% ${vertical}vh`;
		}, 2000)
	
}