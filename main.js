ScrollReveal().reveal('.content1', {origin: 'left', delay: 500, duration: 1500, distance: "10%"});
ScrollReveal().reveal('.content2', {origin: 'right', delay: 500, duration: 1500, distance: "10%"});

ScrollReveal().reveal('.progress-bar', {origin: 'left', delay: 500, duration: 1000, distance: "30%"});



// CAROUSEL
const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left');

let count = 0;

function slideSuivante(){
    items[count].classList.remove('active'); 

    if (count < nbSlide -1)
    {
        count++;
    }
    else
    {
        count = 0;
    }

    items[count].classList.add('active')
}

suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if (count > 0)
    {
        count--;
    }

    else
    {
        count = nbSlide -1;
    }

    items[count].classList.add('active')
}

precedent.addEventListener('click', slidePrecedente)