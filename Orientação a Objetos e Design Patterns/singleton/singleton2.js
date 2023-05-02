function Pessoa() {
  if (!Pessoa.instance) {
      Pessoa.instance = this;
  }

  return Pessoa.instance;
}

const p = Pessoa.call({ name: 'João' });

const p2 = Pessoa.call({ name: 'Custom Name' });

console.log(p);
// { name: 'João' }

console.log(p2);
// { name: 'João' }