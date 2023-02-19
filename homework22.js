// Task 1
let users = ['Mike', 'Nikola', 'Tom'];
console.log(users[1]);
users[1] = 'Alex';
console.log(users[1]);
users.splice(1,2);
console.log(users);
console.log(users.length);

// Task 2
let a = [5, 3 - 4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

let comparison = () => 
    a.length === b.length ? console.log('a == b') 
    : a.length > b.length ? console.log('a > b') 
    : console.log('a < b');
comparison();

// Task 3
let phrase = 'I am learning JavaScript right now';
phrase = phrase.split(',');
console.log(phrase);

// Task 4
let aTaskFour = [5, 3, 8, 5, 3, 2, 1, 2];
let bTaskFour = [];

aTaskFour.forEach ((item) => {
    if (!bTaskFour.includes(item)){
        bTaskFour.push(item);
    }
});
console.log(bTaskFour);

// Task 5
let usersAll = [
    { id: 1, age: 17},
    { id: 2, age: 18},
    { id: 3, age: 19},
    { id: 4, age: 21},
    { id: 5, age: 17},
    { id: 6, age: 20},
    { id: 7, age: 25}
]
function selectionAge() {
    console.log(
        usersAll.filter(user => user.age > 18 && user.age < 21)
        .map(user => user.id)
        .join(', ')
    );
}
selectionAge(usersAll);