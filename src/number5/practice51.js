import { Ball, containsPoint, captureMouse } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const mouse = captureMouse(canvas)

  ball.x =  canvas.width / 2
  ball.y =  canvas.height / 2

  canvas.addEventListener('mousedown', function(){
    if(containsPoint(ball.getBounds(), mouse.x, mouse.y)){
      canvas.addEventListener('mouseup', onMouseUp, false)
      canvas.addEventListener('mousemove', onMouseMove, false)
    }
  },false)

  function onMouseUp(){
    canvas.removeEventListener('mouseup', onMouseUp, false)
    canvas.removeEventListener('mousemove', onMouseMove, false)
  }

  function onMouseMove(event){
    ball.x = mouse.x
    ball.y = mouse.y
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.draw(ctx)
  }
  drawFrame()
}