export function requestAnimationFrame () {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60)
    })
  }
}

export function captureMouse (element) {
  let mouse = {
    x: 0,
    y: 0
  }
  element.addEventListener('mousemove', function(event){
    let x = null, y = null
    if(event.pageX || event.pageY){
      x = event.pageX
      y = event.pageY
    } else {
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
    x -= element.offsetLeft
    y -= element.offsetTop

    mouse.x = x
    mouse.y = y
  }, false)
  return mouse
}

export function captureTouch(element){
  let touch = {
    x: null,
    y: null,
    isPressed: false
  }
  element.addEventListener('touchstart', function (event){
    touch.isPressed = true
  }, false)
  element.addEventListener('touchend', function (event) {
    touch.isPressed = false
    touch.x = null
    touch.y = null
  }, false)
  element.addEventListener('touchmove', function (event) {
    let x = null, y = null
    touch_event = event.touches[0]
    if(touch_event.pageX || touch_event.pageY){
      x = touch_event.pageX
      y = touch_event.pageY
    } else {
      x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
    x -= offsetLeft
    y -= offsetTop

    touch.x = x
    touch.y = y
  }, false)
  return touch
}

/**
 * 训练1
 */
//可供旋转的对象
export function Arrow(x, y){
  this.x = x
  this.y = y
  this.color = '#ff0'
  this.rotation = 0
}

Arrow.prototype.draw = function (ctx) {
  ctx.save()
  ctx.translate(this.x, this.y)
  ctx.rotate(this.rotation)
  ctx.lineWidth = 2
  ctx.fillStyle = this.color
  ctx.beginPath()
  ctx.moveTo(-50, -25)
  ctx.lineTo(0, -25)
  ctx.lineTo(0, -50)
  ctx.lineTo(50, 0)
  ctx.lineTo(0, 50)
  ctx.lineTo(0, 25)
  ctx.lineTo(-50, 25)
  ctx.lineTo(-50, -25)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

export function Ball (radius=40, color='#f00') {
  this.x = 0
  this.y = 0
  this.radius = radius
  this.rotation = 0
  this.scaleX = 1
  this.scaleY = 1
  this.color = color
  this.lineWidth = 1
}

Ball.prototype.draw = function (ctx) {
  ctx.save()
  ctx.translate(this.x, this.y)
  ctx.rotate(this.rotation)
  ctx.scale(this.scaleX, this.scaleY)
  ctx.lineWidth = this.lineWidth
  ctx.fillStyle = this.color
  ctx.beginPath()
  ctx.arc(0, 0, this.radius, 0, (Math.PI * 2), true)
  ctx.closePath()
  ctx.fill()
  if(this.lineWidth > 0){
    ctx.stroke()
  }
  ctx.restore()
}