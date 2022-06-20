"use strict"


// function init(){

//   const imgCard = document.querySelector('.imgList');
//   const imgLayer = Array.from(imgCard.children)
//   const TopImgSize = imgLayer[0].getBoundingClientRect();
//   const hiddenImgSize = imgLayer[1].getBoundingClientRect();
    
//   console.log(imgLayer)
// }

// init()

//   const TopImgSize = imgLayer[0].getBoundingClientRect();
//   const hiddenImgSize = imgLayer[1].getBoundingClientRect();


//  let imgCard = document.querySelector('.imgList');

 
  


// console.log(firstLogo);




// function firstSection(element){


//     element.style.opacity="0";
//     firstphoto.style.opacity="1";
//     firstLogo.style.border="none";

// }

// function firstSectionDefault(element){

//     firstLogo.style.opacity="1";
//     firstLogo.style.border="solid black";
//     element.style.opacity="0";

// }
// function secondSection(element){

//     element.style.opacity="0";
//     secondPhoto.style.opacity="1";
//     secondLogo.style.border="none";
//     secondPhoto.style.top = "30px";
//     secondPhoto.style.Height = "300px";
 

// }

// function secondSectionDefault(element){

//     secondLogo.style.opacity="1"
//     secondLogo.style.border="solid black"
//     element.style.opacity="0"

// }
// let imgCollection = document.getElementsByTagName('img')
// let imgArray = Array.from(imgCollection)

// let firstLogo =imgArray[2];
// let firstphoto =imgArray[3];
// let secondLogo =imgArray[4];
// let secondPhoto =imgArray[5];
// let thirdLogo =imgArray[6];
// let thirdPhoto =imgArray[7];



// function thirdSection(element){


// element.style.opacity="0"

// thirdPhoto.style.opacity="1"
// thirdPhoto.style.top = "-30px"



// }

// function thirdSectionDefault(element){

// thirdLogo.style.opacity="1"

// element.style.opacity="0"

// }





function changeOver(element){

     let changeBack= element.src;
    

    element.style.opacity="0"
    element.style.opacity="1"
  

}

function changeBack(element){

    let changeBack= element.src;
    

    element.style.opacity="1";
   
    element.style.opacity="0";

}

