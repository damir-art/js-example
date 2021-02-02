// Скрипт до и после, две фотографии
// Основа, фото после обработки, фото до обработки которые лежат друг на друге
// Когда курсор мыши оказывается на фото, скрипт высчитывает её положение от края фото

let mySlide = document.querySelector('.myslide');
let two = document.querySelector('.two');
let x;

two.style.width = 50 + '%';

mySlide.addEventListener('mousemove', function (e) {
    x = e.offsetX;
    two.style.width = x + 'px';
});

mySlide.addEventListener('mouseleave', function (e) {
    two.style.width = 50 + '%';
});