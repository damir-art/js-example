// узнаём ширину всех картинок и присваеваем .line данную ширину
// для этого сначала оборачиваем скрипт в 'window.onload'
// желательно размеры изображений задавать точными
// иногда потребуется добавить +1 пиксель, к ширине трека (линии) чтобы поместились все изображения
// чтобы избавиться от дфойного клика в начале, запустите функцию один раз при загрузке скрипта

let line = document.querySelector('.line');
let slides = document.querySelectorAll('.slide img');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let ostatok = 0;

for (let i = 0; i < slides.length; i++) {
    // Добавляем элементы в массив
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}

line.style.width = lineWidth + 'px';

document.addEventListener('click', function () {
    ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
    if (ostatok >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
    } else {
        line.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }

    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    } else {
        step++;
    }
});