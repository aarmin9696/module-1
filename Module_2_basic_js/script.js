

// var x = "apple"; 
// var y = function () { 
//     if(x == "false"){ 
//         console.log("first"); 
//     } 
//     if(!x){ 
//         console.log("second"); 
//     } 
//     var x = "banana" 
// }; 
// y();

let pincode = 484774;
let prom = fetch('https://api.postalpincode.in/pincode/${pincode}',{
  method: "GET"
})
prom.then(()=>{
    
  console.log("loaded data");
})

prom.catch(()=> {
  console.log("error occured");
})
