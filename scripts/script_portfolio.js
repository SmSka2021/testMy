"use strict";
////////////////portfolio IMG////////////////
const portfolioBtns = document.querySelector(".container__portfolio_btn");
const portfolioImages = document.querySelectorAll(".portfolio__card_img");
portfolioBtns.addEventListener("click", changeImage);

function changeImage(event) {
  if (!portfolioBtns) return;
  for (let i = 0; i < 4; i++) {
    portfolioBtns.children[i].classList.remove("activ");
  }
  if (event.target.classList.contains("portfolio__btn")) {
    let dataAttribute = event.target.dataset.season;
    event.target.classList.add("activ");
    event.stopPropagation();
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `../assets/images/${dataAttribute}/${index + 1}.jpg`)
    );
  }
}
