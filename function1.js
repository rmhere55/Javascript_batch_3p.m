// function  
//  normal function 
 function hy (){
    return console.log(" hy");
 }
 hy()

// callback  function 

function print (ans){
    console.log(ans)
}


// function()

function add(a,b){
    print(a+b)
}


add(5,6)
// seprater opr.
// let arr = [1,2,34,5]

// let arr2 = [...add]

// rest 

function calcuatePrice(val, val2, ...num1){
    return num1
}


console.log(calcuatePrice(1,2,3,4,5))



//  let x = Symbol("foo")
//  console.log("x======", typeof(x))
// const user ={
//     name : "rm",
//     price : 199,
//     [x] : "y"
// }

// console.log(typeof(user[x]))
// Object.freeze(user)
// user.gretting = function(){
//     console.log(`hello ${this.name}`)
// }

// function handleObject(anyobject){
//     console.log(`${anyobject.name} and price ${anyobject.price}`)
// }
// // handleObject(user)

// handleObject({
    
//     name : "rm",
//     price : 199
// })




const myarr = [100, 2000, 3000]

function returvalue(getArry)
{
    return getArry
}

// console.log(returvalue(myarr))
console.log(returvalue([1,4,7,8]))

// ... sapreter  opretor  

// rest op
//  function calcuateprice(val, val2 ,...num1){
//   return num1
//  }

//  console.log(calcuateprice(1,2,3,4))
//  const sym = Symbol("key1")
const Object1 = {
    name : "rm",
    price : 199,
    sym : "kyy"

}
// console.log( Object1[sym])

// Object.freeze(Object1)
// Object1.name = "laptop"
// console.log(Object1.name)


 function obj(obj1){
    return obj1
 }
 console.log(obj(Object1))
// function arry(gett){
//     return gett
// }
// console.log(arry([1,2,3,4,5]))

function obj (obj){
    return obj
}
console.log(obj(
    {
    name :"rm",
    sub :"js",
    date: "04-01-2025"
}
))