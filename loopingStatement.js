// let arr=[11,22,33,44,55];
// console.log(arr[0]); // 11
// console.log(arr[1]); // 22  // access via index

// let name=new Array("Dinkar","Abhishek","Rohit");  // declare array using new keyword
// for(let n of name)     // iterating using of operator 
//     console.log(n); // Dinkar,Abhishek,Rohit  // access via for

// for(let idx in arr)   // iterating using of in operator it returns index
//     console.log(arr[idx]); //ole.log(arr[id]); //ole.log(ar); //

// let data="Rahul Ji";
// for(let idx in data) // iterating using of
//    console.log(data[idx]);

var collegeName="MMDU, mullana"

   let student1={
    firstname:"Dinkar ",
    lastname:"Arya",
    roll:11222917,
    marks:[90,89,88,78],
    hobbies:["Playing Crickets", "Dancing"]
   }
   for(let idx in student1) // iterating using of
    {
        console.log(idx+"= "+student1[idx]);
    }

    for(let key in  student1) // iterating using of
    {
        console.log(key+"= "+ student1[key]);
    }