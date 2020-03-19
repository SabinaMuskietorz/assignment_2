let menuOpen = true;

function toggleMenu(){
  console.log('toggle menu');
  this.menuOpen = !this.menuOpen;
  let menu = document.getElementById('menu');
  let icon = document.getElementById('menuIcon');
  if(this.menuOpen){
     menu.classList.add("open");
     icon.classList.remove("fa-bars");
     icon.classList.add("fa-times");
  } else {
    menu.classList.remove("open");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

jQuery("input, textarea").blur(function(){
  if (jQuery(this).val()!="") {
    jQuery(this).addClass("active");
  } else {
    jQuery(this).removeClass("active");
  }
});