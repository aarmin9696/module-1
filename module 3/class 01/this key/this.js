//this keyword - 

//implicit binding - implicit binding is applied when u invoke a function in an
// object using dot notation

//- any function written is  implicitly binded to window object 
//everything in global comes under window object

this.a=5;//global object
console.log(a);

//normal function
function get(){
    console.log(this.a);//this keyword inside normal function will point towards the enclosing 
    //object of that function
}
get();


//arrow function
const info = () => {
    console.log(this.a);//this keyword inside arrow function will look for normal
    //function which is enclosing my arrow function 
    //here this keyword is referring to default ie window
}
info();

let user = {
    name: "piyush",
    age: 26,
    getDetails(){
        console.log(this);
        console.log(this.name);
    }
}

user.getDetails();


let user1 = {
    name: "piyush",
    age: 26,
    childObj: {
        newName: "alka",
        getDetails1(){
            console.log(this.name);//undefined
            console.log(this.newName);
        }
    }
}

user1.childObj.getDetails1();


//arrrow function

// let user2 = {
//     nam: 'Prikshit',
//     age: 24,
//     getDetails2: () =>{
//         console.log(this.nam);
//     }
// }
//user2.getDetails2();


let user2 = {
    name: "Prikshit",
    age: 24,
    getDetails2 (){
      function abc() {
        const nestedArrow = () => console.log(this);
        nestedArrow();
      }
      abc();
    },
  };
  
  user2.getDetails2();
  
  // const user = {
  //     firstName: 'Prikshit',
  //     getName(){
  //         const firstName='PC';
  //         return this.firstName;
  //     }
  // }
  
  // console.log(user.getName());
  
  // const user = {
  //     name: 'pc',
  //     logMessage(){
  //         console.log(this);
  //     }
  // }
  
  // user.logMessage(); // this will point towards obj only
  // // if it's method of that object;
  // setTimeout(user.logMessage,4000); // this is callBack
  // // taking defi of logMessage function
  // // and calling after 1 sec.
  
  
  // const user = {
  //     name: 'PC',
  //     greet(){
  //         return `Hello ${this.name}!`;
  //     },
  //     farewell:()=>{
  //         return `Good bye ${this.name}!`;
  //     }
  // }
  
  // console.log(user.greet());
  // console.log(user.farewell());

