// Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello ispirandoci alle foto in allegato.

// Cerchiamo di lavorare seguendo i seguenti step in ordine:
//     MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider;
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

//     MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for.
// Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme.
// Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

//     MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.




// array delle immagini
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg',];

// varibili utili
const gallery = document.getElementById("gallery");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

for (let i = 0; i < images.length; i++) {
    // inserisco nel div gallery tag <img> con class "item" per ogni ciclo for
    gallery.innerHTML += `<img src="${images[i]}" class="item">`
}

// definisco la variabile per prendere la posizione all'interno dell'array
let activeCurrentIndex = 0;
// prendo gli elementi con classe "item" all interno del div gallery
const galleryImages = document.getElementsByClassName("item");
console.log(galleryImages);

// aggiungo la classe "active" con "display: block" agli elementi all'interno di gallery
galleryImages[activeCurrentIndex].classList.add("active");


// aggiungo l'eventlistener al bottone next
nextButton.addEventListener('click', function () {
    // rimuovo la classe "active"
    galleryImages[activeCurrentIndex].classList.remove("active");
    // incremento il valore per prendere la prossima posiziojne nell array
    activeCurrentIndex++;

    //! verifico che le immagini non siano finite e se lo sono ricomincio
    if (activeCurrentIndex >= images.length) {
        activeCurrentIndex = 0;
    }

    // assegno al nuovo elemento la classe "active"
    galleryImages[activeCurrentIndex].classList.add("active");
});


// aggiungo l'eventlistener al bottone prev
prevButton.addEventListener('click', function () {
    // rimuovo la classe "active"
    galleryImages[activeCurrentIndex].classList.remove("active");
    // diminuisco il valore per prendere la posizione precedente nell' array
    activeCurrentIndex--;


    //! quando arrivo alla prima immagine ricomincio dall'ultima
    if (activeCurrentIndex < 0) {
        activeCurrentIndex = images.length - 1;
        console.log(activeCurrentIndex)
    }

    // assegno al nuovo elemento la classe "active"
    galleryImages[activeCurrentIndex].classList.add("active");
});