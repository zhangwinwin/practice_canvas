import { Ship } from '../utils'
import './style.css'

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const ship = new Ship()

  let vx = 0
  let vy = 0
  let vr = 0
  let thrust = 0

  ship.x = canvas.width / 2
  ship.y = canvas.height / 2

  window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 37:
        vr = -3
        break
      case 39:
        vr = 3
        break
      case 38:
        thrust = 0.05
        ship.showFlame = true
        break
    }
  }, false)

  window.addEventListener('keyup', function () {
    vr = 0
    thrust = 0
    ship.showFlame = false
  },false)


  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ship.rotation += vr * Math.PI / 180
    let angle = ship.rotation
    let ax = Math.cos(angle) * thrust
    let ay = Math.sin(angle) * thrust
    vx += ax
    vy += ay
    ship.x += vx
    ship.y += vy
    ship.draw(ctx)
  }
  drawFrame()
}