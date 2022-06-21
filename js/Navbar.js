"use strict"


const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList-m');

    burger.addEventListener('click', () => {
nav.classList.toggle('navActive');

    });

}

navSlide();


const logo = document.getElementById("logo");
const navBar = document.getElementsByTagName("nav");
let sticky = navBar.offssetTop;

// logo.scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  
    document.getElementById("logo").style.height = "5.5vh";
    document.getElementById("logo").style.transition = "transform 1s ease-in-out";
  
  } else {
    
    document.getElementById("logo").style.height = "8.8vh";
     navbar.classList.remove("sticky");
  }

}