"use strict"

// On déclare un tableau comprenant nos images
let itemCarousel = [
    '/carousel/caroussel-ex-2/images/projet1.jpg',
    '/carousel/caroussel-ex-2/images/projet2.jpg',
    '/carousel/caroussel-ex-2/images/projet.jpg',
    ];
    
    
    let itemIndex = 0; //On déclare notre index à 0
    let nextButton = document.getElementById('next-btn'); //On déclare une valeur ayant pour valeur le bouton next
    let previousButton = document.getElementById('before-btn'); //On déclare une ayant pour valeur le bouton before
    
    function updateCarousel() {
        const carouselContainer = document.getElementById('carousel');
        carouselContainer.innerHTML = '';
    
        const images = document.createElement('img');
        images.src = itemCarousel[itemIndex] ;
        carouselContainer.appendChild(images);
    }
    
    function nextItem() {
        itemIndex = (itemIndex + 1) % itemCarousel.length;
        updateCarousel()
    };
    
    function previousItem() {
        itemIndex = (itemIndex - 1 + itemCarousel.length) % itemCarousel.length;
        updateCarousel()
    };
    
    
    nextButton.addEventListener('click', nextItem);
    previousButton.addEventListener('click', previousItem);
    
    updateCarousel();