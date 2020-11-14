const slides = document.querySelector('.slides');
const slideImage = slides.querySelectorAll('img');

// Button
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
let totalSlide = slideImage.length;
let slideWidth = slideImage[0].clientWidth;


function moveImage(){
    if(counter < 0) {
        counter = totalSlide - 1;
        slides.style.transform = `translateX(${ -slideWidth * counter }px)`;
    }
    else if (counter >= totalSlide) {
        counter = 0;
        slides.style.transform = `translateX(0)`;
    }
    else{
        slides.style.transform = `translateX(${ -slideWidth * counter }px)`;
    }
    
}

nextBtn.addEventListener('click', () =>{
    counter++;
    moveImage()
})

prevBtn.addEventListener('click', () =>{
    counter--;
    moveImage()
})


