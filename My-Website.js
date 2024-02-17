//------Pour que le site soit securise------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

//------Element html------\\

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const btn = document.querySelector(".btn");
const image1 = document.querySelector('#btn1 .img');
const image2 = document.querySelector('#btn2 .img');
const image3 = document.querySelector('#btn3 .img');
const nav = document.querySelector(".nav");
const btnMenuCustom = document.querySelector('.MenuCustom');
const customMenu = document.querySelector(".custom-menu");
const btnActualiser = document.querySelector(".btnMenu:first-child");
const btnLienTheme = document.querySelector(".btnMenu:nth-child(3)");
const btnLienEcran = document.querySelector(".btnMenu:nth-child(4)");
const btnCustomMenu = document.querySelector(".btnMenu:nth-child(5)");
const containerRecherche = document.querySelector('.containerRecherche');
const Recherche = document.querySelector('.recherche');
const resultats = document.querySelector('.resultats');
const txtRecherche = document.querySelector('.txtRecherche');
const body = document.querySelector('body');
const btnDark = document.querySelector('.dark');
const colorPicker = document.querySelector('.colorPicker');
const BtnEcran = document.querySelector('.ecran');
const fenetre = document.querySelector('.fenetre');
const curseur = document.querySelector('.curseur');
const curseurCustom = document.querySelector('.curseurCustom');
const reset = document.querySelector('.reset');
const popup = document.querySelector('.popup');
const btnPopup = document.querySelector('.valider');
const annuler = document.querySelector('.annuler');

//-----Afficher la section 1 par defaut----\\

window.addEventListener('load', function() {
  showSection(section1);
});

//------Sauvgarde du Menu contextuel------\\

function updateMenuContextuelLocalStorage() {
  localStorage.setItem("menuContextuelPersonnaliseActive", menuContextuelPersonnaliseActive.toString());
}

window.addEventListener('load', function() {
  const menuContextuelActiveFromStorage = localStorage.getItem('menuContextuelPersonnaliseActive');
  if (menuContextuelActiveFromStorage) {
    menuContextuelPersonnaliseActive = menuContextuelActiveFromStorage === "true";
    if (!menuContextuelPersonnaliseActive) {
      customMenu.style.display = "none";
    }
  }
});

//------Menu contextuel personnaliser------\\

let menuContextuelPersonnaliseActive = true;

document.addEventListener("contextmenu", toggleCustomMenu);
document.addEventListener("click", toggleCustomMenu);

function toggleCustomMenu(e) {
  if (menuContextuelPersonnaliseActive === true) {
    if (e.type === "contextmenu") {
      e.preventDefault();
    
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
    
      const menuMargin = 0;
    
      let menuX = mouseX;
      let menuY = mouseY;
    
      if (menuX + customMenu.offsetWidth + menuMargin > windowWidth) {
        menuX = windowWidth - customMenu.offsetWidth - menuMargin;
      }
  
      if (menuY + customMenu.offsetHeight + menuMargin > windowHeight) {
        menuY = windowHeight - customMenu.offsetHeight - menuMargin;
      }
    
      customMenu.style.display = "block";
      customMenu.style.transform = `translate(${menuX}px, ${menuY}px)`;
    } else if (e.type === "click") {
      customMenu.style.display = "none";
    }
  }
}

//------Menu contextuel Actualiser------\\

btnActualiser.onclick = function() {
  location.reload()
}

//------Menu contextuel Dark mode------\\

btnLienTheme.onclick = function ajouterClassBody() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('isDarkMode', isDarkMode);
  updateDarkMode();
};

//------Menu contextuel Ecran------\\

btnLienEcran.onclick = function() {
  if (!pleinEcranActif) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
};

//------Menu contextuel mettre le menu par défault------\\

btnCustomMenu.onclick =  function() {
  menuContextuelPersonnaliseActive = false;
  customMenu.style.display = "none";

  updateMenuContextuelLocalStorage();
}

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

//-----Changement du titre quand ton n'est plus sur l'onglet-----\\

let title = document.title;

window.addEventListener("blur", () => {
  document.title = "Vital-Website";
});

