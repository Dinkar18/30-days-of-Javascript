// function, Date, Math, String, Number
// const ans = add(10,20);
// // console.log("Sum : "+ans)
// function add(a,b)
// {
//     return a+b;
// }

// let sum= (...num) =>
// {
//     let total=0;
//     for(let n of num)
//     {        total+=n;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,6,7,7,5,3,34343,343,3,3,4,4))

// anonymous function
let anon= (a=1,b=1,opr)=>
{
    switch(opr)
    {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        case "%": 
           return a%b;
       
           
    }

}

// console.log(anon(12,8,"+"))
// let gree= (name="Ayush") => `Good morning ${name}`;  // arrow function  single statement
// const sum= (a=0,b=0) => a+b;
// console.log(sum(10,30.7));


// console.log(gree("Dinkar"));
// console.log(gree());


//Higher Order Function


let upper= function(name)  {
    return name.toUpperCase();
}

let lower = function(name) 
{
    return name.toLowerCase();
}


// Higher order function bcz here it passes function as a argument 
const  transform= (name,opr)=>
{
    return opr(name);    
}
console.log(transform("Dinkar",lower));


// HOF return function of function
 const add= (a)=>
 {
    return bVar=(b) =>
    {
        return a+b;
      }  
 }

 let ad1= add(10);  
 console.log(ad1(3));
 
 let ad2= ad1(20);
 console.log(ad2);
 
//  console.log("Value of ad1() : "+bVar(10));
 console.log(add(10)(0));

// real life use of HOF
// function delayedMessage(message, delay) {
//     setInterval(function() {
//         console.log(message);
//     }, delay);
// }

// delayedMessage("Hello after 2 seconds", 2000);


//setTimout() and setInterval()

// let timer = ()=>{
//     console.log("Ayush ki  after 2 seconds");
// }
// console.log(timer(7))
// setInterval((timer)=> {
//     let date=new Date();
//     console.log("Current Time : "+date.toLocaleTimeString());
//     console.log("Current Date : "+date.toLocaleDateString());

// }, 2000);
// timer()


//callback function

// let greet= (name,callback)=>{
//      console.log("Good morning : "+name );
//      callback();
// }

// let bye= (name) => console.log("Good bye"+name);

// greet("Ayush",bye);

