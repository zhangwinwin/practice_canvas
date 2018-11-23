1、绘制一个物体并让它随着鼠标旋转，使其总能指向鼠标.
   用captureMouse(canvas)捕获到鼠标位置后，就可以访问mouse.x和mouse.y属性从而获得它的坐标值。而另一方面，可以通过箭头对象的x与y属性获得它的坐标位置。通过这两个坐标的差值，就可以计算出三角形两边的长度。通过Math.atan(dy, dx)方法算出角度的大小并将其赋值给箭头函数对的rotation属性：
   ```
   var dx = mouse.x - arrow.x
   var dy = mouse.y - arrow.y
   arrow.rotation = Math.atan(dy, dx)
   ```
2、通过不断地增加角的度数可以模拟实现从0到1再到-1最后回到0的效果。
   变形1：线性垂直运动
   变形2： 脉冲运动
   变形3：使用两个角的产生波

3、圆周运动
   用正弦函数计算y坐标，用余弦函数计算x坐标
   变形1：椭圆运动
   使用不同的半径计算x与y的坐标位置，将其命名为radiusX和radiusY
