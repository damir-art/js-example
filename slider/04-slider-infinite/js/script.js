let images = document.querySelectorAll('.infinity-slider img');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let infinitySlider = document.querySelector('.infinity-slider');
let current = 0;

infinitySlider.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    current++;
    if (current == images.length) {
        current = 0;
    }
});

btnNext.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    current++;
    if (current == images.length) {
        current = 0;
    }
    console.log(current);
});

btnPrev.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    current--;
    if (current < 0) {
        current = images.length - 1;
    }
    console.log(current);
});

// Мой рабочий скрипт
// let images = document.querySelectorAll('.infinity-slider img');
// let infinitySlider = document.querySelector('.infinity-slider');
// let count = 0;

// infinitySlider.addEventListener('click', function () {

//     for (let i = 0; i < images.length; i++) {
//         images[i].style.opacity = 0;
//     }

//     images[count].style.opacity = 1;
//     count++;

//     if (count == 6) {
//         count = 0;
//     }

//     console.log(count);
//     console.log('Все изображения не прозрачны');
// });
