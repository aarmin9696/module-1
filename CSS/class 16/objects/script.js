//objects - used to store 

// let obj = {
//     key1:value1
//     key2:value2
//     key3:value3
// }

let info = {
    fname: "piyush",
    age:20,
    city:"indore",
    no:[1,2,3,4],
    greet: function () {
        console.log("hello");
    }
}

console.log(info);

//accessing elements in objects

console.log(info.age);
console.log(info['city']);
console.log(info.no);
info.greet();

//adding key and value to an object
info['sName'] = "dwivedi";
console.log(info);


info.fname="ram"
console.log(info);




//delete
delete info['sname']
console.log(info);


//icecream question 

let store = {
    flavours: ['strawberry', 'mango', 'kaju pista'],
    toppings: ['sprikles', 'choco chips'],
    containers: ['cone', 'cup', 'stick']
}

console.log(store.flavours[0]);
console.log(store.toppings[1]);
