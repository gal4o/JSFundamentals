 function register() {
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
      if (username && password && email.match(/(.+)@(.+).(com|bg)/gm)) {
        let result = document.getElementById('result');

        let h1 = document.createElement('h1');
        h1.textContent ='Successful Registration!';
        let usernameTextNode = document.createTextNode(`Username: ${username}`);
        let emailTextNode = document.createTextNode(`Email: ${email}`);
        let passwordTextNode = document.createTextNode(`Password: ${'*'.repeat(password.length)}`);

        result.appendChild(h1);
        result.appendChild(usernameTextNode);
        result.appendChild(document.createElement('br'));
        result.appendChild(emailTextNode);
        result.appendChild(document.createElement('br'));
        result.appendChild(passwordTextNode);

        setTimeout(function(){
          while (result.firstChild) {
            result.removeChild(result.firstChild)
          }
        }, 5000);
      } 
 }
