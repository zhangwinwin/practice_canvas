import { captureMouse } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)

  const x0 = 100, y0 = 200, x2 = 300, y2 = 200

  canvas.addEventListener('mousemove', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.heidht)
    // let x1 = mouse.x
    // let y1 = mouse.y
    let x1 = mouse.x * 2 - (x0 + x2) /2
    let y1 = mouse.y * 2 - (y0 + y2) /2
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.quadraticCurveTo(x1, y1, x2, y2)
    ctx.stroke()
  }, false)
}

