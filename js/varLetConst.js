//var is a function scope,global scope but not block scope
function f(){
    var age=25;
    console.log(age);
}
// console.log(age);
f();

//var can be redeclare
var x=20;
var x=10;
console.log(x);


//let is a block scope 
{
let a=15;
console.log(a);
}
// console.log(a);

// no redeclaration
let ab=20;
// let ab=10;
console.log(ab);
ab="bob"
ab=10; //dynamically type
console.log(ab);


//const value cannot be change,no redeclaration allowed
const w=20;
// w=40;
console.log(w);




//data types
//1. number
let n=23;
console.log(n);

//string
let s="Akshay";
console.log(s);

//undefine
let marks;
console.log(marks);

let m=null;
console.log(m);
console.log(typeof(s));





