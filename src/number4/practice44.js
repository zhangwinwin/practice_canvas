import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  
  let vx = Math.random() * 10 - 5
  let vy = Math.random() * 10 - 5

  ball.x = canvas.width / 2
  ball.y = canvas.height / 2

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let left = 0
    let right = canvas.width
    let top = 0
    let bottom = canvas.height

    ball.x += vx
    ball.y += vy

    if(ball.x + ball.radius > right){
      ball.x = right - ball.radius
      vx *= -1
    }else if(ball.x - ball.radius < left){
      ball.x = left + ball.radius
      vx *= -1
    }
    if(ball.y + ball.radius > bottom){
      ball.y = bottom - ball.radius
      vy *= -1
    }else if(ball.y - ball.radius < top){
      ball.y = top + ball.radius
      vy *= -1
    }
    ball.draw(ctx)
  }
  drawFrame()
}