let register = document.getElementById('Register');
let login = document.getElementById('Login');
let container = document.getElementById('Container');

register.addEventListener('click', () =>{
    container.style.transform = 'rotateX(360deg) rotateY(360deg)'

    setTimeout(function(){
        document.getElementById('LoginContainer').style.display = 'none';
        document.getElementById('RegisterContainer').style.display = 'flex';

    }, 400);
})

login.addEventListener('click', () => {
    container.style.transform = 'rotateX(0deg) rotateY(0deg)'

    setTimeout(function(){
        document.getElementById('LoginContainer').style.display = 'flex';
        document.getElementById('RegisterContainer').style.display = 'none';

    }, 400);
})
