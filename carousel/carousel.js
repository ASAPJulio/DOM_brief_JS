"use strict"

// Je déclare une variable qui a pour valeur la taille(largeur) du contenair carousel
const widthCarousel = document.querySelector('.carousel').offsetWidth;


// Je déclare une fonction qui à pour but 
function previousSwitch() {
    document.querySelector('.carouselContent').scrollLeft -= widthCarousel;
}

// Je déclare une fonction qui, à l'inverse, va switcher 
function nextSwitch() {
    document.querySelector('.carouselContent').scrollLeft += widthCarousel;
}
