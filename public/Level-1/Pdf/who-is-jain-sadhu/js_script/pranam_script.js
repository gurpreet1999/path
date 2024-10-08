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
    if (nextSlide <= slides.length && nextSlide >= 1) {

        return showSlides(slideIndex += n);
    }
    if (nextSlide > slides.length) {
        showSlides(slideIndex += n);
    }


}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        window.location.href = "pranam.html";
        document.getElementById("right").style.visibility = "visible";
        document.getElementById("left").style.visibility = "visible";
        return
    }
    else {
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("right").style.visibility = "visible";
    }
    if (n <= 1) {
        document.getElementById("left").style.visibility = "hidden";
        document.getElementById("right").style.visibility = "visible";
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