// let arr = [2,3,4]  //array literal

// let nums = new Array[2,3,4] // manual assignment - instance creation

// let a=10  //number literal

// let x = new Number(10);  //

// objects

let arr = [4,3,5]
console.log(typeof arr);

let user = ["piyushdwivedi.9696@gmail.com","abc1265"]
//                0                           1    
//   array indexing always strts with 0 and every element will have index and value
//but the array will always strt with 0 means keys are built in this can be overcomed by objects



//by object
let user1 = {
    email:"piyushdwivedi.9696@gmail.com",
    //key:value
    password:"abc123",
    freinds:["piyush","alka"],
    fullName: {
        firstName: "piyush",
        middleName:"",
        lastName:"dwivedi"
    }
};

// in object it is key value pair not builtin so that we can take the data from user
//objects should have unique if repeated the latest one will be considered


//retrival of data, updation,deletion,verification

//retrival
console.log(typeof user1.password, typeof user1.email);
//indexing format
console.log(user1["password"]);
console.log(user1["freinds"][1]);
//using the . notation
console.log(user1.email);
console.log(user1.freinds[1]);



// to change the data - updation
user1.password = "dsfdf6565"
console.log(user1.password);

//object under object
console.log(user1.fullName);
console.log(user1.fullName.firstName);

user1.fullName.firstName="PIYUSH"
console.log(user1.fullName.firstName);

console.log(user1["fullName"]["firstName"]);


//delete

console.log(user1);
delete user1.freinds
console.log(user1);

console.log(user1.freinds);//undefined bcz deleted


//verification

//print all the values
let key="email";
console.log(user1[key]);

//plain for loop - for(intialisation;condition;updation)

//for in loop  -  used to iterate on keys

let crr = [4,5,6,7,8]
for(let x in crr){
    console.log(x,crr[x]);
}


for(let i in user1){
    console.log(i, typeof i);
}

// to find frequency
let drr = [4,5,6,7,8,45,4,5,4,8,7]

/*
freq ={
    4:3,
    5:2,
    6:1,
    7:2,
    8:2,
    45:1
}
*/
let freq = {}
for(let i=0;i<drr.length;i++){
    if(freq[drr[i]]===undefined){ //first occurence
        freq[drr[i]]=1;
    }
    else{ //key is already present
        freq[drr[i]]=freq[drr[i]]+1;
    }
}
console.log(freq);


//strings - array of characters

//can be written in
let str = "piyush"
let str1 = 'piyush'
let str2 = `piyush` //string inside `` we call as template string

let name = 'piyush'
let sayHello=`hello ${name}`
console.log(sayHello);


console.log(str.charAt(2));
console.log(str[3]);

console.log(str.charCodeAt(4));//gives ascii code

let char ="#";
console.log(char.charCodeAt(0));

console.log(String.fromCharCode(122)); //to extract character from ascii code

// it will get us the string after 13 character
let str3="a"
let x = console.log(str3.charCodeAt(0)+13);
console.log(String.fromCharCode(x));


