document.addEventListener("DOMContentLoaded", function () {
  var sliderItems = document.querySelectorAll(".slider-item");
  var rightButton = document.getElementById("right");
  var leftButton = document.getElementById("left")
  var currentIndex = 0;

  function changeSlideRight() {
    sliderItems[currentIndex].classList.remove("selected");
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].classList.add("selected");
  }

  function changeSlideLeft() {
    sliderItems[currentIndex].classList.remove("selected");
    currentIndex = (currentIndex -  1) % sliderItems.length;
    sliderItems[currentIndex].classList.add("selected");
  }

  rightButton.addEventListener("click", changeSlideRight);
  leftButton.addEventListener("click", changeSlideRight);
});
