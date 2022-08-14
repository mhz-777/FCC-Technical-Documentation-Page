
document.addEventListener('click', event => {
    var nav = document.getElementById("nav-container");
    // closes the nav menu if you click outside container
    if(event.target.id == "nav-container"){
        nav.style.display = "";
        document.body.style.overflowY = 'visible'; //re-enable scrolling
        
    }
    // closes the nav menu if you click a link
    if(event.target.className == "nav-link"){
        nav.style.display = "";
        document.body.style.overflowY = 'visible';
    }
})