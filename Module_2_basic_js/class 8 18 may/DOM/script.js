//dom manipulation

//DOM - document object model - when we represent html as an object in js


// reprentation of html code in the js as an object is called dom

let obj = {
    fullName: {
        firstName:"piyush",
        lastName:"dwivedi"
    },


    value:10,
    left:{
        value:20
    },
    right:{
        value:18
    }
}

console.log(this);//window - in this document is there - document object controls the whole ui

console.log(document);//it gives whole html

console.log(this.document.URL);//gives url

console.log(typeof this.document.URL);//string

console.log(document.body);//it gives body in html

console.log(document.title);//it gives title of  html
document.title ="DOM Manipulation"
console.log(document.title);


//dom-manipulation

//1. how to access the html element into js code 

//2. how to read the data of particular html element

//3. how to create and add a new element on the webpage

//4. how to remove/delete an element from the document



//1. how to access the html element into js code 

// 4 methods to extract elemnt to js by document object

//by using id, class, tagname, css selector

//every elemnt in html is js object

//a)by id - getElementById method/function

// let button = window.document.getElementById("button");
let button = document.getElementById("buttonClick")//above one can also written as
console.log(button);//gives object
console.log(button.innerText);//gives actual text inside button

setTimeout(() => {
    button.innerText="something"
},5000) //changes inner text after 5 seconds from clickme to something


//b) extract class name 

console.log(button.className);
console.log(button.className.length);
console.log(button.id.length);

setTimeout(() => {
    button.className="btnfailure"
},5000) 

setTimeout(() => {
   console.log(button.className);
},5002)

//changing image source

let p1="p1.jpeg"
let p2 = "p2.jpeg"

let image = document.getElementById("image")
let source = image.src
let list = source.split("/")

let currSource = list[list.length-1]
setTimeout(() => {
    if(currSource===p1){
        image.src = "./"+p2
    }
    else{
        image.src= "./"+p1
    }
    
},5000)


//d)by attribute

console.log(button.style.color);
button.style.color = "white"
button.style.border = "none"
button.style.borderRadius = "10px"
console.log(button.style.backgroundColor);
 


image.style.border = " 2px solid red"//this adds border to image



































