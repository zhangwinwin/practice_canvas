import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball0 = new Ball(80)
  const ball1 = new Ball(40)
  const bounce = -1.0

  ball0.mass = 2
  ball0.x = canvas.width - 200
  ball0.y = canvas.height - 200
  ball0.vx = Math.random() * 10 - 5
  ball0.vy = Math.random() * 10 - 5

  ball1.mass = 1
  ball1.x = 100
  ball1.y = 100
  ball1.vx = Math.random() * 10 - 5
  ball1.vy = Math.random() * 10 - 5

  function rotate(x, y, sin, cos, reverse){
    return {
      x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
      y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
    }
  }

  function checkCollision (ball0, ball1){
    let dx = ball1.x - ball0.x
    let dy = ball1.y - ball0.y
    let dist = Math.sqrt(dx * dx + dy * dy)

    if(dist < ball0.radius + ball1.radius){
      let angle = Math.atan2(dy, dx)
      let sin = Math.sin(angle)
      let cos = Math.cos(angle)
      let pos0 = {x: 0, y: 0}
      let pos1 = rotate(dx, dy, sin, cos, true)
      let vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true)
      let vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true)
      let vxTotal = vel0.x - vel1.x
      vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) / (ball0.mass + ball1.mass)
      vel1.x = vxTotal + vel0.x

      pos0.x += vel0.x
      pos1.x += vel1.x

      let pos0F = rotate(pos0.x, pos0.y, sin, cos, false)
      let pos1F = rotate(pos1.x, pos1.y, sin, cos, false)

      ball1.x = ball0.x + pos1F.x
      ball1.y = ball0.y + pos1F.y
      ball0.x = ball0.x + pos0F.x
      ball0.y = ball0.y + pos0F.y

      let vel0F = rotate(vel0.x, vel0.y, sin, cos, false)
      let vel1F = rotate(vel1.x, vel1.y, sin, cos, false)
      ball0.vx = vel0F.x
      ball0.vy = vel0F.y
      ball1.vx = vel1F.x
      ball1.vy = vel1F.y
    }
  }

  function checkWalls (ball){
    if(ball.x + ball.radius > canvas.width){
      ball.x = canvas.width - ball.radius
      ball.vx *= bounce
    }else if(ball.x - ball.radius < 0){
      ball.x = ball.radius
      ball.vx *= bounce
    }
    if(ball.y + ball.radius > canvas.height){
      ball.y = canvas.height - ball.radius
      ball.vy *= bounce
    }else if(ball.y - ball.radius < 0){
      ball.y = ball.radius
      ball.vy *= bounce
    }
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball0.x += ball0.vx
    ball0.y += ball1.vy
    ball1.y += ball1.vy
    ball1.x += ball1.vx

    checkCollision(ball0, ball1)
    checkWalls(ball0)
    checkWalls(ball1)
    
    ball0.draw(ctx)
    ball1.draw(ctx)
  }
  drawFrame()
}