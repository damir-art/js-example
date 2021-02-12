const spinSlider = () => {
    const sliderTrack = document.querySelector('.slider-track')
    const sliderItem = document.querySelectorAll('.slider-item')
    const sliderPrev = document.querySelector('.slider-prev')
    const sliderNext = document.querySelector('.slider-next')

    sliderTrack.style.left = 0;
    /* prev arrow */
    sliderPrev.addEventListener('click', function () {
        if (parseInt(sliderTrack.style.left) < 0) {
            sliderTrack.style.left = parseInt(sliderTrack.style.left) + 60 + 'px'
            console.log(sliderTrack.style.left)
        }
    })

    /* next arrow */
    sliderNext.addEventListener('click', function () {
        if (parseInt(sliderTrack.style.left) > -900) {
            sliderTrack.style.left = parseInt(sliderTrack.style.left) - 60 + 'px'
            console.log(sliderTrack.style.left)
        }
    })
}
spinSlider()