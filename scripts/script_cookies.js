"use strict";

/////////cookies////////

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookies() {
  const cookieNote = document.getElementById("cookie_note");
  const cookieBtnAccept = cookieNote.querySelector(".btn_cookie");

  // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  if (!getCookie("cookies_policy")) {
    cookieNote.classList.add("show");
  }

  // устанавливаем куку cookies_policy на один день
  cookieBtnAccept.addEventListener("click", function () {
    setCookie("cookies_policy", "true", 1);
    cookieNote.classList.remove("show");
  });
}

checkCookies();
