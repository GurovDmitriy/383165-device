var WriteUs = document.querySelector(".write-us");
var modalWriteUs = document.querySelector(".wrapper-form");
var closeModalWriteUs = document.querySelector(".modal-close");

var mapOpen = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".map-big")
var mapPopupClose = document.querySelector(".modal-close-map")

var btn1 = document.querySelector(".slider-controls-btn-1");
var btn2 = document.querySelector(".slider-controls-btn-2");
var btn3 = document.querySelector(".slider-controls-btn-3");
var slider = document.querySelector(".slider-container");


WriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  modalWriteUs.classList.add("wrapper-form--active");
});

closeModalWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  modalWriteUs.classList.remove("wrapper-form--active");
});


mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("map-big--active");
});

mapPopupClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("map-big--active");
});


btn1.addEventListener("click", function(event) {
  slider.classList.remove("slider-container--active-2","slider-container--active-3");
  btn2.classList.remove("slider-controls-btn-1--active");
  btn3.classList.remove("slider-controls-btn-1--active");
  btn1.classList.add("slider-controls-btn-1--active");  
});

btn2.addEventListener("click", function(event) {
  slider.classList.remove("slider-container--active-3");
  slider.classList.add("slider-container--active-2");
  btn1.classList.remove("slider-controls-btn-1--active");
  btn3.classList.remove("slider-controls-btn-1--active");
  btn2.classList.add("slider-controls-btn-1--active");   
});

btn3.addEventListener("click", function(event) {
  slider.classList.remove("slider-container--active-2");
  slider.classList.add("slider-container--active-3");
  btn1.classList.remove("slider-controls-btn-1--active");
  btn2.classList.remove("slider-controls-btn-1--active");
  btn3.classList.add("slider-controls-btn-1--active");  
});