const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1
    }else{
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
