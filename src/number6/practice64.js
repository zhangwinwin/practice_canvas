import { Ball, captureMouse, containsPoint } from '../utils'
import '../style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)
  const ball = new Ball(20)

  let handles = []
  let numHandles = 3
  let spring = 0.03
  let friction = 0.9
  let movingHandle = null

  for(let handle, i=0; i<numHandles; i++){
    handle = new Ball(10, "00f")
    handle.x = Math.random() * canvas.width
    handle.y = Math.random() * canvas.height
    handles.push(handle)
  }

  canvas.addEventListener('mousedown', function(){
    handles.forEach(function (handle) {
      if(containsPoint(handle.getBounds(), mouse.x, mouse.y)){
        movingHandle = handle
      }
    })
  },false)

  canvas.addEventListener('mouseup', function(){
    if(movingHandle){
      movingHandle = null
    }
  },false)

  canvas.addEventListener('mousemove', function(){
    if(movingHandle){
      movingHandle.x = mouse.x
      movingHandle.y = mouse.y
    }
  }, false)

  function applyHandle(handle){
    let dx = handle.x - ball.x
    let dy = handle.y - ball.y

    ball.x += dx * spring
    ball.y += dy * spring
  }

  function drawHandle(handle){
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(handle.x, handle.y)
    ctx.stroke()
    handle.draw(ctx)
  }

  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    handles.forEach(applyHandle)
    ball.vx *= friction
    ball.vy *= friction
    ball.x += ball.vx
    ball.y += ball.vy
    
    ctx.beginPath()
    handles.forEach(drawHandle)
    ball.draw(ctx)
  }
  drawFrame()
}