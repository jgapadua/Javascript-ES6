const users = ['João', 'Guilherme', 'Aline'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
};

const persons = [
    {
        name: 'João',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Aline',
        age: 31,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Itens:', persons.length);

// Verificar se é array
console.log('A variável person é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Name: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Tranformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0).reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);