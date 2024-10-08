let slideIndex = 1;
showSlides(slideIndex);

let slides = document.getElementsByClassName("mySlides");
// console.log("outside show ", slides.length);

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key == "ArrowUp") {
        // alert("Up key");
    } else if (event.key == "ArrowRight") {
        let isModal = document.getElementById("myModal");
        if (isModal.style.display === "block") {

            plusSlides(1)
        }else{
            return btn1.click();
        }

    } else if (event.key == "ArrowDown") {
        // alert("Down key");
    }
});

function plusSlides(n) {
    let nextSlide = slideIndex + n;
    // console.log(nextSlide, slideIndex,);
    if (nextSlide <= slides.length && nextSlide >= 1) {

        showSlides(slideIndex += n);
    }


}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // console.log("inside show ", slides.length);
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {
        document.getElementById("right").style.visibility = "hidden";
        document.getElementById("left").style.visibility = "visible";
        // slideIndex = 1 
    }
    else {
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("right").style.visibility = "visible";
    }
    if (n <= 1) {
        document.getElementById("left").style.visibility = "hidden";
        document.getElementById("right").style.visibility = "visible";
        // slideIndex = slides.length
    }
    else {
        document.getElementById("left").style.visibility = "visible";
        // document.getElementById("right").style.visibility = "visible";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}