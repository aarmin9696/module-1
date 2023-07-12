//exports multiple items
// export let a = 100;
// export let b = 200;

//old syntax to export 
//module.exports= {a,b}

//exports single item
//export default a

console.log("file staerting");

let name ="jhon";

// function display(){
//     console.log("Hello" , name);
// }

console.log("file ending");

//export default display  //this is for single file


export function display(){
    console.log("Hello" , name);
}

export function hello(){
    console.log("dancing");
}
