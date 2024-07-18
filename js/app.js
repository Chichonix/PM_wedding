const menu = document.querySelector('.menu');
const navButtons = document.querySelectorAll('a');
const liNavButtons = document.querySelectorAll('li');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const carouselImages = document.querySelectorAll('.image');
const carouselImg1 = document.querySelector('#image-1');
const carouselImg2 = document.querySelector('#image-2');
const carouselImg3 = document.querySelector('#image-3');
const carouselImg4 = document.querySelector('#image-4');
const carouselImg5 = document.querySelector('#image-5');

function toggleMenu() {
  menu.classList.toggle('menu-opened')
}

function changeImage() {
  let i = 0;
  setInterval(() => {
    if (i === 0) {
      carouselImages[carouselImages.length - 1].classList.add('image-hided');
      carouselImages[carouselImages.length - 1].classList.remove('image-showed');
    } else {
      carouselImages[i - 1].classList.add('image-hided');
      carouselImages[i-1].classList.remove('image-showed');
    }

    carouselImages[i].classList.remove('image-hided');
    carouselImages[i].classList.add('image-showed');

    if (i === carouselImages.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 3000)
}

function sendMail() {
  var link = "https://mail.google.com/mail/?view=cm&fs=1&to=patrihor259645@gmail.com&cc=delamamiguelj@gmail.com"
    + "&su=Confirmación asisitencia " + document.getElementById('name').value
    + "&body=" + document.getElementById('comments').value;
    
    window.location.href = link;
}

function openGmail() {
  var name = document.getElementById('name').value;
  var comments = document.getElementById('comments').value;

  window.location.href = "mailto:patrihor2596@gmail.com?cc=delamamiguelj@gmail.com&subject=Confirmación asisitencia " + name + "&body=" + comments;
}

function goWebPhotos() {
    window.location.href = "https://weduploader.com/upload/ceEJaMBeH4VVFtwT?utm_source=site&utm_medium=qrcode&utm_campaign=dashboard&utm_content=ceEJaMBeH4VVFtwT"
}

openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)

for (var button of liNavButtons) {
  button.addEventListener('click', () => {
    toggleMenu();
    for (var li of liNavButtons) {
        li.classList.remove("item-selected")
    }
    button.classList.add("item-selected");
    button.classList.remove("item-selected");
  })
}

changeImage();