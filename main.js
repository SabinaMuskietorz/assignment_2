/* hamburger navigation */
//pen by Andrew Dean but modified https://codepen.io/andydean565/pen/bGdKMaa?editors=1111
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

/* picture change */
//code from class but modified
function changePic() {
  document.getElementById("profilePic").src = "images/portfoliopic21new.jpg";
}

function normalPic() {
  document.getElementById("profilePic").src = "images/pic2.jpg";
}

/* quote array */
//code from class but modified
let quotes = ["\" Either I will find a way, or I will make one. - Philip Sidney \"",
  "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.Thomas A. Edison\"",
  "\"You are never too old to set another goal or to dream a new dream.- C.S Lewis\"",
  "\"If you can dream it, you can do it.- Walt Disney \"",
  "\"Never give up, for that is just the place and time that the tide will turn.- Harriet Beecher Stowe\"",
  "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want. Muhammad Ali\"",
  "\" If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.- Bruce Lee\"",
];

function genQuote() {
let randNum = Math.floor((Math.random() * 6) + 1);
let genQuote = document.querySelector(".quote");
document.querySelector(".quote").innerHTML = quotes[randNum];

console.log(randNum);
console.log(quotes[randNum]);
}

/* picture slider */
//code from sololearn but modified https://code.sololearn.com/WtzvqK42siEg/#js
let images = ['images/weathernew.png', 'images/todolistnew.png', 'images/quotesnew.png', 'images/java_portfolionew.png'];
let i = 0;

function slideImg() {
  document.getElementById("imgSld").transition = ".5s";
  document.getElementById("imgSld").src = images[i];

  if (i <images.length - 1) {
    i++;
  }
   else {
    i = 0;
}
}
setInterval(slideImg, 2500); // in milliseconds