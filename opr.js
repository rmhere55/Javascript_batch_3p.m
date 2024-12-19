// Arithmetic operators

// standard  + - / *
console.log(2+2)
 console.log(2-2)
 console.log(2*2)
 console.log(2/2)

//  remainder incre decre  unary plur negative power

console.log(2%5)
console.log(2**2)
var a = 2 //3
console.log (a++) 
console.log (a++) 
console.log (a--)
// console.log(2<<2)
// console.log(2>>2)
//  bitwise operators
 
//  & | ^ ~ << >> >>>
//  console.log(2&3)
//  console.log(2|3)


// console.log(2&2)
// Logical operators

// const a1 = true && true; // t && t returns true
// const a2 = true && false; // t && f returns false
// const a3 = false && true; // f && t returns false
// const a4 = false && 3 === 4; // f && f returns false
// const a5 = "Cat" && "Dog"; // t && t returns Dog
// const a6 = false && "Cat"; // f && t returns false
// const a7 = "Cat" && false; // t && f returns false


// const o1 = true || true; // t || t returns true
// const o2 = false || true; // f || t returns true
// const o3 = true || false; // t || f returns true
// const o4 = false || 3 === 4; // f || f returns false
// const o5 = "Cat" || "Dog"; // t || t returns Cat
// const o6 = false || "Cat"; // f || t returns Cat
// const o7 = "Cat" || false; // t || f returns Cat


// const n1 = null ?? 1; // 1
// const n2 = undefined ?? 2; // 2
// const n3 = false ?? 3; // false
// const n4 = 0 ?? 4; // 0


// const n1 = !true; // !t returns false
// const n2 = !false; // !f returns true
// const n3 = !"Cat"; // !t returns false


// String operators

console.log("my " + "string"); // console logs the string "my string".
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
console.log(myString)



// Conditional (ternary) operator

// condition ? val1 : val2


 let
 age = 5;
  let stauts = age >= 18 ? "adult" : "minor";
console.log(stauts); // outputs "adult" if age is 18 or more, otherwise outputs "



const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9

