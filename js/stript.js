console.log("Hejka, jak Ci mija dzień?");

const buttonImage = document.querySelector(".js-buttonFullScr");
const image = document.querySelector(".section__image");

buttonImage.addEventListener("click", () => {
  image.requestFullscreen();
});

const buttonHideList = document.querySelector(".js-buttonList");
const navigationList = document.querySelector(".js-navigationList");
const listThemeName = document.querySelector(".js-listThemeName");

buttonHideList.addEventListener("click", () => {
  navigationList.classList.toggle("navigation__list--hide");

  listThemeName.innerText = navigationList.classList.contains(
    "navigation__list--hide"
  )
    ? "Pokaż"
    : "Ukryj";
});

const toggleBackgroud = document.querySelector(".js-toggleBackgroud");
const mainBackground = document.querySelector(".container");
const backgroundThemeName = document.querySelector(".js-backgroundThemeName");

toggleBackgroud.addEventListener("click", () => {
  mainBackground.classList.toggle("container--otherBackground");

  backgroundThemeName.innerText = mainBackground.classList.contains(
    "container--otherBackground"
  )
    ? "Szare"
    : "Zielone";
});
