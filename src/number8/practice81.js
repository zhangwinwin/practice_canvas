import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const vr = 0.05
  const ball = new Ball()
  const cos = Math.cos(vr)
  const sin = Math.sin(vr)
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2

  ball.x = Math.random() * canvas.width
  ball.y = Math.random() * canvas.height

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let x1 = ball.x - centerX
    let y1 = ball.y - centerY
    let x2 = x1 * cos - y1 * sin
    let y2 = y1 * cos - x1 * sin
    ball.x = centerX + x2
    ball.y = centerY + y2
    ball.draw(ctx)
  }
  drawFrame()
}