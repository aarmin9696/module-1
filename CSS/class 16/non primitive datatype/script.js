//non primitive data types - 1) array    2) object


// 1). array - used to store collection of values

//declaration of array 

// let arr_name = new Array();
// or
// let arr_name=[];

let todo=["prblm","assignment","class"]

//accessing elements in array
//arr[0]

console.log(todo[0]);
console.log(todo[1]);
console.log(todo[2]);

//print the array

console.log(todo);

//length of array arr.length

console.log(todo.length);

//add new item inside array

todo[3] = "sleep"
console.log(todo);

//if we add in existing index it replaces the element

todo[1]="bore"
console.log(todo);

//we can store anything inside array

//for last element

console.log(todo[todo.length-1]);

//OR todo.at(-1)

console.log(todo.at(1));

//stack -lifo    queue - fifo

// push  - appends/add an element to end of array

let arr =[1,2]
arr.push(3)
console.log(arr);
// pop - takes an element from end
arr.pop();
console.log(arr);

//shift  - removes the first element
arr.shift();
console.log(arr);


//unshift - add an element in begning
arr.unshift(0)
console.log(arr);


//shift and unshift are slower while push and pop faster
//b/c arrays nneds to be rearranged in shift and unshift


//to iterate loop is used

for(let i=0;i<arr.length;i++){
    console.log(arr);
}

arr[96]=(96)
console.log(arr.length);


//copying array - pass by reference happens in non-primitive element


let brr = arr

console.log(arr);
console.log(brr);

brr.push(100)
console.log(arr); //in this also 100 is pushed as they both are refering to same item
console.log(brr);

//while in primitive pass by value points to diff memory location

let a=10
let b=a
console.log(a,b);
a=20
console.log(a,b);

//methods in array

//1.concat() - joins two or more arrays and returns the element
let array = arr.concat(todo)
console.log(array);

//2. indexof() - returns the first occurence of index or returns -1 if not present
console.log(array.indexOf(2))

//3. lastondexof() - gives last index
console.log(array.lastIndexOf(2))

//4. find( ) - returns the first element that you want to find
let nums = [1,5,8,4]
function check(nums){
    return nums>10
}
console.log(nums.find(check))

//5. splice() - use to modify array(add, remove, replace)
//arr.splice(start,deleteCount, item1 item2...)
// returns the deleted element
// does change the original array

let languages=["js","css","html"]
console.log(languages.splice(2,1,"java","node","react")); //2 is starting index of deletion and 1 is
console.log(languages)


//6. slice() - returns the deleted array
//end index is exclusive
//gives portion of array
//it doesnt effect the original array

//arr.slice(start,end)

console.log(languages.slice(1,3)) //3 is exclusive means not deleted
console.log(languages)