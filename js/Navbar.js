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


  if     (smallScreen.matches){
      document.getElementById("logo").style.height= "12vh" //logoSize not working (WHY?!)
    }
  else {if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

          document.getElementById("logo").style.height = "50%"; 

          } 
          
        else {logo.style.height = "100%";}
         
   
  //  logo.style.transform = "transition: transform 1s ease-in-out;"
    // logo.style.transform = " translate(25%)";
  
  }

}




// function scrollFunction() {
//   let smallScreen = window.matchMedia("(max-width: 768px)");
//   let logoSize =document.getElementById("logo").style.height;


//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//   console.log(logoSize)
//     document.getElementById("logo").style.height = "50%"; //logoSize not working ()

//      if  (smallScreen.matches){
//       document.getElementById("logo").style.height= "12vh"
//     }
   
//    logo.style.transform = "transition: transform 1s ease-in-out;"
//     // logo.style.transform = " translate(25%)";
  
//   } else {
    
//   logo.style.height = "100%";
    
//      logo.style.transform = "transition: transform 3s ease-in-out;"
//     // logo.style.transform = " translate(25%)";
//     //  navbar.classList.remove("sticky");
//   }

// }