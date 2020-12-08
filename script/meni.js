let slideIndex = 1;
showSlides(slideIndex);

function povecajSlajd(n) {
  showSlides(slideIndex += n);
}

function trenutniSlajd(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slajd = document.getElementsByClassName("mySlides");
  if (n > slajd.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slajd.length}
  for (i = 0; i < slajd.length; i++) {
      slajd[i].style.display = "none";
  }
  
  slajd[slideIndex-1].style.display = "block";
} 