let arr = [10,20,30];

//1.length - gives length of array
console.log(arr.length);

//2.push()- add an element in last bu push() and returns the length of updated array
console.log(arr);
arr.push(90);
console.log(arr);
arr.push("piyush")
console.log(arr);
let value = arr.push(55,65); // we can use multiple arguments
console.log(arr);
console.log(value);

//3.unshift()- adding an element at the front

arr.unshift(9,-2,0,8)
console.log(arr);

// custom codes

let brr = [3,8,9]

//a. add an element at front 

brr.push(30); //[3,8,9,30]

for(let i=brr.length-1;i>=1;i--){
    let temp=brr[i]
    brr[i]=brr[i-1]
    brr[i-1]=temp
}
console.log(brr);

//b.insert an element at given index

let idx= 1 , no = 10  //we need [3,10,8,9,30]

brr.push(no)  //[3,8,9,30,10]

//   i=1 - we stop b/c now element is in index 1
// [3,10,8,9,30] i=2
// [3,8,10,9,30] i=3
// [3,8,9,10,30] i=4

for(let i=brr.length-1;i>idx;i--){
    let temp=brr[i]
    brr[i]=brr[i-1]
    brr[i-1]=temp
}
console.log(brr);



//4. pop() - will remove the last element it return and the removed element

let removed_element = arr.pop();
console.log(arr);
console.log(removed_element);

//5. shift() - removes the first element and return it

console.log(arr.shift());
console.log(arr);

//6. slice - used to extract subarray a part of array ie contguous -subarray

//arr.slice(start index , ending index ) //ending index is exclusive means it is 
//not counted means not include element at ending index
//original array doesnt get affected

console.log(arr.slice(1,4))
console.log(arr);
console.log(arr.slice(1)) //it will strt from 1 and take all element if ending index not given


//7. splice(starting index, no. of elements to be deleted)
//deleted elements is modified by deleting desired elements
//splice can manipulate original array by removing the element
let deleted_elements= arr.splice(2,3)
console.log(deleted_elements);
console.log(arr);

//splice can also add by following
//arr.splice(starting index , no of elements to be deleted_elements, elements will take the place of deleted elements)
//after 2nd argument those elements are added in place of deleted elements
let del =arr.splice(1,2,11,12, 13)
console.log(arr);
console.log(del);


https://leetcode.com/problems/remove-duplicates-from-sorted-array/