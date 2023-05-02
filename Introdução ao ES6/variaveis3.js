const name = "João";

// Não podemos alterar o valor
// name = "João";

const user = {
  name: "João"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "João"
//};

const persons = ["João", "Cristina", "Anna"];

// Podemos adicionar novos itens
persons.push("Victor");

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = "Guilherme";

console.log("\nArray após as alterações: ", persons);