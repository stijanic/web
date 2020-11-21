var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
  return Math.pow(this.sideLength, 2);
};

var p = square.calcPerimeter();
var a = square.calcArea();