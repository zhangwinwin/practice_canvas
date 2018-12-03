import { Ball, captureMouse, containsPoint } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const ball0 = new Ball(20)
  const ball1 = new Ball(20)

  let ball0_dragging = false
  let ball1_dragging = false
  let spring = 0.03
  let friction = 0.9
  let springLength = 100
  let vx = 0
  let vy = 0 

  ball0.x = Math.random() * canvas.width
  ball0.y = Math.random() * canvas.heidht
  ball1.x = Math.random() * canvas.width
  ball1.y = Math.random() * canvas.heidht

  canvas.addEventListener('mousedown', function () {
    if (containsPoint(ball0.getBounds(), mouse.x, mouse.y)) {
      ball0_dragging = true
    }
    if (containsPoint(ball1.getBounds(), mouse.x, mouse.y)) {
      ball1_dragging = true
    }
  }, false)

  canvas.addEventListener('mouseup', function () {
    if (ball0_dragging || ball1_dragging) {
      ball1_dragging = false
      ball0_dragging = false
    }
  }, false)

  canvas.addEventListener('mousemove', function () {
    if (ball0_dragging) {
      ball0.x = mouse.x
      ball0.y = mouse.y
    }
    if (ball1_dragging) {
      ball1.x = mouse.x
      ball1.y = mouse.y
    }
  }, false)

  function springTo(ballA, ballB) {
    let dx = ballB.x - ballA.x
    let dy = ballB.y - ballA.y
    let angle = Math.atan2(dy, dx)
    let targetX = ballB.x - Math.cos(angle) * springLength
    let targetY = ballB.y - Math.sin(angle) * springLength

    ballA.x += (targetX - ballA.x) * spring
    ballA.y += (targetY - ballA.y) * spring
    ballA.vx *= friction
    ballA.vy *= friction
    ballA.x += ballA.vx
    ballA.y += ballA.vy
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(!ball0_dragging){
      springTo(ball0, ball1)
    }
    if (!ball1_dragging) {
      springTo(ball1, ball0)
    }
    ctx.beginPath()
    ctx.moveTo(ball0.x, ball0.y)
    ctx.lineTo(ball1.x, ball1.y)
    ctx.stroke()
    ball0.draw(ctx)
    ball1.draw(ctx)
  }
  drawFrame()
}