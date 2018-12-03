import { Ball,captureMouse } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const vr = 0.05
  const numBalls = 10
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  
  let balls = []
  let cos = null
  let sin = null

  for(let i=0; i<numBalls; i++){
    let ball = new Ball()
    ball.x = Math.random() * canvas.width
    ball.y = Math.random() * canvas.height
    balls.push(ball)
  }

  function move(ball) {
    let x1 = ball.x - centerX
    let y1 = ball.y - centerY
    let x2 = x1 * cos - y1 * sin
    let y2 = y1 * cos + x1 * sin
    ball.x = centerX + x2
    ball.y = centerY + y2
  }

  function draw(ball){
    ball.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let angle = (mouse.x - centerX) * 0.0005
    cos = Math.cos(angle)
    sin = Math.sin(angle)

    balls.forEach(move)
    balls.forEach(draw)
  }
  drawFrame()
}