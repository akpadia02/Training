//Arithmetic
//binary
const a=2+3; //addition
const s=3-1; //substraction
const m=9*7; //multiplication
const d=5/2; //division
const o=5%2; //modulo //2.5
const p=2**4; //power //16

console.log(p);
console.log(d);


//unary
let l=5;
console.log(l++); //5
console.log(++l); //7
console.log(l--); //7
console.log(--l); //5

//comparison < > <= >= != === ==
//strict equality 
console.log(5===5); //true
console.log(5==="5"); //false
//loose equality
console.log(5==5); //true
console.log(5=="5"); //true
// /Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.
//Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.

//ternary
let myage = 21;

(myage >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));


//bitwise
let n1=2;
let n2=2;
console.log(n1&n2); //AND //2
console.log(n1||n2); //or //2
console.log(~n1); //not //-3
console.log(n1>>1); //right shift //1
console.log(n1<<1); //left shift  //4
console.log(n1^n2); //xor  //0

//logical
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert1 && alert3);    //true
console.log(alert1 || alert2);    // false
console.log(alert2 || alert3);    // true
console.log(!alert1);      // false

//truthy falsy
console.log(7&&false); //false
console.log(7||false); //true & short circit


//conditional 
//if else 
if(myage>18){
    console.log("drive");
}else{
    console.log("no");
    
}



let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"


//switch
let num=2;
switch(num){
    case 1: console.log("A");
    break;
    case 2: console.log("B");
    break;
    case 3: console.log("C");
    break;
    default: console.log("xwldhxneohc");
    
}





