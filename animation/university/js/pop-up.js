const openPopUp = () => {

    const ratingList = document.querySelector('.rating__list')
    const popUp = document.querySelector('.pop-up')
    const btnRating = document.querySelector('.btn-rating')
    const popUpClose = document.querySelector('.pop-up__close')

    // попап
    btnRating.addEventListener('click', function () {
        popUp.style.top = 'calc(50% - 227.5px)';
    })
    popUpClose.addEventListener('click', function () {
        popUp.style.top = '-515px';
    })


    // таблица рейинга
    const arrRating = data['rating'];
    const arrFriends = data['friends'];

    aF = [];
    for (let i = 0; i < arrRating.length; i++) {
        for (let k = 0; k < arrFriends.length; k++) {
            if (parseInt(arrRating[i].id) == parseInt(arrFriends[k].id)) {
                // console.log( arrRating[i].id )
                aF.push(arrRating[i].id)
            }
        }
    }

    function aFoo(id, arr) {
        // console.log(id)
        for (let i = 0; i < arr.length; i++) {
            if (id == arr[i]) {
                return true
            }
        }
    }

    arrRating.sort((prev, next) => next.points - prev.points);

    arrRating.pop()
    arrRating.pop()
    arrRating.pop()

    for (let i = 0; i < arrRating.length; i++) {
        if (aFoo(arrRating[i].id, aF)) {
            ratingList.innerHTML += `
                <div class="rating__item friends">
                    <div class="rating__item-place">${i + 1}</div>
                    <div class="rating__item-img"><img src="img/${arrRating[i].img.slice(2)}" width="30" height="29" alt=""></div>
                    <div class="rating__item-name">${arrRating[i].name} ${arrRating[i].lastName}</div>
                    <div class="rating__item-points">${arrRating[i].points}</div>
                </div>
            `
        } else {
            ratingList.innerHTML += `
                <div class="rating__item">
                    <div class="rating__item-place">${i + 1}</div>
                    <div class="rating__item-img"><img src="img/${arrRating[i].img.slice(2)}" width="30" height="29" alt=""></div>
                    <div class="rating__item-name">${arrRating[i].name} ${arrRating[i].lastName}</div>
                    <div class="rating__item-points">${arrRating[i].points}</div>
                </div>
            `
        }
    }
}
openPopUp()