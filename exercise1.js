//question 1

// const rotiPrice=5;
// const dalPrice=100;
// const icecreamPrice=30;
// function amount(rotiInp, dalInp,icecreamInp) {
//     let finalBill= ((rotiInp*rotiPrice)+(dalInp*dalPrice)+(icecreamInp*icecreamPrice))

//     console.log("Final Bill :" , finalBill);
    
// }
// amount(2,3,4);

//question 2 

// let iphonePrice=90000;
// let airPodsPrice=20000;
// function calculate(gst,phQ,podQ)
// {
//    gstIphone=Math.round((phQ*iphonePrice)*(gst/100) );
//    gstAirPods= Math.round( ((podQ* airPodsPrice)*(gst/100)));
//    console.log("Original Price of AirPods and IPhone:" , airPodsPrice,iphonePrice);
//    console.log("Price after GST on AirPods and IPhone:" ,gstAirPods,gstIphone);
// }
// calculate(18,1,1);

// let str="Dinkar";
// let a='axy'
// let newStr=new String(`Arya`);
// let newStr2Str='abc';
// console.log(typeof str,typeof newStr,typeof newStr2Str, typeof a);

let a=20,b=40;
let add= function(a=100,b=300)
{
    return a + b;
}
const ans= add()
console.log(`Sum of ${a} and ${b} : `,ans);
