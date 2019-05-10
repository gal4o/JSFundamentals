function solve(str) {
    let input = str.split(' ');
    let output = '';
    input.forEach(element => {
        switch (element) {
            case '.-':
                output+='a';
                break;
                case '-...':
                output+='b';
                break;
                case '-.-.':
                output+='c';
                break;
                case '-..':
                output+='d';
                break;
                case '.':
                output+='e';
                break;
                case '..-.':
                output+='f';
                break;
                case '--.':
                output+='g';
                break;
                case '....':
                output+='h';
                break;
                case '..':
                output+='i';
                break;
                case '.---':
                output+='j';
                break;
                case '-.-':
                output+='k';
                break;
                case '.-..':
                output+='l';
                break;
                case '--':
                output+='m';
                break;
                case '-.':
                output+='n';
                break;
                case '---':
                output+='o';
                break;
                case '.--.':
                output+='p';
                break;
                case '--.-':
                output+='q';
                break;
                case '.-.':
                output+='r';
                break;
                case '...':
                output+='s';
                break;
                case '-':
                output+='t';
                break;
                case '..-':
                output+='u';
                break;
                case '...-':
                output+='v';
                break;
                case '.--':
                output+='w';
                break;
                case '-..-':
                output+='x';
                break;
                case '-.--':
                output+='y';
                break;
                case '--..':
                output+='z';
                break;
        }
    });
    console.log(output)
}

solve('--. --- --- --. .-.. .')