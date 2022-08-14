
function showNav() {
 var nav = document.getElementById("nav-container");
 var navSelect = document.getElementById("navbar");

 if (nav.style.display == "") { // use default value so first click works
    nav.style.display = "block"; // reveal hidden nav
    nav.classList.add("transparent"); // blur background using add instead of toggle for reusability
    document.body.style.overflowY = 'hidden'; // disables scroll on body when menu open
} else {
    nav.style.display = "";  
    
}

}
