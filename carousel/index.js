const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlide = slides.length

document.getElementById("carousel-button-next").addEventListener("click", movetoNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", movetoPrevSlide)

function hideAllSlides(){
    for(let slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function movetoNextSlide(){
    hideAllSlides();
    if(slidePosition === totalSlide - 1){
        slidePosition = 0;
    }else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function movetoPrevSlide(){
    hideAllSlides();
    if(slidePosition === 0){
       slidePosition = totalSlide-1;
    }else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

