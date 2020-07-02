var feedback = document.querySelector(".contacts-stray");
var feedbackPopup = document.querySelector(".contacts-write-us");
var feedbackClose = document.querySelector(".write-us-btn-close");
var feedbackName =  feedbackPopup.querySelector(".write-us-input-name");
var feedbackEmail =  feedbackPopup.querySelector(".write-us-input-email");
var feedbackText =  feedbackPopup.querySelector(".write-us-input-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

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

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show-write-us");
});  

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show-write-us")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show-write-us");
      }
    }
  });

feedbackPopup.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-error-write-us");
  } else {
      localStorage.setItem("login", feedbackName.value);
  }
});

