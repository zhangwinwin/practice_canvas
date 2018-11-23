import { captureMouse, Ball } from './utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  let ball = new Ball()
  let angle = 0
  let centerX = canvas.width / 2
  let centerY = canvas.height / 2
  // let radius = 50
  // let speed = 0.05

  // function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas)
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)

  //   ball.x = centerX + Math.sin(angle) * radius
  //   ball.y = centerY + Math.cos(angle) * radius
  //   angle += speed

  //   ball.draw(ctx)
  // }
  // drawFrame()

  //变形1
  let radiusX = 150
  let radiusY = 100
  let speed = 0.05

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.x = centerX + Math.sin(angle) * radiusX
    ball.y = centerY + Math.cos(angle) * radiusY
    angle += speed

    ball.draw(ctx)
  }
  drawFrame()

}

