const Hamburguer = document.getElementById('hamburguer');
const Display = document.getElementById('display_menu');
const Chmbtn = document.getElementById('chm_btn');
const Dsport = document.getElementById('join');
const Dsabt = document.getElementById('about');
const Dscnt = document.getElementById('program');

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault();
  Display.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
});

Chmbtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
});

Dsport.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
});

Dsabt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
});

Dscnt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
});
