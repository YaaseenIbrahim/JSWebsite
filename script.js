// General JS Codes

// Making the maineventsection a fixed 100% height
const navbar = document.querySelector(".banner__nav")
const maineventSection = document.querySelector("#maineventSection")
const TopToolbars = window.outerHeight - window.innerHeight
const windowHeight = (window.screen.availHeight) - TopToolbars + navbar.style.height;
maineventSection.style.minHeight = windowHeight + "px";


// Close button instances
var modalArea = document.getElementById("modal__area");
const sidemenuArea = document.querySelector('#sidemenu--area')

function closeThing(thingtoclose) {
    document.body.style.overflow = 'auto'
    thingtoclose.style.display = 'none'
    document.body.classList.remove('darken__filter')
};

// Opening side menu of Navbar
function showSidemenu(){
    sidemenuArea.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    document.body.classList.add('darken__filter')
}

