import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const centerBall = new Ball(100, "#ccc")
  const spring = 0.03
  const numBalls = 10
  const bounce = -1

  let balls = []

  centerBall.x = canvas.width / 2
  centerBall.y = canvas.height / 2
  
  for(let i=0; i<numBalls;i++){
    let ball = new Ball(Math.random() * 40 + 5, Math.random() * 0xffffff)
    ball.x = Math.random() * canvas.width / 2
    ball.y = Math.random() * canvas.height /2
    ball.vx = Math.random() * 6 - 3
    ball.vy = Math.random() * 6 - 3
    balls.push(ball)
  }

  function move(ball){
    ball.x += ball.vx
    ball.y += ball.vy

    if(ball.x + ball.radius > canvas.width){
      ball.x = canvas.width - ball.radius
      ball.vx *= bounce
    }else if(ball.x - ball.radius < 0){
      ball.x = ball.radius
      ball.vx = bounce
    }
    if(ball.y + ball.radius > canvas.height){
      ball.y = canvas.height - ball.radius
      ball.vy *= bounce
    }else if(ball.y - ball.radius < 0){
      ball.y = ball.radius
      ball.vy *= bounce
    }
  }

  function draw(ball){
    let dx = ball.x - centerBall.x
    let dy = ball.y - centerBall.y
    let dist = Math.sqrt(dx * dx + dy * dy)
    let min_dist = ball.radius +centerBall.radius

    if(dist < min_dist){
      let angle = Math.atan2(dy, dx)
      let tx = centerBall.x + Math.cos(angle) * min_dist
      let ty = centerBall.y + Math.sin(angle) * min_dist
      ball.vx += (tx - ball.x) * spring
      ball.vy += (ty - ball.y) * spring
    }
    ball.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    balls.forEach(move)
    balls.forEach(draw)
    centerBall.draw(ctx)
  }
  drawFrame()
}