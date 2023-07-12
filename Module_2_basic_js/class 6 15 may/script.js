function call(a,b){
  a[0]=299
  b=90
}
let x= [5,6,7],y=80
call(x,y) //x-non primitive   y- primitive
console.log(x,y);//[299,6,7] 80


function test(){
    console.log(c);//123
}
function one(two,c){
    console.log(c);//undefined
    c=100
    two()
}
let c=123
one(test)//undefined 123



//this keyword -builtin keyword

let six = function(a,b,c){
    console.log("code");
    return a+b+c
}
six(10,20,30)
console.log(six(10,20,30));

//another way by array method


let seven = (a,b,c) => {
    console.log(a,b,c,"inside arrow function");
    return a+b+c
}
seven(10,20,30)
console.log(seven(10,20,30));

//advantage of arrow function when we have single return value 

let five = (e,f,g) => 2*e+f+g  //if only one argument we can remove () also
console.log(five(50,60,70))


let obj ={
    a:1,
    b:false,
    c:function(){
        console.log(this);//this inside function //this will have refernce to whole object
    },
    d: {
        name:"piyush"
    },
    test: {
        x:10,
        y:20,
        test1: function(){
            //function inside object which is inside another object
            console.log(this);//this will have reference of test
        }
    }
}
console.log(obj.a);//1
console.log(obj.b);//false
obj.c();//inside function
obj["c"]()
obj.test.test1()

//this keyword can be used globally or locally

//this=>window=>global object

//window object is globally available we dont need to intialise it 
//window is in heap space
//global refernce 

console.log(this);

console.log(this.fetch,window.fetch);


//whenever you call a function using an object the reference of the object 
//will be there inside that function in the form of this keyword

function aaa(){
    console.log("inside function");
}
var aaaa = 10
console.log(window);
//whenever we create function with function keyword and variable with var keyword
// they will become part of window object

var aa =() => {
    console.log("first");
}
console.log(window);//this will be also there in window object

function aaaaa(){
    console.log(this);
    console.log(this===window);//gives true b/c even it this is not present 
    //in function context it will look in global where it is present so returns true
}
aaaaa(); //it is window.aaaaa means window is calling so window objec is printed


//arrow function

let obj2 ={
    x:10,
    y:10,
    // func1: () => {
    //     console.log(this);//this 
    // }
    func3: function(){
        console.log(this);//have reference of obj2 as it called it(prints obj2)
        let child = () => { // in arrow function this keyword is not intialized so will look at its parent
            console.log(this);// have reference of lexical prent ie func2 which have reference of obj2(prints obj2)
        }
        child()
    }
}
// obj2.func1();
obj2.func3();


let func = () => {
    console.log(this);// prints window b/c as this variable is not present in funct context so it will look at the
    //parent ie global where it is present with the value of window
}
func();


function called(){
    console.log(this);// window - as this will be there inside regular function
    let obj ={
        a:10,
        b:20,
        test: function(){
            console.log(this);//prints obj - as it is called by obj this has reference of obj
            let children = () => {
                console.log(this);//prints obj - as it is arrow function it dont have this so will look at
                //parent ie test in which this has reference to obj
            }
            children()
        }
    }
    obj.test()
}
window.called()// can be called as called() also


let func5 = () => {
    console.log(this);//window - as arrow so call parent ie global
    let obj ={
        a:10,
        b:20,
        child: () => {
            console.log(this);//window- as this not present so call its parent ie func5 but this is also
            //not present there so will call parent of func5 where value of this is window
            return() => {
                console.log(this);//window - same in parent not present so global
            }
        }
    }
    let a = obj.child()
    a()
}
console.log(this);//window
//this.func5() - this gives error as window dont have func5
func5();




