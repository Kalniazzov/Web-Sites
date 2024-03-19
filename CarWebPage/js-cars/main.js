const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav_btn");
const navBtnImg = document.querySelector("#btn_img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img-cars/icon/nav-close.svg";
  } else {
    navBtnImg.src = "./img-cars/icon/nav-open.svg";
  }
};
