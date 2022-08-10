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


class Shape {
    constructor(type){
        this.type = type;
    }
    getType = (type) => this.type;
}
class Triangle extends Shape {
    constructor(a, b, c, type){
        super(type);
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = 'triangulo';
    }
    getPerimeter = (a, b, c) => this.a + this.b + this.c ;
    getArea = (base, altura) => (base*altura)/2;
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