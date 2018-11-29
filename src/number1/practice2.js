import { captureMouse, Ball } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  let ball = new Ball()
  let angle = 0
  //练习2
  // ball.x = (canvas.width / 2)
  // ball.y = (canvas.height / 2)

  // function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas)
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)

  //   ball.y = canvas.height / 2 + Math.sin(angle) * 50
  //   angle += 0.1

  //   ball.draw(ctx)
  // }
  // drawFrame()

  //变形1
  // let centerY = 200
  // let range = 0
  // let xspeed = 1
  // let yspeed = 0.05

  // ball.x = 0
  // function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas)
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)

  //   ball.x += xspeed
  //   ball.y = centerY /2 + Math.sin(angle) * range

  //   ball.draw(ctx)
  // }
  // drawFrame()

  //变形2
  // let centerScale = 1
  // let range = 0.5
  // let speed = 0.05

  // ball.x = canvas.width / 2
  // ball.y = canvas.height /2

  // function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas)
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)

  //   ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range
  //   angle += speed

  //   ball.draw(ctx)
  // }
  // drawFrame()

  //变形3
  let angleX = 0
  let angleY = 0
  let range = 50
  let centerX = canvas.width / 2
  let centerY = canvas.height /2
  let xspeed = 0.07
  let yspeed = 0.11

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.x = centerX + Math.sin(angleX) * range
    ball.y = centerY + Math.sin(angleY) * range
    angleX += xspeed
    angleY += yspeed

    ball.draw(ctx)
  }
  drawFrame()

}

