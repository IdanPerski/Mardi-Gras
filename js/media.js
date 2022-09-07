
// let imgCollection = document.getElementById('galleryDiv').getElementsByTagName('img');

// let imgArray = Array.from(imgCollection);

// console.log(imgArray)


function fullFrame (img) {
    let fullFrameImg = document.getElementById('modalIMage'); 
    fullFrameImg.src =  img.src    
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
     myModal.show();
}



