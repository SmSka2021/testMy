var domainElement = document.querySelectorAll(".emailDomain");
var hostname = window.location.hostname;

function setDomain() {
  domainElement.forEach((elem) => {
    elem.innerHTML = "info@" + hostname;
    elem.setAttribute("href", "mailto:info@" + hostname);
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    setDomain();
  },
  false
);
