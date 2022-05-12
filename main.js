const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");



readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "اقرا المزيد") {
    readMoreBtn.innerText = "رجوع";
  } else {
    readMoreBtn.innerText = "اقرا المزيد";
  }
});



// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}




