import { captureMouse } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const mouse = captureMouse(canvas)

  function onMouseMove(){
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke()
  }

  canvas.addEventListener('mousedown', function(){
    ctx.beginPath()
    ctx.moveTo(mouse.x, mouse.y)
    canvas.addEventListener('mousemove', onMouseMove, false)
  }, false)
  canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', onMouseMove, false)
  }, false)
}

