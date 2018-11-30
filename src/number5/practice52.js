import { Ball, containsPoint, captureMouse } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ball = new Ball()
  const mouse = captureMouse(canvas)

  let vx = Math.random() * 10 - 5
  let vy = -10 
  let bounce = -0.7
  let gravity = 0.2
  let isMouseDown = false

  ball.x = canvas.width / 2
  ball.y = canvas.height / 2

  canvas.addEventListener('mousedown', function () {
    if (containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
      isMouseDown = true
      canvas.addEventListener('mouseup', onMouseUp, false)
      canvas.addEventListener('mousemove', onMouseMove, false)
    }
  }, false)

  function onMouseUp() {
    isMouseDown = false
    canvas.removeEventListener('mouseup', onMouseUp, false)
    canvas.removeEventListener('mousemove', onMouseMove, false)
  }

  function onMouseMove(event) {
    ball.x = mouse.x
    ball.y = mouse.y
  }

  function checkBundaries(){
    let left = 0
    let right = canvas.width
    let top = 0
    let bottom = canvas.height

    vy += gravity
    ball.x += vx
    ball.y += vy

    if(ball.x + ball.radius > right){
      ball.x = right - ball.radius
      vx *= bounce
    }else if(ball.x - ball.radius < left){
      ball.x = left + ball.radius
      vx *= bounce
    }
    if(ball.y + ball.radius > bottom){
      ball.y = bottom - ball.radius
      vy *= bounce
    }else if(ball.y - ball.radius < top){
      ball.y = top + ball.radius
      vy *= bounce
    }
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(!isMouseDown){
      checkBundaries()
    }

    ball.draw(ctx)
  }
  drawFrame()
}