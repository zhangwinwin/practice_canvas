import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const log = document.getElementById('log')

  let balls = []
  let numBalls = 80
  let gravity = 0.5

  for (let ball, i = 0; i < numBalls; i++) {
    ball = new Ball(2, Math.random() * 0xffffff)
    ball.x = canvas.width / 2
    ball.y = canvas.height
    ball.vx = Math.random() * 2 - 1
    ball.vy = Math.random() * 10 - 10
    balls.push(ball)
  }

  function draw(ball) {
    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy
    if (ball.x - ball.radius > canvas.width || ball.x + ball.radius < 0 || ball.y - ball.radius > canvas.height || ball.y + ball.radius < 0) {
      ball.x = canvas.width / 2
      ball.y = canvas.height
      ball.vx = Math.random() * 2 - 1
      ball.vy = Math.random() * 10 - 10
    }
    ball.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    balls.forEach(draw)
  }
  drawFrame()
}