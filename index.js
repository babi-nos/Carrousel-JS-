const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const span = document.querySelectorAll(".span");
const imgs = document.querySelectorAll("img");
const loupe = document.getElementById("loupe");

let slideCurrent = 0;

// function updateZoomImage() {
const activeSlide = document.querySelector(".slide.active img");
let zoomImage = activeSlide.src;

loupe.style.backgroundImage = "url" + "(" + zoomImage + ")";
console.log(zoomImage);

function slideHover(e) {
  let zomm = 2;
  loupe.style.left = e.clientX - loupe.offsetWidth / 2 + "px";
  loupe.style.top = e.clientY - loupe.offsetHeight / 2 + "px";
  loupe.style.backgroundPosition = -loupe.offsetLeft * zomm  + "px " + -loupe.offsetTop * zomm + "px";
}

function next() {
  slide[slideCurrent].classList.remove("active");

  if (slideCurrent === slide.length - 1) {
    slideCurrent = 0;
    span.forEach((index) => {
      index.classList.remove("activeColor");
    });
  } else {
    slideCurrent++;
  }
  span[slideCurrent].classList.add("activeColor");
  slide[slideCurrent].classList.add("active");
}

function prev() {
  slide[slideCurrent].classList.remove("active");
  span[slideCurrent].classList.remove("activeColor");

  if (slideCurrent <= 0) {
    slideCurrent = slide.length - 1;
    span.forEach((index) => {
      index.classList.add("activeColor");
    });
  } else {
    slideCurrent--;
  }

  slide[slideCurrent].classList.add("active");
}

// setInterval(next, 8000);

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
loupe.addEventListener("mousemove", slideHover);
imgs.forEach((img) => {
  img.addEventListener("mousemove", slideHover);
});
