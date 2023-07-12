const item = document.getElementById("test")

function func(){
    console.log("double clicked");
}

//event listner - we dont need to give event in html code we can do it in js as below

const item2 = document.getElementById("item")

item2.addEventListener("click", func1)
             //(event string,listner) listner is callback function
 function func1(){
console.log("clicked");
 }


 //for button
 const item3 = document.getElementsByTagName("button")[0]

 item3.addEventListener("dblclick",function(){
    alert("double clicked")
})


//block

const item4 = document.getElementsByTagName("div")[2]

item4.addEventListener("dblclick", () => {
    alert("double clicked")
})


//adding a div inside container when button is clicked

const divs = document.getElementsByTagName("div")
const div1 = divs[3]
const div2 = divs[4]

const btn = document.getElementsByTagName("button")[1]

btn.addEventListener("click",() => {
    console.log("inside listner");
    //adds inner text on clicking button
    let temp = document.createElement("b")
    temp.innerText = "temporary element"

    // to copy element 
    //let copiedelement = temp.cloneNode();//this will copy only element not children as no argument is passed
    
    let copiedelement1 = temp.cloneNode(true);// this will copy childrens also
    console.log(copiedelement1.innerText);



    div1.append(temp)
    //adds to 2nd div not in the first yet above div1 is appended b/c
    //the elemnt with one reference cant be put at two placess in ui as 
    //every element in html is pointing to some unique reference
    div2.append(temp)

 
    // to append this in both divs

    const temp1 = document.createElement("b")
    temp1.innerText = "element bold"

    const temp2 = temp1.cloneNode("true")

    div1.append(temp1)
    div2.append(temp2)


})

//event for input - focus,blur(unfocussed), change

const input = document.getElementsByTagName("input")[0]

//focus
input.addEventListener("focus", () => {
    console.log("input focussed");
})

//blurr

input.addEventListener("blur", () => {
    console.log("blurred");
    if(input.value.length<3){
        alert("input should have atleast 3 characters")
    }
})

//change - triggerred whenever value is changed it has higher priority than blur

input.addEventListener("change", () => {
    console.log("value changed");
})


//as form is submitted page is refresed so to change it

//onsubmit is event for form 

const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", (event) => {
    event.preventDefault();//prevents default behaviour of refreshing on submission
    console.log(event);
    console.log(event.target);//whole form is printed

    // to extract the values from input
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);

    //other way to extract value

    console.log(event.target["username"].value);
    console.log(event.target["password"].value);
    console.log(event.target["email"].value);

    console.log("form submitted");


    //we can store it in object as 

    let userinfo = {
        username : event.target["username"].value,
        password : event.target["password"].value,
        email : event.target["email"].value
    }

    console.log(userinfo);
})


