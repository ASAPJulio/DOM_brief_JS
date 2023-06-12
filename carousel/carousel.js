"use strict"

// Je déclare une variable qui a pour valeur la taille(largeur) du contenair carousel
// I declare a variable whose value is the size (width) of the container carousel
const widthCarousel = document.querySelector('.carousel').offsetWidth;


// Je déclare une fonction qui à pour but de passer à l'image suivante
// I declare a function whose purpose is to pass to the next image
function previousSwitch() {
    document.querySelector('.carouselContent').scrollLeft -= widthCarousel;
}

// Je déclare une fonction qui, à l'inverse, va switcher à l'image précédente
// I declare a function that, in reverse, will switch to the previous image
function nextSwitch() {
    document.querySelector('.carouselContent').scrollLeft += widthCarousel;
}
