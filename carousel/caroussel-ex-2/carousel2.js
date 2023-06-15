"use strict"

// On déclare un tableau comprenant nos images
let itemCarousel = [
    '/carousel/caroussel-ex-2/images/projet1.jpg',
    '/carousel/caroussel-ex-2/images/projet2.jpg',
    '/carousel/caroussel-ex-2/images/projet.jpg',
    ];
    
    
    let itemIndex = 0; //On déclare notre index à 0
    let nextButton = document.getElementById('next-btn'); //On déclare une variable ayant pour valeur le bouton next
    let previousButton = document.getElementById('before-btn'); //On déclare une ayant pour valeur le bouton before
    
    // Cette première fonction servira à constamment modifier le contenu du carousel
    function updateCarousel() {
        const carouselContainer = document.getElementById('carousel');
        carouselContainer.innerHTML = ''; // => Cette methode permet de "vider" ce qui se trouve dans la div carousel
    
        const images = document.createElement('img');
        images.src = itemCarousel[itemIndex] ; 
        carouselContainer.appendChild(images); // Ainsi, nous rajoutons la const images comme noeud enfant de la div carousel
    }
    
    // Fonction pour switcher sur une nouvelle image
    function nextItem() {
        itemIndex = (itemIndex + 1) % itemCarousel.length;
        updateCarousel()
    };
    
    // Fonction pour revenir à l'image précédente
    function previousItem() {
        itemIndex = (itemIndex - 1 + itemCarousel.length) % itemCarousel.length;
        updateCarousel()
    };
    
    // Methode permettant d'instancier les boutons previous & next
    nextButton.addEventListener('click', nextItem);
    previousButton.addEventListener('click', previousItem);
    
    
    updateCarousel();