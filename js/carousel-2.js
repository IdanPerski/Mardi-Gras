const track = document.querySelector('.carusel_track');
const slides = Array.from(track.children);
;
//converting the element children which are HtmlCollection to an arry is 


const nextButton =document.querySelector('.carousel_bt-right' ) ;
const prevButton = document.querySelector('.carousel_bt-left' );
const dotsNav = document.querySelector('.carousel_nav' );
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
// getboundingClientRect() is a function that mesuring and giving us the size of the element at the DOM
const slideWidth = slideSize.width;
//same as with the children, width that given from getBounding fuction. you can see it by console log.



//ARRAMGE THE SLIDE NEXT TO ONE ANOTHER
// slides[0].style.left = slideWidth* 0 + 'px';
// slides[1].style.left = slideWidth* 1 + 'px';
// slides[2].style.left = slideWidth* 2 + 'px';

const setSlidePostion = (slide,index) =>{
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePostion);


const moveToslide = (track , currentSlide , targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');

}


const updateDots= (currentDot, targetDot) => {
currentDot.classList.remove('currentSlide');
targetDot.classList.add('currentSlide');
    
}


const hideShowArrows = (slides, prevButton, nextButton, targetIndex)  =>{

if (targetIndex === 0){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
    
}else if(targetIndex=== slides.length - 1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
}else{
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
}
}

//when I click left, move slide to left
prevButton.addEventListener ('click', e=>{
    const currentSlide = track.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.currentSlide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToslide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
     hideShowArrows(slides, prevButton, nextButton,prevIndex);
})


//when I click right, move slide to right
nextButton.addEventListener('click',e =>{
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.currentSlide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    moveToslide(track, currentSlide , nextSlide)
   updateDots(currentDot, nextDot)
   hideShowArrows(slides, prevButton, nextButton,nextIndex);
})




//when I click the nav indicators, move to that slide

dotsNav.addEventListener ('click',e=>{
//what indicator was clicked on?
const targetDot = e.target.closest('button');

if(!targetDot) return

const currentSlide = track.querySelector('.currentSlide');
const currentDot = dotsNav.querySelector('.currentSlide');
const targetIndex = dots.findIndex(dot=>dot ===targetDot);
const targetSlide = slides[targetIndex];

moveToslide(track , currentSlide , targetSlide);
updateDots(currentDot, targetDot);
hideShowArrows(slides, prevButton, nextButton, targetIndex);

  
})