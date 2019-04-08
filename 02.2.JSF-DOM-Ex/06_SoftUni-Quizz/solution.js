function solve() {
	let btns = Array.from(document.getElementsByTagName('button'));
	btns.forEach(btn => {
		btn.addEventListener('click', next);
	});
	let section = document.getElementsByTagName('section');
	let resultCount = 0;

	function next(e) {
		if(e.target.parentNode === section[0]) {
			if(document.querySelectorAll('input[type="radio"]:checked').length === 1) {
				section[1].style.display='block';
				if(document.querySelector('input[name="softUniYear"]:checked').value === "2013") {
					resultCount += 1;
				}
			}
		} else if(e.target.parentNode === section[1]) {
			if(document.querySelectorAll('input[type="radio"]:checked').length === 2) {
				section[2].style.display='block';
				if(document.querySelector('input[name="popularName"]:checked').value === "Pesho") {
					resultCount += 1;
				}
			}
		} else {
			if(document.querySelectorAll('input[type="radio"]:checked').length === 3) {
				if(document.querySelector('input[name="softUniFounder"]:checked').value === "Nakov") {
					resultCount += 1;
				}
				if(resultCount === 3) {
					document.getElementById('result').textContent = "You are recognized as top SoftUni fan!";
				} else {
					document.getElementById('result').textContent = `You have ${resultCount} right answers`;
				} 
			}	
		}
	}
}