//promise chaining

/*
let prom = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve({name:"piyush",age:22})
    },4000)
})
let successCallback = (data)=>{
    console.log(data);
    console.log(x);
    console.log("success of prom");
}

let errorCallback = ()=> {
    console.log("error of prom");
}


let x = prom.then(successCallback)
//promise x depends on the status of promise object
console.log(x);// gives promise object 

let y = prom.catch(errorCallback)

setTimeout(()=>{
    console.log(x);
},5000)

console.log(x instanceof Promise);//true - this is method to check



// a promise in js is an object which represents eventual completion or failure of a task

// initally promise state =>pending

//when promise fulfilled=>fulfilled,data

//when promise rejected=>rejected ,data

x.then(()=>{
    console.log("success of x");
}) 

x.catch(()=>{
    console.log("error of x");
})


//y is always resolved with some data so we dont need catch 
y.then(()=>{
    console.log("success of y");
}) 

// y.catch(()=>{
//     console.log("error of y");
// })


//if pen ->ff =>sc will be executed tht we attached to promise
//if pen ->reje => failure callback that is attached is executed

// x is dependent promise (on prom object)

//prom(peding)->prom(fulfilled) => successcallback of prom will be executed=>x status changes from pndng to ff =>sc of x will be executed
 
//                               =>the data of errorcallback of y will be the return value of prom will be executed


*/

//promise chaining
/*

let prom2 = new Promise((resolve,reject)=>{
    resolve("piyush")
})
console.log(prom2);//fulfiiled.piyush

//inside first, inside 2nd, inside 3rd

prom2.then(()=>{
    console.log("inside first then");
}).then(()=>{
    console.log("inside 2nd then");
}).then(()=>{
    console.log("inside 3rd then");
})

//it can be written as this also

// let first = () => {
//     console.log("inside first then");
// }
// let second = () => {
//     console.log("inside second then");
// }
// let third = () => {
//     console.log("inside third then");
// }

// prom2.then(first).then(second).then(third)

*/



/*
let prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        reject("piyush")
    },2000)
})
*/

//window.fetch is function to make a network call in js

//this will add the names of pincode in div

//fetch(url,object)

let pincode = 484774;
console.log("before making network call");
let response = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
console.log(response);
console.log("after making network call");

response.then((info)=>{
    console.log(info instanceof Response);//info is instance of Responce class
    console.log(info);
    //inside response class we have json method as info is instance of response we can use json method 
    let prom4 = info.json(); //converts the data to js

    prom4.then((data)=>{
        console.log(data);
        appendOnToWebpage(data[0].PostOffice)
    })

    prom4.catch((error)=>{
        console.log(error);
    })
    console.log("loaded data");
})

response.catch((info)=>{
    console.log(info);
    console.log("something went wrong");
})




const placesContainer = document.getElementById("places")

function appendOnToWebpage(arr){
    placesContainer.innerText="";
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement("div")
        div.innerText = arr[i].Name
        placesContainer.append(div)
        
    }
}










// let obj = new Response()
//to load data by entering pincode

const pincodeInput = document.getElementById("input");
    //   const placesContainer = document.getElementById("places") ;

      function fetchData() {
        let pincode = pincodeInput.value;
        let response = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        response.then((data) => {
            // data is Response clas instance 
            let prom = data.json();
            prom.then((finalData) => {
                appendOntoWebPage(finalData[0].PostOffice);
            })
            prom.catch(() => {
                alert("Something went wrong")
            })
        })


        response.catch(() => {
            alert("some error");
        })
      }

      function appendOntoWebPage(arr) {
        placesContainer.innerText = '' ;
        for (let i = 0; i < arr.length; i++) {
          let div = document.createElement("div");
          div.innerText = arr[i].Name;
          placesContainer.append(div);
        }
      }
