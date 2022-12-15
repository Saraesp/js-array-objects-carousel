function goToNextSlide(){
     //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    if(itemActive < items.length - 1){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active')

        itemActive++;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active')
    }
    else{
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active')

        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active')
    }
}

//Creo array immagini
const imagesArray = [
    {
       image: "01.webp",
       title: 'Marvel\'s Spiderman Miles Morale',
       description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
       image: "02.webp",
       title: 'Marvel\'s Spiderman Miles Morale',
       description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
       image: "03.webp",
       title: 'Marvel\'s Spiderman Miles Morale',
       description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
       image: "04.webp",
       title: 'Marvel\'s Spiderman Miles Morale',
       description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
       image: "05.webp",
       title: 'Marvel\'s Spiderman Miles Morale',
       description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';
let itemsThumbnails = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `
    <div class="item">
        <img src="./img/${imagesArray[i].image}">
        <div class="item-description"> 
        <h2>${imagesArray[i].title}</h2>
        <p>${imagesArray[i].description}</p>
        </div>
    </div>`;

    itemsThumbnails += `<div class="thumb">
        <img src="./img/${imagesArray[i].image}">
    </div>`;
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnailsPreview = document.querySelector('.thumbnails');
thumbnailsPreview.innerHTML += itemsThumbnails;
//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const thumbnails =document.getElementsByClassName('thumb');
thumbnails[itemActive].classList.add('active')

for(let i = 0; i < thumbnails.length; i++){
    let thumb = thumbnails[i];
    thumb.addEventListener('click', function(){
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        thumbnails[itemActive].classList.remove('active')

        itemActive = i

        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        thumbnails[itemActive].classList.add('active')
    })
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', goToNextSlide);

prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    if(itemActive > 0){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active')

        itemActive--;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active')
    }
    else{
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active')

        itemActive = items.length - 1;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active')
    }
})

let myInterval = setInterval(goToNextSlide, 2000);

document.getElementById('play').addEventListener('click', function(){
    myInterval = setInterval(goToNextSlide, 2000);
})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(myInterval);
})