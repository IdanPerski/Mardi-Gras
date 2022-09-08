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
  let smallScreen = window.matchMedia("(max-width: 768px)");
  let logoSize =document.getElementById("logo").style.height;
  if (smallScreen.matches){
      document.getElementById("logo").style.height= "12vh" //logoSize not working (WHY?!)
    }
  else {if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("logo").style.height = "50%"; 
          } 
        else {logo.style.height = "100%";}
  }

}
