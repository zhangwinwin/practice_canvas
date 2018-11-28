import { captureMouse } from './utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  let points = []
  let numPoints = 9
  let ctrlPoint = {}
  let i = null

  for(i=0; i<numPoints; i++){
    points.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height
    })
  }

  ctx.beginPath()
  ctx.moveTo(points[0].x, points[1].y)

  for(i=1; i< numPoints - 2; i++) {
    ctrlPoint.x = (points[i].x + points[i+1].x) / 2
    ctrlPoint.y = (points[i].y + points[i+1].y) / 2
    ctx.quadraticCurveTo(points[i].x, points[i].y, ctrlPoint.x, ctrlPoint.y)
  }

  ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
  ctx.stroke()
}

