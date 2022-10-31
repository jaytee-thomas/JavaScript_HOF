document.write(
  "TrueCoders Node-10 (JavaCrip) Gangstas!\n==========\n <br></br>"
);
document.write("Exercise: JS Higher-Order Functions \n==========\n <br></br>");

document.write(`<br></br>`);
document.write("Exercise 1: \n==========\n <br></br>");

const plus = (number) => {
  return (plusNumber) => {
    return plusNumber + number;
  };
};
const plus15 = plus(15);
document.write(
  `We added:  plus15(10) + plus(15), which leaves us with: ${plus15(
    10
  )} <--- Wa-Freakin-La!!!`
);

document.write(`<br></br>`);
document.write(`<br></br>`);

document.write("Exercise 2: \n==========\n <br></br>");

const users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  document.write(
    user.name + " is " + user.age + " years old, and his score is " + user.score
  );
  document.write(`<br></br>`);
});

document.write(`<br></br>`);
document.write("Exercise 3: \n==========\n <br></br>");

// Use the Array map method to return a new array just containing objects with names and scores. Start with the previously defined users array.
let users3 = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

const users2 = users3.map((user, index, users3) => {
  return { name: user.name, score: user.score };
});

console.log(users2);
document.write(users2);

document.write(`<br></br>`);
document.write(`<br></br>`);

document.write("Exercise 4: \n==========\n <br></br>");

//Use the Array filter method to return a new array that only contains users that are listed as active. Start with the previously defined users array.
let users4 = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

const users5 = users4.filter((user, index, user4) => {
  return user.isActive === true;
});

document.write(users5);

document.write(`<br></br>`);
document.write(`<br></br>`);

document.write("Exercise 5: \n==========\n <br></br>");

// Use the Array sort method to sort the users array in-place with the users sorted in descending order by score. Start with the previously defined users array.

let users6 = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users6.sort((a, b) => {
  return b.score - a.score;
});

document.write(users6);

document.write(`<br></br>`);
document.write(`<br></br>`);

document.write("Exercise 6: \n==========\n <br></br>");

//Use the Array reduce method to return sum of all users' scores. Once you have the sum of all scores, find the average score from the users. Start with the previously defined users array.

let users7 = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

const sum = users7.reduce((total, user) => {
  return total + user.score;
}, 0);

document.write(`The sum comes to: ${sum}`);
