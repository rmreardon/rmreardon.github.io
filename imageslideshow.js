let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n, parentClass) {
  showSlides(n, parentClass);
}

function showSlides(n, parentClass) {
  const parent = document.querySelector(parentClass);
  let i;
  let slides = parent.getElementsByClassName("mySlides");
  let dots = parent.getElementsByClassName("dot");
  let slideIndex = n%slides.length;
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
