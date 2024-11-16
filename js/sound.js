const principal = document.querySelector(".principal");

const music = new Audio("../sounds/videoplayback.m4a");
music.volume = 1;

principal.addEventListener('mouseover', ()=>music.play());