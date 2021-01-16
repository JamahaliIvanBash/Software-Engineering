
var signup = document.querySelector('#btn1');
var a = document.querySelector('.signup-form');
var b = document.querySelector('.login-form');
var c = document.querySelector('.sign-in')


signup.addEventListener('click', () => {
    a.classList.toggle('signup-form');
    b.classList.toggle('login-form1');
    c.classList.toggle('sign-in1');
});
var clicked = false;
function toggle(){
    if(!clicked){
        clicked = true;
        document.getElementById('head').innerHTML = "Already have an account?";
        document.getElementById('para').innerHTML = 'Click here to Log in';
        document.getElementById('btn1').innerHTML = 'Log in here';
        return;
    }
    else{
        clicked = false;
        document.getElementById('head').innerHTML = 'First time?';
        document.getElementById('para').innerHTML = 'Create your Account for Free';
        document.getElementById('btn1').innerHTML = 'Sign up here';
        
    }
    
}

