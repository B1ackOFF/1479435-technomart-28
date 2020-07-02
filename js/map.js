var mapOpen = document.querySelector(".contacts-mini-map-link");
var mapClose = document.querySelector(".contacts-big-map-close");
var mapPopup = document.querySelector(".contacts-big-map");

mapOpen.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show-map");
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show-map");
    }
  }
});  


