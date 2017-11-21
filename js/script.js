var WriteUs = document.querySelector(".write-us");
var modalWriteUs = document.querySelector(".wrapper-form");
var closeModalWriteUs = document.querySelector(".modal-close");

var mapOpen = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".map-big")
var mapPopupClose = document.querySelector(".modal-close-map")


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