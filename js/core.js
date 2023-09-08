function init() {
    
}
init();

// Used for non desktop devices
function handleHamburger(){
    let getHamburgerIcon = document.querySelector(".fa-bars");
    let getXmartIcon = document.querySelector(".fa-xmark");
    let mobileMenu = document.querySelector(".mobile_menu");

    mobileMenu.style.display = "block";
    getHamburgerIcon.style.display = "none";
    getXmartIcon.style.display = "block";
}

function handleXmark(){
    let getHamburgerIcon = document.querySelector(".fa-bars");
    let getXmartIcon = document.querySelector(".fa-xmark");
    let mobileMenu = document.querySelector(".mobile_menu");

    mobileMenu.style.display = "none";
    getHamburgerIcon.style.display = "block";
    getXmartIcon.style.display = "none";
}