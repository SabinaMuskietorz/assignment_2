/* hamburger navigation */
let menuOpen = false;

function toggleMenu() {
  console.log('toggle menu');
  this.menuOpen = !this.menuOpen;
  let menu = document.getElementById('menu');
  let icon = document.getElementById('menuIcon');
  if (this.menuOpen) {
    menu.classList.add("open");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    menu.classList.remove("open");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}
/* picture change on click */
let myphoto = document.querySelector(".myphoto");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/pic2.jpg') {
    myImage.setAttribute('src', 'images/portfoliopic21.jpg');
  } else {
    myImage.setAttribute('src', 'images/pic2.jpg');
  }
}

let images = ['images/pic2.jpg', 'images/portfoliopic21new.jpg', 'images/pic3.jpg'];
let i=0;
function prev() {
  let slider = document.getElementById("#slider");
  i--;
  if(i < 0) {
    i = images.length-1;
}
  slider.src = images[i];
}
function next() {
  let slider = document.getElementById("#slider");
  i++;
  if(i >= images.length) {
    i = 0;
}
  slider.src = images[i];

}