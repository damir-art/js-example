let offset = 0; // смещение slider-line отлевого края
const sliderLine = document.querySelector('.slider-line');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');

// sliderLine.style.left = offset + 'px';

btnNext.addEventListener('click', function() {
    offset = offset + 200;
    if (offset > 600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(sliderLine.style.left);
});

btnPrev.addEventListener('click', function() {
    offset = offset - 200;
    if (offset < 0) {
        offset = 600;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(sliderLine.style.left);
});