// Самый простой слайдер, когда количество фотографий известно
// При перемотке до конца, слайдер возвращается на начальную позицию
// Используем только одну кнопку 'вперед'
// Код отключения кнопок можно убрать как и стили кнопок

let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let polosa = document.querySelector('.polosa');
let left = 0;

btnPrev.disabled = true;

btnNext.addEventListener('click', function () {
    left = left - 128;
    polosa.style.left = left + 'px';
    console.log(left);
    btnPrev.disabled = false;
    if (left <= -512) {
        polosa.style.left = 0;
        left = 0;
        btnPrev.disabled = true;
    }
});

btnPrev.addEventListener('click', function () {
    left = left + 128;
    polosa.style.left = left + 'px';
    console.log(left);
    if (left >= 0) {
        polosa.style.left = 0;
        left = 0;
        btnPrev.disabled = true;
    }
});
