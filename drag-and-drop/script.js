const bmw = document.querySelector('.bmw')
const rect = document.querySelector('.rect')

bmw.ondragstart = drag

function drag(e) {
    e.dataTransfer.setData("id", e.target.id);
    console.log(e.target.id);
}

rect.ondragover = allowDrop
rect.ondrop = drop

function allowDrop(e) {
    e.preventDefault();
}
  
function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("id");
    e.target.appendChild(document.getElementById(data));
}
