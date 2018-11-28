1.1、绘制一个物体并让它随着鼠标旋转，使其总能指向鼠标.
   用captureMouse(canvas)捕获到鼠标位置后，就可以访问mouse.x和mouse.y属性从而获得它的坐标值。而另一方面，可以通过箭头对象的x与y属性获得它的坐标位置。通过这两个坐标的差值，就可以计算出三角形两边的长度。通过Math.atan(dy, dx)方法算出角度的大小并将其赋值给箭头函数对的rotation属性：
   ```
   var dx = mouse.x - arrow.x
   var dy = mouse.y - arrow.y
   arrow.rotation = Math.atan(dy, dx)
   ```
1.2、通过不断地增加角的度数可以模拟实现从0到1再到-1最后回到0的效果。
   变形1：线性垂直运动
   变形2： 脉冲运动
   变形3：使用两个角的产生波

1.3、圆周运动
   用正弦函数计算y坐标，用余弦函数计算x坐标
   变形1：椭圆运动
   使用不同的半径计算x与y的坐标位置，将其命名为radiusX和radiusY
第一章总结：
```
//三角学基础函数
sine of angle = opposite / hypotenuse
cosine of angle = adjacent / hypotenuse
tangent of angle = opposite / adjacent

//角度与弧度互转
radians = degress * Math.PI / 180
degress = radians * 180 / Math.PI

//朝鼠标旋转
dx = mouse.x - object.x
dy = mouse.y - object.y
object.rotation = Math.atan2(dy, dx) * 180 / Math.PI

//创建波
(function drawFrame(){
   window.requestAnimationFrame(drawFrame, canvas)
   value = center + Math.sin(angle) * range
   angle += speed
}())

//创建圆形
(function drawFrame(){
   window.requestAnimationFrame(drawFrame, canvas)
   xposition = centerX + Math.cos(angle) * radius
   yposition = centerY + Math.sin(angle) * radius
   angle += speed
}())

//创建椭圆形
(function drawFrame(){
   window.requestAnimationFrame(drawFrame, canvas)
   xposition = centerX + Math.cos(angle) * radiusX
   yposition = centerY + Math.sin(angle) * radiusY
   angle += speed
}())

//勾股定理
dx = x2 - x1
dy = y2 - y1
dist = Math.sqrt(dx * dx + dy * dy)
```

第二章
practice21: 鼠标画线
practice22: 使用quadraticCurve绘制曲线
      变形：如果想让曲线穿过控制点，可以使用下面公式计算控制点
      ```
      x1 = xt * 2 - (x0 + x2) / 2
      y1 = yt * 2 - (y0 + y2) / 2
      ```
practice23: 创建多条曲线

第三章
practice31: 旋转一个物体。