//variables
let button1 = document.getElementById('btn_info');
let button2 = document.getElementById('btn_reg');
let button3 = document.getElementById('btn_vid');
let button4 = document.getElementById('btn_contact');

let info = document.querySelector('.info');
let regristation = document.querySelector('.regristation');
let video = document.querySelector('.video');
let contact = document.querySelector('.contact');
let icon = document.getElementById('#icon')

info.style.display = 'block';
regristation.style.display = 'none';
video.style.display = 'none';
contact.style.display = 'none';

button1.addEventListener('click', function () {
    info.style.display = 'block';
    regristation.style.display = 'none';
    video.style.display = 'none';
    contact.style.display = 'none';
});
button2.addEventListener('click', function () {
    info.style.display = 'none';
    regristation.style.display = 'block';
    video.style.display = 'none';
    contact.style.display = 'none';
});
button3.addEventListener('click', function () {
    info.style.display = 'none';
    regristation.style.display = 'none';
    video.style.display = 'block';
    contact.style.display = 'none';
});
button4.addEventListener('click', function () {
    info.style.display = 'none';
    regristation.style.display = 'none';
    video.style.display = 'none';
    contact.style.display = 'block';
});