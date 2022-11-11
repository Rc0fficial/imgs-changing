var prev = document.getElementById('prev');
var next = document.getElementById('next');
var hero = document.getElementById('hero');
var thumbnail = document.getElementsByClassName('thumbnail');

var backgroundImage = new Array(
    'Radiance_img/bg1.png',
    'Radiance_img/bg2.png',
    'Radiance_img/bg3.png',
    'Radiance_img/bg4.png',
    'Radiance_img/bg5.png',
);
let i =0;
next.onclick = function() {
    hero.style.backgroundImage = 'url("'+backgroundImage[i+1]+'")';
}