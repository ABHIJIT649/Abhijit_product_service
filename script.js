

const images = [
    'url("background.jpg")',
    'url("gallery-5.jpg")',
    'url("gallery-4.jpg")',
    'url("gallery_6.jpg")',
    'url("gallery-7.jpg")'


  ];

let index = 0;
const slider = document.getElementById("header_pages");

function changeBackground() {
  slider.style.backgroundImage = images[index];
  index = (index + 1) % images.length; 
}


changeBackground();

// Change background per 3sec
setInterval(changeBackground, 3000);


