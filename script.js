// General JS Codes

// Close button instances
var modalArea = document.getElementById("modal__area");
const sidemenuArea = document.getElementById('sidemenu--area')
console.log(sidemenuArea)

function closeThing(thingtoclose) {
    document.body.style.overflow = 'auto'
    thingtoclose.style.display = 'none'
    document.body.classList.remove('darken__filter')
};

// Opening side menu of Navbar
function showSidemenu(){
    const sidemenuArea = document.querySelector('#sidemenu--area')
    sidemenuArea.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    document.body.classList.add('darken__filter')
}

