function openMenu() {
    document.getElementById("sidemenu").style.width = "100%";
    document.getElementById("navbar-icon").style.display = "none";
    document.getElementById("side-menu-icon").style.display = "block";
}
  
function closeMenu() {
    document.getElementById("sidemenu").style.width = "0";
    document.getElementById("navbar-icon").style.display = "block";
    document.getElementById("side-menu-icon").style.display = "none";
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});  
}