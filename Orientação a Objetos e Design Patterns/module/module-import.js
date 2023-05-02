const { getName, setName } = require('./module2');

console.log(getName());
console.log(setName('João'));
console.log(getName());
/*
default
undefined
João
*/