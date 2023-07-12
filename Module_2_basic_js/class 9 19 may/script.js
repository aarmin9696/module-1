// 1. by id
let inputElement =document.getElementById("x")
console.log(inputElement);

console.log(inputElement.value);//gives the value



//2. by tagname

let inputElement1=document.getElementsByTagName("input")
console.log(inputElement1);
console.log(inputElement1[0]);//gives 1st input
console.log(inputElement1[1]);//gives 2nd input

console.log(inputElement1[1]["id"]);//gives the id of 2nd input 
console.log(inputElement1[2].value);//gives value of 3rd input


// 3. by classname

let inputElement2 = document.getElementsByClassName("i1");
console.log(inputElement2);//gives the elements with same classname
console.log(inputElement2.length);//gives length of elements with same class
inputElement2[0].innerText = "clickMe";
console.log(inputElement2[0])
console.log(inputElement2[1])



//4. by selector

let inputElement3 = document.querySelector(".i1")//gives only which is first with the class name
console.log(inputElement3)
console.log(inputElement3.innerText)


let inputElement4 = document.querySelectorAll(".i1")//gives all elements with same class name
console.log(inputElement4)
console.log(inputElement4[0])
console.log(inputElement4[1])
console.log(inputElement4[1].value)
console.log(inputElement4[1].value.length)//gives length of value


let inputElement5 = document.querySelector("input.i1#x")
console.log(inputElement5.value)
inputElement5.style.color = "blue"


//geting custom attribute

const inputElement7 = document.getElementById("cstm");
//console.log(inputElement7.data-abc); //undefined as not in document

console.log(inputElement7.attributes);//gives some data

let attributeValue = inputElement7.getAttribute("id")//acc to id
console.log(attributeValue)

let attributeValue1 = inputElement7.getAttribute("data-abc")//acc to data-abc
console.log(attributeValue1)






 //let inputElement6 = document.getElementById("test");
// // console.log(inputElement6["data-abc"]); //we cant access custom attribute by this way

// let attributeValue = inputElement6.getAttribute("id")
// console.log(attributeValue)
// console.log(attributeValue.innerText)


// events in DOM- doing something
// clicking,scrolling,hover,eetc

function printHello(){
    console.log("hello");
}

let arr=["piyush","umesh","alka"]

let userElement = document.getElementById("user")
// userElement.innerText([arr[2]]);


let refbtn = document.getElementById("btn5")//gives reference of btn

let index=0;
function changeName(){
    console.log(index);
  userElement.innerText =arr[index]
  if(index<arr.length-1){
    index++
  }
  else{
     //index=0  //this will make loop of repeated name 
     refbtn.disabled=true;// button will be disabled after completion of loop
  }
}





let container= document.getElementById("container")
 
let newElement = document.createElement("span")//creates new element in heap memory and gives reference to you
// as it will not be present  and we have to append it to website - created empty span element
//<span></span>

newElement.innerText="some new elements"
//<span>some new elements</span>

container.append(newElement);


//creates input tag 
function addName(){
    let input4 = document.createElement("input")
    input4.value="piyush"//adds name in input
    const bodyElement = document.body;
    bodyElement.append(input4);
}

//adds the new users inside div
let refcont= document.getElementById("adduser")
let refbtn2 = document.getElementById("useradd")
let i=0;
function adduser(){
    let div = document.createElement("div")
    div.innerText=arr[i]
    refcont.append(div)
    div.className="user"
    if(i<arr.length-1){
        i++
    }
    else{
        refbtn2.disabled=true
    }
}


//adding object like data

let brr = [
    {
        name:"piyush" , id:1, age:18
    },
    {
        name:"umesh" , id:2, age:18
    },
    {
        name:"alka" , id:3, age:18
    },
    {
        name:"prachi" , id:4, age:18
    },
    
]

let refcont3 = document.getElementById("userdata");
let refbtn3 = document.getElementById("userd")

let j=0;
function adduserdata(){
     let user2 = document.createElement("div")
     user2.className="userclass"
     let name = document.createElement("div")
     name.innerText = brr[j].name
     let id = document.createElement("div")
     id.innerText = brr[j].id
     let age = document.createElement("div")
     age.innerText = brr[j].age

     user2.append(name)
     user2.append(id)
     user2.append(age)

     refcont3.append(user2)

     if(j<brr.length-1){
        j++
     }
     else{
        refbtn3.disabled=true
     }
     

}































