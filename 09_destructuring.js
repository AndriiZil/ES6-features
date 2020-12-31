const user = {
    name: 'user',
    age: 40,
    male: 'female'
}

const { age, male } = user;

console.log(age, male); // 40 female

const newArray = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Tom' },
]

const [ user1, user2 ] = newArray;

console.log(user1); // { id: 1, name: 'Bob' }

console.log(user2); // { id: 2, name: 'Tom' }
