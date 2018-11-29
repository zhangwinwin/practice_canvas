import { captureMouse } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const pt1 = {x:0, y:0}
  const pt2 = {X: 100, y: 100}

  let gradient = ctx.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y)
  gradient.addColorStop(0, "fff")
  gradient.addColorStop(1, "f00")

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 100, 100)
}

