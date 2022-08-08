## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a; // b = 8
    console.log(b);  // b = a = 8
    b = c; // b = c = 10
    var x = 5; 
  }
  f(a,b,c); // 8
  console.log(b); // 10
}
c(8,9,10);  // 10, 8 , 8, 8, 10
console.log(b); // 10
console.log(x); // 1

//memoria
var a = 5
var 


```javascript
console.log(bar); // undefined
console.log(baz); // 2
foo(); // Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor); // Tony