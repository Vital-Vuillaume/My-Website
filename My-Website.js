//------Pour que le site soit securise------\\

if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}

//------Element html------\\

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const btn = document.querySelector(".btn");
const nav = document.querySelector(".nav");
const image1 = document.querySelector('#btn1 .img');
const image2 = document.querySelector('#btn2 .img');
const image3 = document.querySelector('#btn3 .img');
const btnDark = document.querySelector('.btnDark');
const body = document.querySelector('body');

//-----Afficher la section 1 par défaut----\\

window.addEventListener('load', function() {
  showSection(section1);
});

//-----Changement de page-----\\

function showSection(section) {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'none';
  section.style.display = 'block';
  window.scrollTo(0, 0);
}

btn1.addEventListener('click', function() {
  showSection(section1);
  window.scrollTo(0, 0);
});

btn2.addEventListener('click', function() {
  showSection(section2);
  window.scrollTo(0, 0);
});

btn3.addEventListener('click', function() {
  showSection(section3);
  window.scrollTo(0, 0);
});

//-----Barre de navigation qui s'agrandit-----\\

btn.onclick = function ajouterClassNav() {
   nav.classList.toggle("active"); 
};

//-----Afficher le bouton accueil par défaut-----\\

btn1.classList.add('active');
image1.src = 'accueil-active.png';

//-----changement des boutons-----\\

btn1.onclick = function() {
  if (btn1.classList.contains('active')) {
    return;
  }

  image1.src = 'accueil-active.png';
  btn1.classList.add('active');
  image2.src = 'recherche.png';
  btn2.classList.remove('active');
  image3.src = 'parametres.png';
  btn3.classList.remove('active');
};

btn2.onclick = function() {
  if (btn2.classList.contains('active')) {
    return;
  }

  image2.src = 'recherche-active.png';
  btn2.classList.add('active');
  image1.src = 'accueil.png';
  btn1.classList.remove('active');
  image3.src = 'parametres.png';
  btn3.classList.remove('active');
};


btn3.onclick = function() {
  if (btn3.classList.contains('active')) {
    return;
  }

  image3.src = 'parametres-active.png';
  btn3.classList.add('active');
  image1.src = 'accueil.png';
  btn1.classList.remove('active');
  image2.src = 'recherche.png';
  btn2.classList.remove('active');
};

/*---------------------------
-------Page parametres-------
---------------------------*/

//-----Dark mode-----\\

let modeSombreActive = false;

function toggleModeSombre() {
  body.classList.toggle("active");
  modeSombreActive = !modeSombreActive;
  localStorage.setItem("modeSombre", modeSombreActive);
};

//-----Bouton dark mode-----\\

btnDark.onclick = function ajouterClassBody() {
  toggleModeSombre();
};

//-----Sauvegarde dark mode-----\\

const modeSombreStocke = localStorage.getItem("modeSombre");
if (modeSombreStocke === "true") {
  body.classList.add("active");
  modeSombreActive = true;
};