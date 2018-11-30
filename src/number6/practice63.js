import { Ball, captureMouse, containsPoint } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const ball0 = new Ball()
  const ball1 = new Ball()
  const ball2 = new Ball()

  let spring = 0.03
  let friction = 0.9
  let gravity = 2

  function move(ball, targetX, targetY){
    ball.vx += (targetX - ball.x) * spring
    ball.vy += (targetY - ball.y) * spring
    ball.vy += gravity
    ball.vx * friction
    ball.vy * friction
    ball.x += ball.vx
    ball.y += ball.vy
  }

  // function draw(ballB, i){
  //   if(i === 0){
  //     move(ballB, mouse.x, mouse.y)
  //     ctx.moveTO(mouse.x, mouse.y)
  //   }else{
  //     let ballA = balls[i-1]
  //     move(ballB, ballA.x, ballA.y)
  //     ctx.moveTo(ballA.x, ballA.y)
  //   }
  //   ctx.lineTo(ballB.x, ballB.y)
  //   ctx.stroke()
  //   ballB.draw(ctx)
  // }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    move(ball0, mouse.x, mouse.y)
    move(ball1, ball0.x, ball0.y)
    move(ball2, ball1.x, ball1.y)

    ctx.beginPath()
    ctx.moveTo(mouse.x, mouse.y)
    ctx.lineTo(ball0.x, ball0.y)
    ctx.lineTo(ball1.x, ball1.y)
    ctx.lineTo(ball2.x, ball2.y)
    ctx.stroke()

    ball0.draw(ctx)
    ball1.draw(ctx)
    ball2.draw(ctx)
  }
  drawFrame()
}