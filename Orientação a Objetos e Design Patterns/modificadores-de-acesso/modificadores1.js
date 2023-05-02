// Privado / Público

function Person(initialName) {
  let name = initialName;

  this.getName = function () {
      return name;
  }

  this.setName = function (newName) {
      name = newName;
  }
}

const p = new Person('João');

console.log(p);
// Person {getName: [Function (anonymous)], setName: [Function (anonymous)]}

console.log(p.getName());
// "João"

console.log(p.name);
// undefined

p.setName('Guilherme');
console.log(p.getName());
// "Guilherme"