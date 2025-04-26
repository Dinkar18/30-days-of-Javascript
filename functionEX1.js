// let arithmetic=function(a=10,b=5) {
//     console.log('${a} + ${b} => ',a+b);
//     console.log('${a} - ${b} => ',a-b);
//     console.log('${a} * ${b} => ',a*b);
//     console.log('${a} / ${b} => ',a/b);

// }
// arithmetic = arithmetic();  // now it takes default value of a and b 

// let msg = function(name)
// {
//     return `Good Morning ${name} ji `;
// }
// console.log(msg("Dinkar"));

// const add = (a,b) => a+b; // single line
// const sub=(a,b)=>a-b;  // single line
// console.log(add(10,20));  // arrow function 
// console.log(sub(10,20));



// let print= name=> "Dinakr ";
// console.log(print());



// const ageCalculator = (currentYear=2024, DOB) =>
// {
//     let age = currentYear - DOB;
//     console.log(`Current Year: ${currentYear}`);
//     console.log(`Date of Birth : ${DOB}`);
//     return currentYear - DOB;
// } 
// const age= ageCalculator(undefined,2005);
// console.log(`My Current Age is ${age}`);

//higher order function :- here function is passed as argument

// let upper = (str)=>
// {
//     return str.toUpperCase();
// }

// let lower= (str)=> str.toLowerCase();

// let charAt=(str,index)=> str.charAt(index);


// const transformer =(str,fun,...args)=>
// {
//     return fun(str,...args);
// }

// console.log(transformer("DinKar",charAt,2));


// // 2nd method of Higher Order Functions
// let greeting= (msg)=>{
//     return function( name){
//         console.log(`Good morning ${name} ${msg}`);
//     }
// }
// let sayHello = greeting("How are you?");
// console.log(sayHello("Dinkar"));



//2) Anonomous Way to declare functions
// const greeting = function(name){
//     console.log(`Good morning ${name}`);
// }
// greeting("Papa");

//3) Arrow functions
const add=(a,b) =>{
   return a + b;
} 
console.log(add(5,6));