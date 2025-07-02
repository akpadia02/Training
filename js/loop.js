//for loop
for(let i=1; i<=5; i++){
    console.log("Akshay");
}

//while
let sum = 0;
let i=1;
while(i <= 10){
    sum = sum + i;
    i++;
}

console.log(sum);

//do while
// let sum = 0;
// let i = 1;
// do{
//     sum = sum + i;
//     i = i + 1;
// }while(i <= 10);
// console.log(sum);


//for Each
//The forEach loop in JavaScript is a method used to iterate over elements in an array. It executes a provided function once for each array element, in ascending order.
// ```
// array.forEach(function() {
//     // Code block to be executed on each iteration
// });

// ```
let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function(number, index){
    console.log(`Element at ${index} : ${number}`)
})


//for of
//The 'for of' loop was introduced in ECMAScript 6 (ES6), it simplifies the process of iterating over iterable objects like arrays, strings, maps, and sets.
// ```
// for (variable of iterable) {
//   // Code block to be executed on each iteration
// }
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

//for in
//The 'for in' loop in JavaScript facilitates the iteration over the enumerable properties of an object. It iterates through all enumerable properties of an object, including inherited ones, providing access to both keys and values.
// ```
// for (variable in object) {
//   // Code block to be executed on each iteration
// }

const person = {
  name: 'Mayank',
  age: 21,
  city: 'Delhi'
};

for (const key in person) {
  console.log(key + ": " + person[key])
}

//array method
// /The map() method in JavaScript is used to iterate over each element of an array and apply a transformation function to each element, creating a new array with the results of the transformations.
// ```
// const newArray = array.map((currentValue, index, array) => {
//   // Return the transformed value for each element
// });

const number= [1, 2, 3, 4, 5];

const doubledNumbers = number.map(num => num * 2);

console.log(doubledNumbers); 

// Output: [2, 4, 6, 8, 10]