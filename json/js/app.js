const app = document.querySelector('.app')
app.innerHTML = '<div class="list"></div>'

const list = document.querySelector('.list')
for (let i = 0; i < data.length; i++) {
    list.innerHTML += `
        <div class="character">
            <div class="character__name"></div>
            <ul class="contrpick"></ul>
            <ul class="antipick"></ul>
        </div>`
}

const characterName = document.querySelectorAll('.character__name')
for (let i = 0; i < data.length; i++) {
    characterName[i].innerHTML += data[i].name
}

const contrpick = document.querySelectorAll('.contrpick')
for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].contrpick.length; y++) {
        contrpick[i].innerHTML += `<li class="contrpick__item">${data[i].contrpick[y]}</li>`
    }
}

const antipick = document.querySelectorAll('.antipick')
for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].antipick.length; y++) {
        antipick[i].innerHTML += `<li class="antipick__item">${data[i].antipick[y]}</li>`
    }
}
