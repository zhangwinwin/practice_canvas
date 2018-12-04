import { Ball, captureMouse,Line } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const line = new Line(0, 0, 300, 0)
  const ball = new Ball()
  const gravity = 0.2
  const bounce = -0.6

  ball.x = 100
  ball.y = 100

  line.x = 50
  line.y = 200
  line.rotation = 10 * Math.PI / 180

  let cos = Math.cos(line.rotation)
  let sin = Math.sin(line.rotation)

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let bounds = line.getBounds()
    ball.vy += gravity
    ball.x += ball.vx
    ball.y += ball.vy

    if(ball.x + ball.radius > bounds.x && ball.x - ball.radius < bounds.x + bounds.width){
      let x1 = ball.x - line.x
      let y1 = ball.y - line.y
      let y2 = y1 * cos + x1 * sin
      if(y2 > -ball.radius){
        let x2 = x1 * cos + y1 * sin
        let vx1 = ball.vx * cos + ball.vy * sin
        let vy1 = ball.vy * cos + ball.vx * sin
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

    ball.draw(ctx)
    line.draw(ctx)
  }
  drawFrame()
}