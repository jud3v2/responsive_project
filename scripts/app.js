// Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// End carousel


//mobile

if (window.innerWidth <= 614){
    let elementB = document.querySelectorAll(".navigation--block-list li span i")[0];
    let elementD = document.querySelectorAll(".navigation--block-list li span i")[1];
    let dropDownB = document.querySelectorAll(".dropdown-content")[0];
    let dropDownD = document.querySelectorAll(".dropdown-content")[1];
    elementB.addEventListener('click', e => {
        if (dropDownB.style.display === "block"){
            dropDownB.style.display = "none";
        } else {
            dropDownB.style.display = "block";
        }
    })

    elementD.addEventListener('click', e => {
        if (dropDownD.style.display === "block"){
            dropDownD.style.display = "none";
        } else {
            dropDownD.style.display = "block";
        }
    })
}