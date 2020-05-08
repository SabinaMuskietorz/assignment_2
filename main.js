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

let myphoto = document.querySelector(".myphoto");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/pic2.jpg') {
    myImage.setAttribute('src', 'images/portfoliopic21.jpg');
  } else {
    myImage.setAttribute('src', 'images/pic2.jpg');
  }
}

let mypictures=["images/pic2.jpg", "images/portfoliopic21new.jpg", "images/pic3.jpg"];
let i=1;
function prev() {
  let slider = document.getElementById("slider");
  i--;
  if(i < 0) {
    i = mypictures.length-1;
}
  slider.src=mypictures[i];
}
function next() {
  let slider = document.getElementById("slider");
  i++;
  if(i >= mypictures.length) {
    i = 0;
}
  img.src=mypictures[i];

}