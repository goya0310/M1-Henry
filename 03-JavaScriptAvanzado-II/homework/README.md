# Homework JavaScript Avanzado II

## Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
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
console.log('hola'.repeatify(3));   //holaholahola
```

### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
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
        this.type = 'Triangle';
    }
    getPerimeter = (a, b, c) => this.a + this.b + this.c ;
    getArea = (base, altura) => (base*altura)/2;
};
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
function Circle(radio) {
  this.raido = radio;
  this.getPerimeter = function() {return 3.14 * radio ** 2}
}

Circle.prototype = new Shape(
  'Circle',
  function(){return this.type;
  });
  
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.
