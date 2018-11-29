import { captureMouse, Ball } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const ball = new Ball()
  
  let vx = 0
  let vy = 0
  let ax = 0
  let ay = 0

  ball.x = canvas.width / 2
  ball.y = canvas.height / 2

  window.addEventListener('keydown', function(event){
    switch (event.keyCode) {
      case 37:
        ax += -0.1
        break
      case 39:
        ax += 0.1
        break
      case 38:
        ay += -0.1
        break
      case 40:
        ay += 0.1
        break
    }
  }, false)

  window.addEventListener('keyup', function(){
    ax = 0
    ay = 0
  })


  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    vx += ax
    vy += ay
    ball.x += vx
    ball.y += vy
    ball.draw(ctx)
  }
  drawFrame()
}