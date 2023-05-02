/*
function Pessoa() {
    return {
        name: 'João',
        lastName: 'Pádua'
    }
}

const p = Pessoa();
console.log(p);
// { name: 'João', lastName: 'Pádua' }
*/

/*
function Pessoa(name) {
    return {
        name,
        lastName: 'Pádua'
    }
}

const p = Pessoa('Custom Name');
console.log(p);
// { name: 'Custom Name', lastName: 'Pádua' }
*/

function Pessoa(customProperties) {
  return {
      name: 'João',
      lastName: 'Pádua',
      ...customProperties
  }
}

const p = Pessoa({ name: 'Custom Name', age: 22 });
console.log(p);
// { name: 'Custom Name', lastName: 'Pádua', age: 22 }