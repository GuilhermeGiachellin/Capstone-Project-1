const Hamburguer = document.getElementById('hamburguer');
const Display = document.getElementById('display_menu');
const Chmbtn = document.getElementById('chm_btn');
const Dsport = document.getElementById('join');
const Dsabt = document.getElementById('about');
const Dscnt = document.getElementById('program');
const sec = [];
//FALTA ADICIONAR O MENU EM SI E AS CLASSES

for (let i = 1; i < 6; i += 1) {
    sec.push(document.getElementById(`sec${i}`));
  }

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault();
  Display.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;'; 
});

Chmbtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dsport.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
