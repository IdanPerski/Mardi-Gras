const navSlide = () => {

    const burger = document.querySelector('.burger');

    const nav = document.querySelector('.navList-m');



    burger.addEventListener('click', () => {
nav.classList.toggle('navActive');

    });

}

navSlide();


