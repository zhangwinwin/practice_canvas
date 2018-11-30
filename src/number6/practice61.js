import { Ball, captureMouse, containsPoint } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const mouse = captureMouse(canvas)

  let isMouseDown = false
  let easing = 0.05
  let targetX = canvas.width / 2
  let targetY = canvas.height / 2

  canvas.addEventListener('mousedown', function(){
    if(containsPoint(ball.getBounds(), mouse.x, mouse.y)){
      isMouseDown = true
      canvas.addEventListener('mouseup', onMouseUp, false)
      canvas.addEventListener('mousemove', onMouseMove, false)
    }
  })

  function onMouseUp() {
    isMouseDown = false
    canvas.removeEventListener('mouseup', onMouseUp, false)
    canvas.removeEventListener('mousemove', onMouseMove, false)
  }

  function onMouseMove(event) {
    ball.x = mouse.x
    ball.y = mouse.y
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(!isMouseDown){
      let vx = (targetX - ball.x) * easing
      let vy = (targetY - ball.x) * easing

      ball.x += vx
      ball.y += vy
    }

    ball.draw(ctx)
  }
  drawFrame()
}