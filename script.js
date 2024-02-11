// Navbar
document.getElementById("menu-button").addEventListener("click", function () {
  var path = document.getElementById("menu-icon").querySelector("path");
  var isHamburger =
    path.getAttribute("d") === "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z";

  if (isHamburger) {
    path.setAttribute("d", "M2 2L18 18M2 18L18 2"); // Cancel icon
    path.setAttribute("stroke", "black"); // Cancel icon
    path.setAttribute("stroke-width", "2"); // Cancel icon
  } else {
    path.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"); // Hamburger icon
  }
  document.getElementById("menu").classList.toggle("hidden");
});

//home
let slideIndex = 0;
let slides = document.getElementById("carousel").children;
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}
function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}
showSlide(slideIndex);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// export default {
//   data() {
//     return {
//       moreClicked: false,
//     };
//   },
// };
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
