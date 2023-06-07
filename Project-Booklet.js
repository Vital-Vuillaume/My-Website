//changement de page

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

function showSection(section) {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'none';
  section.style.display = 'block';
}

btn1.addEventListener('click', function() {
  showSection(section1);
});

btn2.addEventListener('click', function() {
  showSection(section2);
});

btn3.addEventListener('click', function() {
  showSection(section3);
});

// Afficher la section 1 par défaut lors du chargement initial de la page

window.addEventListener('load', function() {
  showSection(section1);
});

//theme claire

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})

//animation navbar

const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));