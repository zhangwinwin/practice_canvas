import { Ball, captureMouse, containsPoint } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const mouse = captureMouse(canvas)

  let spring = 0.03
  let friction = 0.9
  let gravity = 2
  let vx = 0
  let vy = 0

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let dx = mouse.x - ball.x
    let dy = mouse.y - ball.y
    let ax = dx * spring
    let ay = dy * spring

    vx += ax 
    vy += ay
    vy += gravity
    vx *= friction
    vy *= friction
    ball.x += vx
    ball.y += vy

    ctx.beginPath()
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke()

    ball.draw(ctx)
  }
  drawFrame()
}