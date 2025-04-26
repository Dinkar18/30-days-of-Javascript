'use strict';

// const obj={
//     name:"Dinkar",
//     roll:11222917,
//     branch:"CSE",
//     marks : [90,80,70],
// };
// obj.name="Rahul";
// obj.roll=11222918;

// console.log(`name :  ${obj.name}, roll : ${obj.roll}`)
// console.log(obj.marks[0]);
// let roll1=obj.roll;  
// console.log(roll1);

// obj.marks[0]=1290;
// console.log(obj.marks[0]);

// for(a of obj.marks)
// {
//    console.log(a);
    
// }


let fruits = ["Apple", "Banana", "Mango"];


// fruits.forEach(function(fruit,index) {
//     console.log(fruit,index);
// });

let busMain = {
    busName: "ABC",
    location: "Bihar",
    bookings: [],

    book: function (price, busNo, name) {
        console.log(`Bus name ${this.busName}, location is ${this.location}, price ${price}, busId ${busNo}, passenger name ${name}`);

        this.bookings.push({
            price: price,  // ✅ No need for template literals here
            busNo: busNo,
            name: name,
            location: this.location  // ✅ Corrected this reference
        });
    }
};

// busMain.book(1100, "BS8", "Dinkar");
// console.log(busMain.bookings[0]);
// busMain.book(1100,"BS8","Dinkar")
// busMain.book(1200,"BS9","Ayush")
// busMain.book(1100,"BS8","Dinkar")
// busMain.book(1200,"BS9","Ayush")
// console.log(busMain.bookings[2])



// let childMain =  {
//     busName:"xyz",
//     location:"Jharkhand",
//     bookings:[],
// }

// // it simply copy functionalities of busMain in Chilmain
// let book= busMain.book;

// // Both call() and apply() are used to invoke functions and explicitly set the value of this inside a function.
// book.apply(busMain,[1230,"BS12","Rahul"]);  
// book.call(busMain,1930,"BS22","Shyam");


// bind()

// The bind() method in JavaScript is used to create a new function with a specific this value and optional arguments. Unlike call() and apply(), it does not execute the function immediately, but instead returns a new function that can be executed later.

// let User={
//     name:"Rahul",
//     lname:"Kumar",
// }
// let greet=function(){
//     console.log(`Hello ${this.name} ${this.lname}`);  
// }

// let greets= greet.bind(User);  // it binds the object user with greet() and return new function 
// greets();


// pass by value and reference

  let user={ name:'Dinkar', roll:11222918};

  const newUser= user;
  newUser.name="Rhua"
//   let newUser= {...user, roll:11222930, name:"Rahul"}; 
//   console.log(newUser.roll,newUser.name);
//   console.log(user);
//   console.log(user==newUser );  // it will print Dinkar



//   // for in loop
//   for(let key in user)
//   {
//     console.log(key,user[key]);
//   }

//   let date=new Date();
//   console.log(date.toLocaleString());

// let a=[1,2,3,4];
// let b=[1,2,3,4];
// console.log(a[0]==b[0]);  // it will print false


// const newArr=[...a,...b,80,90];
// console.log(newArr[2]);  // it will print 1,2,3,4,1

// let obj1={
//     name:"Rahul",
//     age:10,
//     roll:11222918,
//     marks:[50,60]
// }

// let obj2={
//     name1:"Abhishek",
//     age1:20,
//     roll1:1122298,
//     marks1:[90,60]
// }

// const newObj={...obj1,...obj2,      
// }
// newObj.name="Dinkar";
// console.log( newObj);


let map=new Map();
map.set("name","Rahul");
map.set("age",20);
map.set("marks",40);

console.log(map.has("age"));
console.log(map.get("age"));
console.log(map.delete("name"));

console.log(map);
