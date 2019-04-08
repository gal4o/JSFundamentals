function solve() {
	let buttons = Array.from(document.getElementsByTagName('button'));
	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);
	let messages = Array.from(document.getElementsByTagName('textarea'));

	function encode(){
		let forEncoding = messages[0].value;
		let encodingMsg = '';
		forEncoding.split('').forEach((char) => {
			let ascii = char.charCodeAt(0)+1;
			encodingMsg+=String.fromCharCode(ascii);
		})
		
		messages[1].value = encodingMsg;
		messages[0].value = "";
		
	}
	function decode() {
		let forDecoding = messages[1].value;
		let decodingMsg = '';
		forDecoding.split('').forEach((char) => {
			let ascii = char.charCodeAt(0)-1;
			decodingMsg+=String.fromCharCode(ascii);
		})
		messages[1].value = decodingMsg;
	}
}