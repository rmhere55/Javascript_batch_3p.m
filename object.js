// hoisting
// == and ===
// 

// var a = 10
// console.log(a);
// var a = 20;
// console.log(a);

// if( 22 === "22"){
//     console.log("true");
// }
// else{
//     console.log("false");
    
// }
// Spread syntax (...) & REST 
// let b = 10 
// let c = b
// console.log(c);


 let arr = [1,4,7,6,4]
 let arr2 = [...arr]
//  console.log(arr2);
//  arr2.pop()
//  console.log( "arr" + arr);
//  console.log("arr2" +arr2);

// rest 

function blink(...btn){
    return btn
}
// console.log(blink("milk", "sugar"))

//  console.log(arr.sort());
//  console.log(Math.min(...arr));
 


var obj = {
    name: "sachin",
}
var obj2 = {...obj}
console.log(obj2.name);


// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
// };

// console.log(person.name, person.age , person.city)
// const { name, age, city } = person;

// console.log(name, age, city); 
// Output: Alice 25 New York


const person = {
    name: "John",
    age: 30,
};


const key = "name";
person[key] = "Doe"; // Dynamically access and update the "name" property
console.log(person);






   Object.keys(person).forEach((key) => {
       console.log(`${key}: ${person[key]}`);
   });


   for (const [key, value] of Object.entries(person)) {
       console.log(`${key}: ${value}`);
   }

   Object.values(person).forEach((value) => {
       console.log(value+1);
   });
   