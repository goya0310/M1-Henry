"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


BinarySearchTree.prototype.size = function(){
  let size = null;
  if(this.value){
    size++;
  }
  if(this.left){
    size++;
    this.left.size();
  }
  if(this.right){
    size++;
    this.right.size();
  }
  return size;
};

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if(this.left === null){
        this.left = new BinarySearchTree(value);
    } else {this.left.insert(value)};
  } else{
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else{this.right.insert(value)};
  }
return;
};

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value){
    return true;
  } 
  if(value < this.value){
    if(!this.left){
      return false;
    } else {
      return this.left.contains(value);
    }
  }
 if (value > this.value){
  if(!this.right){
    return false;
  } else{
    return this.right.contains(value);
  }
  } 
  return false;
  }
   


BinarySearchTree.prototype.depthFirstForEach = function(cb, type){
 if(type === 'pre-order'){
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, type);
    if (this.right) this.right.depthFirstForEach(cb,type);
}
else if(type === 'post-order'){
  if (this.left) this.left.depthFirstForEach(cb, type);
  if (this.right) this.right.depthFirstForEach(cb,type);
  cb(this.value);
}
else{
  if (this.left) this.left.depthFirstForEach(cb, type);
  cb(this.value);
  if (this.right) this.right.depthFirstForEach(cb,type);
}
};  
    
BinarySearchTree.prototype.breadthFirstForEach = function(cb){
  let array = [];
  cb(this.value)
  if(this.left) array.push[this.left];
  if(this.right) array.push[this.right];

  return array;
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
