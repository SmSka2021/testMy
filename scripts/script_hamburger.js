"use strict";

/////****АДАПТИВНОЕ МЕНЮ*********////////

const body = document.querySelector("#body"); // для блокировки скролла
const list = document.querySelector(".header_list");
const nav = document.querySelector(".header_nav");
const hamburger = document.querySelector(".hamburger");
const overlayDark = document.querySelector("#overlay_hamburger");

let flag = false; //для затемнения вокруг
let scrollFlag = false; // для блокировки скролла

hamburger.addEventListener("click", show_menu);

function show_menu(event) {
  event.stopPropagation();
  hamburger.classList.toggle("is_active");
  list.classList.toggle("is_active");
  flag = !flag;

  if (flag) {
    overlayDark.classList.add("active_modal");
  } else {
    overlayDark.classList.remove("active_modal");
  }
  scrollFlag = !scrollFlag;
  if (scrollFlag) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

const navLinks = document.querySelectorAll(".header_item");
navLinks.forEach((el) => el.addEventListener("click", closeMenu));

function closeMenu(event) {
  event.stopPropagation();
  hamburger.classList.remove("is_active");
  list.classList.remove("is_active");
  flag = !flag;
  if (flag) {
    overlayDark.classList.add("active_modal");
  } else {
    overlayDark.classList.remove("active_modal");
  }
  scrollFlag = !scrollFlag;
  if (scrollFlag) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}
