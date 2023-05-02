class Person {
  #name = '';

  constructor(initialName) {
      this.#name = initialName;
  }

  getName() {
      return this.#name;
  }

  setName(name) {
      this.#name = name;
  }
}

const p = new Person('João');

console.log(p);
// Person {}

console.log(p.getName());
// "João"

console.log(p.name);
// undefined

p.setName('Guilherme');
console.log(p.getName());
// "Guilherme"