import { requestAnimationFrame, captureMouse } from './utils'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const mouse = captureMouse(canvas)
  canvas.addEventListener('mousedown', function (event) {
    console.log(`x: ${mouse.x}, y: ${mouse.y}`)
  },false)
}

