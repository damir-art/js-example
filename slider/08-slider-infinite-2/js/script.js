// Работаем с массивами
// Работаем с массивом путей 'src'
// https://www.youtube.com/watch?v=gBgD9ieCJpE

// Инициализация
let slides = document.querySelectorAll('.slide-single');
let slider = [];

console.log(slides);

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}

console.log(slider);

// Переменные
let step = 0;
let offset = 0;

function draw() {
    // Создаем два изображения
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset * 600 + 'px';
    document.querySelector('.slide').appendChild(img);

    if (step + 1 == slider.length) {
        step = 0;
    } else {
        step++;
    }

    offset = 1;
}

// Массив из двух видимых изображений
function left () {
    document.onclick = null;
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 600 - 600 + 'px';
        offset2++;
    }

    setTimeout(function () {
        slides2[0].remove();
        draw();
        document.onclick = left;
    }, 1000);

}

draw();draw();

document.onclick = left;