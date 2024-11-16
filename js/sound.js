const principal = document.querySelector(".principal");

const music = new Audio("../sounds/audio.mp3");
music.volume = 0.3;

principal.addEventListener('mouseover', ()=>music.play());