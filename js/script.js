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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show-write-us")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show-write-us");
      feedbackPopup.classList.remove("modal-error-write-us");
    }
  }
});

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
  }
}); 

var cart = document.querySelector(".content-buy");
var cartPopup = document.querySelector(".popup-item-added");
var cartContinue = document.querySelector(".popup-item-added-continue");
var cartClose = document.querySelector(".popup-item-added-close");
var headerMenuCart = document.querySelector(".header-menu-cart");
var cartAmount = document.querySelector(".cart-amount");
var counter = 0;

if(cart) {
  cart.addEventListener ("click", function (evt){
    evt.preventDefault();
    cartPopup.classList.add("modal-show-cart");
    headerMenuCart.style.backgroundColor = "#EE3643";
    counter++;
    cartAmount.textContent = counter;
  });
}

if(cartClose) {
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show-cart");
  });
} 

if(cartContinue) {
  cartContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show-cart");
  });
}  

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show-cart")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show-cart");
      }
    }
  });  