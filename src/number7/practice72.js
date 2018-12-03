import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const spring = 0.03
  const numBalls = 10
  const bounce = -0.5
  const gravity = 0.1

  let balls = []

  for (let i = 0; i < numBalls; i++) {
    let ball = new Ball(Math.random() * 30 + 20, Math.random() * 0xffffff)
    ball.x = Math.random() * canvas.width / 2
    ball.y = Math.random() * canvas.height / 2
    ball.vx = Math.random() * 6 - 3
    ball.vy = Math.random() * 6 - 3
    balls.push(ball)
  }

  function checkCollision(ballA, i){
    for(let j=i+1;j<numBalls;j++){
      let ballB = balls[j]
      let dx = ballB.x - ballA.x
      let dy = ballB.y - ballB.y
      let dist = Math.sqrt(dx * dx + dy * dy)
      let min_dist = ballA.radius + ballB.radius

      if (dist < min_dist) {
        let angle = Math.atan2(dy, dx)
        let tx = ballA.x + Math.cos(angle) * min_dist
        let ty = ballA.y + Math.sin(angle) * min_dist
        let ax = (tx - ballB.x) * spring * 0.5
        let ay = (ty - ballB.y) * spring * 0.5

        ballA.vx -= ax
        ballA.vy -= ay
        ballB.vx += ax
        ballB.vy += ay
      }
    }
  }

  function move(ball) {
    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy

    if (ball.x + ball.radius > canvas.width) {
      ball.x = canvas.width - ball.radius
      ball.vx *= bounce
    } else if (ball.x - ball.radius < 0) {
      ball.x = ball.radius
      ball.vx *= bounce
    }
    if (ball.y + ball.radius > canvas.height) {
      ball.y = canvas.height - ball.radius
      ball.vy *= bounce
    } else if (ball.y - ball.radius < 0) {
      ball.y = ball.radius
      ball.vy *= bounce
    }
  }

  function draw(ball) {
    ball.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    balls.forEach(checkCollision)
    balls.forEach(move)
    balls.forEach(draw)
  }
  drawFrame()
}