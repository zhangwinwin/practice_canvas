import { Ball, Line } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball(20)
  const gravity = 0.2
  const bounce = -0.6

  ball.x = 100
  ball.y = 50

  let lines = []

  lines[0] = new Line(-50, 0, 50, 0)
  lines[0].x = 100
  lines[0].y = 100
  lines[0].rotation = 30 * Math.PI / 180
  
  lines[1] = new Line(-50, 0, 50, 0)
  lines[1].x = 100
  lines[1].y = 200
  lines[1].rotation = 45 * Math.PI / 180

  lines[2] = new Line(-50, 0, 50, 0)
  lines[2].x = 220
  lines[2].y = 150
  lines[2].rotation = -20 * Math.PI / 180

  lines[3] = new Line(-50, 0, 50, 0)
  lines[3].x = 150
  lines[3].y = 330
  lines[3].rotation = 10 * Math.PI / 180

  lines[4] = new Line(-50, 0, 50, 0)
  lines[4].x = 230
  lines[4].y = 250
  lines[4].rotation = -30 * Math.PI / 180

  function checkLine(line){
    let bounds = line.getBounds()

    if (ball.x + ball.radius > bounds.x && ball.x - ball.radius < bounds.x + bounds.width) {
      let cos = Math.cos(line.rotation)
      let sin = Math.sin(line.rotation)
      let x1 = ball.x - line.x
      let y1 = ball.y - line.y
      let y2 = y1 * cos - x1 * sin
      let vy1 = ball.vy * cos - ball.vx * sin
      if (y2 > -ball.radius && y2 < vy1) {
        let x2 = x1 * cos + y1 * sin
        let vx1 = ball.vx * cos + ball.vy * sin
        y2 = -ball.radius
        vy1 *= bounce
        x1 = x2 * cos - y2 * sin
        y1 = y2 * cos + x2 * sin
        ball.vx = vx1 * cos - vy1 * sin
        ball.vy = vy1 * cos - vx1 * sin
        ball.x = line.x + x1
        ball.y = line.y + y1
      }
    }
  }
  function drawLine(line){
    checkLine(line)
    line.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy

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
    lines.forEach(drawLine)
    ball.draw(ctx)
  }
  drawFrame()
}