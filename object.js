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
console.log(blink("milk", "sugar"))

//  console.log(arr.sort());
//  console.log(Math.min(...arr));
 
