let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1); 
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n !== undefined) {
        slideIndex = n;
    }
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    if (dots[slideIndex]) {
        dots[slideIndex].className += " active";
    }
}

let xDown = null;
let yDown = null;

document.getElementById('slideshow-container').addEventListener('touchstart', handleTouchStart, false);
document.getElementById('slideshow-container').addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { // Detects if the movement is horizontal
        if (xDiff > 0) {
            slideIndex++;
            if (slideIndex >= document.getElementsByClassName("mySlides").length) {
                slideIndex = 0;
            }
        } else {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = document.getElementsByClassName("mySlides").length - 1;
            }
        }
        showSlides(slideIndex);
    }

    xDown = null;
    yDown = null;
}
