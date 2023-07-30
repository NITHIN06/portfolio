window.onload = function(){
    const addButton = document.getElementsByClassName('toggle-button')[0]
    const removeButton = document.getElementsByClassName('btn')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    addButton.addEventListener('click', function(event) {
        navbarLinks.classList.add('active');
        on();
        event.preventDefault();
    })
    removeButton.addEventListener('click', function() {
        navbarLinks.classList.remove('active')
        off();
    })      
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    navbarLinks.classList.remove('active')
}
