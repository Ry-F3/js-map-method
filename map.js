  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);

// Simplfied w/ map() + arrow function

const arrowSimple = nums.map(num => num *2);
console.log(arrowSimple);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const ageMapping = {
  1: 25, // Age for id 1
  2: 30, // Age for id 2
  3: 28, // Age for id 3
};

const studentsWithAges = students.map(student => {
  return {
    ...student,
    age: ageMapping[student.id]
  };
});

console.log(studentsWithAges);