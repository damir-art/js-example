const spin = document.querySelector('.spin')

spin.style.rotate = '0deg'
let r = 25

setInterval(function () {
    spin.style.rotate = parseInt(spin.style.rotate) + r + 'deg'
}, 30)
