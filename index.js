"use strict";

window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const links = document.querySelectorAll(".projectLink");
const githubURL = "https://yuanfang313.github.io/new-portfolio-website";
const localURL = "";
let realURL = localURL;

links.forEach((link) => {
  let href = link.getAttribute("href");
  let newHref = realURL + href;
  link.setAttribute("href", newHref);
});
