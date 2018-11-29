import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const log = document.getElementById('log')

  let balls = []
  let numBalls = 10

  for(let ball, i = 0; i < numBalls; i++){
    ball = new Ball(20)
    ball.id = "ball" + i
    ball.x = Math.random() * canvas.width
    ball.y = Math.random() * canvas.height
    ball.vx = Math.random() * 2 - 1
    ball.vy = Math.random() * 2 - 1
    balls.push(ball)
  }

  function draw(ball, pos){
    ball.x += ball.vx
    ball.y += ball.vy
    if(ball.x - ball.radius > canvas.width || ball.x + ball.radius < 0 || ball.y - ball.radius > canvas.height || ball.y + ball.radius < 0){
      balls.splice(pos, 1)
      if(balls.length > 0){
        log.value = 'Remove ' + ball.id
      }else{
        log.value = "All gone!"
      }
    }
    ball.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let i = balls.length
    while(i--){
      draw(balls[i], i)
    }
  }
  drawFrame()
}