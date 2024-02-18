{
  const welcome = () => {
    console.log("Hejka, jak Ci mija dzień?");
  };

  const navigationList = document.querySelector(".js-navigationList");
  const listThemeName = document.querySelector(".js-listThemeName");

  const onClickHideList = () => {
    navigationList.classList.toggle("navigation__list--hide");

    listThemeName.innerText = navigationList.classList.contains(
      "navigation__list--hide"
    )
      ? "Pokaż"
      : "Ukryj";
  };

  const image = document.querySelector(".section__image");

  const onClickImgFullScreen = () => {
    image.requestFullscreen();
  };

  const mainBackground = document.querySelector(".container");
  const backgroundThemeName = document.querySelector(".js-backgroundThemeName");

  const onChangeBackgroundClick = () => {
    mainBackground.classList.toggle("container--otherBackground");

    backgroundThemeName.innerText = mainBackground.classList.contains(
      "container--otherBackground"
    )
      ? "Szare"
      : "Zielone";
  };

  const init = () => {
    const buttonHideList = document.querySelector(".js-buttonList");
    buttonHideList.addEventListener("click", onClickHideList);

    const buttonImage = document.querySelector(".js-buttonFullScr");
    buttonImage.addEventListener("click", onClickImgFullScreen);

    const toggleBackgroud = document.querySelector(".js-toggleBackgroud");
    toggleBackgroud.addEventListener("click", onChangeBackgroundClick);

    welcome();
  };

  init();
}
