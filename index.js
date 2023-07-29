"use strict";

// create header
const headerHtml =
  '<div class="header-bar item left"><a href="/" class="projectLink">Fang Yuan</a></div><div class="header-bar item right"><ul class="menu align-right"><li><a href="/" class="projectLink">Works</a></li><li><a href="/">About</a></li></ul></div>';

const copyrightHtml =
  '<div class="copyright item"><a href="/" class="projectLink">© Fang Yuan</a></div>';

document
  .querySelector("#myHeader")
  .insertAdjacentHTML("afterbegin", headerHtml);

document
  .querySelector("#myCopyright")
  .insertAdjacentHTML("afterbegin", copyrightHtml);

// create sticky header
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// toggle site url
const links = document.querySelectorAll(".projectLink");
const githubURL = "https://yuanfang313.github.io/new-portfolio-website";
const localURL = "";
let realURL = localURL;

links.forEach((link) => {
  let href = link.getAttribute("href");
  let newHref = realURL + href;
  link.setAttribute("href", newHref);
});
