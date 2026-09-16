
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');
const btnpopup = document.querySelector('.btnloginpopup');
const iconclose = document.querySelector('.icon-close');
const profilebox = document.querySelector('.profile-box');
const avatarCircle = document.querySelector('.avatar-circle');
const alertbox = document.querySelector('.alert-box'); 


if (btnpopup) {
    btnpopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });
}


if (signuplink) signuplink.addEventListener('click', () => wrapper.classList.add('active'));
if (loginlink) loginlink.addEventListener('click', () => wrapper.classList.remove('active'));
if (iconclose) iconclose.addEventListener('click', () => wrapper.classList.remove('active-popup'));

if(avatarCircle)avatarCircle.addEventListener('click',()=>
    profilebox.classList.toggle('show'));
if(alertbox){
setTimeout(()=> alertbox.classList.add('show'), 50);
setTimeout(() => {
alertbox.classList.remove('show');
setTimeout(() => alertbox.remove(),1000);
}, 6000);
}




