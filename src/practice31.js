import { captureMouse, Arrow } from './utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const arrow = new Arrow(canvas.width / 2, canvas.height / 2)

  const vr = 2

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    arrow.rotation += vr * Math.PI / 180
    arrow.draw(ctx)
  }
  drawFrame()
}

