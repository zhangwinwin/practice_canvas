import { Ball } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball0 = new Ball()
  const ball1 = new Ball()

  ball0.mass = 2
  ball0.x = 50
  ball0.y = canvas.height / 2
  ball0.vx = 1

  ball1.mass = 1
  ball1.x = 300
  ball1.y = canvas.height / 2
  ball1.vx = -1


  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball0.x += ball0.vx
    ball1.x += ball1.vx

    let dist = ball1.x - ball0.x

    if(Math.abs(dist) < ball0.radius + ball1.radius){
      // let vx0Final = ((ball0.mass - ball1.mass) * ball0.vx + 2 * ball1.mass * ball1.vx) / (ball0.mass + ball1.mass)
      // let vx1Final = ((ball1.mass - ball0.mass) * ball1.vx + 2 * ball0.mass * ball0.vx) / (ball1.mass + ball0.mass)

      let vxTotal = ball0.vx - ball1.vx
      ball0.vx = ((ball0.mass - ball1.mass) * ball0.vx + 2 * ball1.mass * ball1.vx) / (ball0.mass + ball1.mass)
      ball1.vx = vxTotal + ball0.vx

      ball0.x += ball0.vx
      ball1.x += ball1.vx
    }
    ball0.draw(ctx)
    ball1.draw(ctx)
  }
  drawFrame()
}