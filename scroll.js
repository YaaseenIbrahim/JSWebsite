// JS for the scrolling in each events page

const slider = document.querySelector('#scrollable-bar');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing'
    slider.style.scrollBehavior = 'auto'

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab'
        return
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab'
        return
    });
});


slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

function mouseMoveRight() {
    slider.style.scrollBehavior = 'smooth'
    slider.scrollLeft += 150;
}

function mouseMoveLeft() {
    slider.style.scrollBehavior = 'smooth'
    slider.scrollLeft -= 150;

}

// -------------------------------

var modalArea = document.getElementById("modal__area");
var images = document.querySelectorAll(".gallery__image");
var modalImg = document.getElementById("modal-image");

images.forEach(image => {
    image.onclick = function () {
        modalArea.style.display = "flex";
        modalImg.src = this.src;
    }

});

var span = document.getElementsByClassName("close__button")[0];

span.onclick = function () {
    modalArea.style.display = "none";
}