import { Ship } from '../utils'
import '../style.css'

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
  }, false)


  function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ship.rotation += vr * Math.PI / 180
    let angle = ship.rotation
    let ax = Math.cos(angle) * thrust
    let ay = Math.sin(angle) * thrust

    let left = 0
    let right = canvas.width
    let top = 0
    let bottom = canvas.height

    vx += ax
    vy += ay
    ship.x += vx
    ship.y += vy

    if(ship.x - ship.width / 2 > right){
      ship.x = left - ship.width / 2
    }else if (ship.x + ship.width / 2 < left){
      ship.x = right + ship.width / 2
    }
    if(ship.y - ship.height / 2 > bottom){
      ship.y = top - ship.height /2
    } else if(ship.y < top - ship.height / 2){
      ship.y = bottom + ship.height / 2
    }

    ship.draw(ctx)
  }
  drawFrame()
}