window.addEventListener("focus", () => {
  document.title = title;
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
    { name: 'Mon premier site', link: 'https://rmbi.ch/vital/mfsh/' },
    { name: 'P-A-G-W', link: 'https://rmbi.ch/vital/pagw/' }
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
    { name: 'P-A-G-W-D', link: 'https://rmbi.ch/vital/pagw/' },
    { name: 'P-A-G-w-D-test', link: 'https://rmbi.ch/vital/pagw2/' }
  ],

  'application': [
    { name: 'Color-Invertor', link: 'https://github.com/Vital-Vuillaume/Color-Invertor' }
  ],

  'script': [
    { name: 'Calculate-Average', link: 'https://github.com/Vital-Vuillaume/Calculate-Average' },
    { name: 'Hidden-Slash', link: 'https://github.com/Vital-Vuillaume/Hidden-Slash' },
    { name: 'The-Price-Is-High', link: 'https://github.com/Vital-Vuillaume/The-Price-Is-High' }
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
    'organisation': 'category',
    'application': 'category',
    'script': 'category'
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
    resultats.innerHTML = `<div class="no-results">Aucun résultat trouvé pour "${Recherche.value}".</div>`;
    containerRecherche.style.overflow = "hidden";
    containerRecherche.style.height = "200px";
  }
  else {
    containerRecherche.style.overflow = "auto";
    containerRecherche.style.height = "auto";
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

//-----Bouton dark mode-----\\

let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

function updateDarkMode() {
  if (isDarkMode) {
    const newBg = `#242231`;
    const newColor = `#38374863`;
    const newColor2 = `white`;
    document.documentElement.style.setProperty('--bg', newBg);
    document.documentElement.style.setProperty('--default', newColor);
    document.documentElement.style.setProperty('--default2', newColor2);
    body.classList.add("black")
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--default');
    document.documentElement.style.removeProperty('--default2');
    body.classList.remove("black")
  }
}
updateDarkMode();

btnDark.onclick = function() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('isDarkMode', isDarkMode);
  updateDarkMode();
};

//-----Passer en mode plein ecran-----\\

pleinEcranActif = false;

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
  
  pleinEcranActif = true;
  btnLienEcran.textContent = "Quitter le plein écran";
}

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

  pleinEcranActif = false;
  btnLienEcran.textContent = "Mettre en plein écran";
}

//-----Bouton Ecran-----\\

BtnEcran.onclick = function() {
  if (!pleinEcranActif) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
};

//------Bouton Menu contextuel------\\

btnMenuCustom.onclick = function() {
  menuContextuelPersonnaliseActive = !menuContextuelPersonnaliseActive;
  if (menuContextuelPersonnaliseActive) {
    customMenu.style.display = "block";
  } else {
    customMenu.style.display = "none";
  }
  updateMenuContextuelLocalStorage();
};

//------Bouton fenetre------\\

function ouvrirPopup() {
  const url = 'https://rmbi.ch/vital';
  const nomFenetre = 'Vital-Website';
  const largeurEcran = screen.width;
  const hauteurEcran = screen.height;
  const proprietes = `width=${largeurEcran},height=${hauteurEcran},top=0,left=0,toolbar=no,menubar=no,resizable=no`;

  const nouvelleFenetre = window.open(url, nomFenetre, proprietes);

  if (nouvelleFenetre === null) {
    alert('La fenêtre pop-up a été bloquée par le navigateur. Veuillez autoriser les pop-ups pour ce site.');
  }
}

fenetre.onclick = function() {
  ouvrirPopup();
}

//------Bouton couleur------\\

colorPicker.addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--couleur', selectedColor);
    localStorage.setItem('selectedColor', selectedColor);
});

window.addEventListener('load', function() {
    const savedColor = localStorage.getItem('selectedColor');
    
    if (savedColor) {
        document.documentElement.style.setProperty('--couleur', savedColor);
        colorPicker.value = savedColor;
    }
});

//------Bouton curseur------\\

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('cursorCustomized') === 'true') {
    curseur.style.display = "block";
    applyCustomCursor();
  }
});

function applyCustomCursor() {
  body.style.cursor = "none";

  const selectors = ['a', 'div', 'li', 'p'];
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.cursor = "none";
    });
  });

  if (colorPicker) {
    colorPicker.style.cursor = "none";
  }

  document.addEventListener('mousemove', function(e) {
    const topPosition = e.pageY - 10;
    const leftPosition = e.pageX - 10;
    curseur.style.top = topPosition + "px";
    curseur.style.left = leftPosition + "px";
  });

  document.addEventListener('click', function() {
    curseur.classList.add("active");
    setTimeout(function() {
      curseur.classList.remove("active");
    }, 500);
  });
}

curseurCustom.addEventListener('click', function() {
  if (curseur.style.display === "block") {
    resetStyles();
    curseur.style.display = "none";
    localStorage.setItem('cursorCustomized', 'false');
  } else {
    curseur.style.display = "block";
    applyCustomCursor();
    localStorage.setItem('cursorCustomized', 'true');
  }
});

function resetStyles() {
  body.style.cursor = "default";
  const selectors = ['a', 'div', 'li', 'p'];
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.cursor = "default";
    });
  });

  if (colorPicker) {
    colorPicker.style.cursor = "default";
  }
};

//------Bouton reset------\\

let isPopupVisible = false;
let isPopupConfirmed = false;

reset.onclick = function() {
  isPopupVisible = true;

  btnPopup.removeEventListener('click', btnPopupClickHandler);
  btnPopup.addEventListener('click', btnPopupClickHandler);

  if (isPopupVisible === true) {
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
    section3.style.overflow = "hidden";
  };
};

function btnPopupClickHandler(event) {
  event.stopPropagation();

  isPopupConfirmed = true;

  if (isPopupConfirmed === true) {
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
    location.reload();
    localStorage.clear();
    isPopupConfirmed = false;
  };
};
  
annuler.onclick = function() {
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
    section3.style.overflow = "auto";
    isPopupVisible = false;
};