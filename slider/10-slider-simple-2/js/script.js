let btnNext = document.querySelector('.btn-next');
let images = document.querySelectorAll('.slide img');
let active = 0;

btnNext.addEventListener('click', function () {
    images[active].classList.remove('active-img');
    if (active < images.length - 1) {
        active++;
    } else {
        active = 0;
    }
    console.log(active);
    images[active].classList.add('active-img');
    
});