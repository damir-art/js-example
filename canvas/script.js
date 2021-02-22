const canvas = document.getElementById('c1')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(50, 150)
ctx.lineTo(125, 50)
ctx.lineTo(200, 150)
ctx.fillStyle = 'green'
ctx.fill()
ctx.closePath()

canvas.onmousemove = function() {
    ctx.clearRect(0, 0, 600, 450)
    ctx.beginPath()
    ctx.moveTo(25, 180)
    ctx.lineTo(125, 25)
    ctx.lineTo(225, 180)
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.closePath()
}

canvas.onmouseout = function() {
    ctx.clearRect(0, 0, 600, 450)
    ctx.beginPath()
    ctx.moveTo(50, 150)
    ctx.lineTo(125, 50)
    ctx.lineTo(200, 150)
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.closePath()
}
