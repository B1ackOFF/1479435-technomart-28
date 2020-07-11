var feedback = document.querySelector(".contacts-stray");
var feedbackPopup = document.querySelector(".contacts-write-us");
var feedbackClose = document.querySelector(".write-us-btn-close");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

if(feedback) {
  var feedbackName =  feedbackPopup.querySelector(".write-us-input-name");
  var feedbackEmail =  feedbackPopup.querySelector(".write-us-input-email");
  var feedbackText =  feedbackPopup.querySelector(".write-us-input-text");
  feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show-write-us");
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });
}

if(feedbackClose) {
  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show-write-us");
    feedbackPopup.classList.remove("modal-error-write-us");
  });  
}

if(feedbackPopup) {  
  feedbackPopup.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error-write-us");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error-write-us");
    } else {
      localStorage.setItem("login", feedbackName.value);
    }
  });
}  

var mapOpen = document.querySelector(".contacts-mini-map-link");
var mapClose = document.querySelector(".contacts-big-map-close");
var mapPopup = document.querySelector(".contacts-big-map");

if(mapOpen) {
  mapOpen.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
  });
}

if(mapClose) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show-map");
    } 
    if(feedbackPopup.classList.contains("modal-show-write-us")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show-write-us");
      feedbackPopup.classList.remove("modal-error-write-us");
    }
  }
}); 