String.prototype.repeatify = function(num){
    if(num>0){
      let cont = 0;
      let arr = '';
      while(cont<num){
        arr += this;
        cont ++;
      }
      return arr;
    }
    return '';
  }
console.log('hola'.repeatify(3));


function Shape(type, getType) {
    this.type = type;
    this.getType = getType;
  }
  
  function Triangle(a,b,c) {
    this.lado1 =a;
    this.lado2 =b;
    this.lado3 =c;
  }
  
  Triangle.prototype = new Shape(
    "Triangle", 
    function(){return this.type;
    });
  
  
  Triangle.prototype.getPerimeter = function() {
    return this.lado1 + this.lado2 + this.lado3;
  }


var t = new Triangle(1, 2, 3);
t instanceof Triangle
// true
 Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();
// 6
t.getType();
// "Triangle" 