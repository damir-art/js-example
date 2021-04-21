const po_requestCallBtn = document.querySelector('.request-call__btn')
const po_overlay = document.querySelector('.overlay')
const po_modalClose = document.querySelector('.modal__close')

po_requestCallBtn.addEventListener('click', function () {
    po_overlay.classList.remove('display-none')
    console.log('Класс удалён')
})

po_modalClose.addEventListener('click', function () {
    po_overlay.classList.add('display-none')
    console.log('Класс добавлен')
})
