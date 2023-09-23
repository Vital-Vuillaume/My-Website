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
const body = document.querySelector('body');
const btnDark = document.querySelector('.btnDark');
const BtnEcran = document.querySelector('.btnEcran');
const Recherche = document.querySelector('.recherche');
const resultats = document.querySelector('.resultats');
const txtRecherche = document.querySelector('.txtRecherche');

//-----Afficher la section 1 par defaut----\\

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

//-----Afficher le bouton accueil par defaut-----\\

btn1.classList.add('active');
image1.src = 'accueil-active.png';

//-----Changement des boutons-----\\

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
--------Page accueil---------
---------------------------*/



/*---------------------------
-------Page Recherche--------
---------------------------*/

//-----Recherche-----\\

const customSearches = {
  'site': [
    { name: 'Uppercase-Converter', link: 'https://rmbi.ch/vital/uppercase-converter/' },
    { name: 'Time-Converter', link: 'https://rmbi.ch/vital/time-converter/' },
    { name: 'Text-Meter', link: 'https://rmbi.ch/vital/text-meter/' },
    { name: 'Mon premier site', link: 'https://rmbi.ch/vital/mfsh/' }
  ],

  'collaboration': [
    { name: 'Cesco', link: 'https://rmbi.ch/cesco/' },
    { name: 'Cesco-Leak', link: 'https://github.com/Vital-Vuillaume/Interactive-Carousel-for-Cesco-Leak' },
    { name: 'Cosmos-Search', link: 'https://github.com/Vital-Vuillaume/Cosmos-Search' }
  ],

  'réseau': [
    { name: 'Github', link: 'https://github.com/Vital-Vuillaume' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/vital-vuillaume-bb7167273/' }
  ],

  'organisation': [
    { name: 'Asterjdm', link: 'https://github.com/asterjdm' },
    { name: 'feur-company', link: 'https://github.com/Feur-company' },
    { name: 'Pixel-Paradox', link: 'https://github.com/Pixel-Paradox' }
  ],

  'jeu': [
    { name: 'Pixel-Adventure-Game', link: 'https://github.com/Pixel-Paradox/Pixel-Adventure-Game' }
  ]
};

//-----Input qui recherche-----\\

Recherche.addEventListener('input', function() {
  const searchTerm = Recherche.value.trim().toLowerCase();
  localStorage.setItem('previousSearch', searchTerm);

  if (searchTerm === '') {
    txtRecherche.style.display = 'flex';
    clearResults();
  } else {
    txtRecherche.style.display = 'none';
    displaySearchResults(searchTerm);
  }
});

function clearResults() {
  resultats.innerHTML = '';
}

//-----Input disparait au clic pour vu mobile-----\\

if (window.innerWidth <= 425) {
  Recherche.addEventListener('focus', function() {
    nav.classList.add('input');
  });

  Recherche.addEventListener('blur', function() {
    nav.classList.remove('input');
  });
}

//-----Disposition des resultats-----\\

function displaySearchResults(searchTerm) {
  clearResults();

  const categoryClasses = {
    'site': 'category',
    'collaboration': 'category',
    'réseau': 'category',
    'jeu': 'category',
    'organisation': 'category'
  };

  for (const key in customSearches) {
    if (customSearches.hasOwnProperty(key)) {
      if (key.includes(searchTerm)) {
        const result = Array.isArray(customSearches[key]) ?
          customSearches[key].map(item => `<a class="lienRecherche" href="${item.link}" target="_blank">${item.name}</a>`).join('') :
          `<a class="lienRecherche" href="${customSearches[key]}">${customSearches[key]}</a>`;
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<div class="titreRecherche">${key} :</div>${result}`;

        if (categoryClasses.hasOwnProperty(key)) {
          resultElement.classList.add(categoryClasses[key]);
        }

        resultats.appendChild(resultElement);
      }
    }
  }
  
  if (resultats.innerHTML === '') {
    resultats.innerHTML = '<div class="no-results">Aucun résultat trouvé pour la recherche.</div>';
  }  
  localStorage.setItem('previousSearch', searchTerm);
}

//-----Sauvegarde de la recherhe-----\\

window.addEventListener('load', function() {
  const previousSearch = localStorage.getItem('previousSearch');
  if (previousSearch) {
    Recherche.value = previousSearch;
    if (previousSearch === '') {
      txtRecherche.style.display = 'flex';
    } else {
      txtRecherche.style.display = 'none';
      displaySearchResults(previousSearch);
    }
  }
});

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

//-----Passer en mode plein ecran-----\\

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
};

//-----Sortir du mode plein ecran-----\\

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

//-----Bouton Ecran-----\\

BtnEcran.onclick =  function() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
};