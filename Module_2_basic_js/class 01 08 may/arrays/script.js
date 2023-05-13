// arrays - colloction of multiple datatypes (multiple in js only)
//we can store any amount of data in it

let arr = ["piyush",20,22,26];

// zero based indexing - index starts from 0

//1. accessing the element

console.log(arr[1],arr[0]); //22 piyush printed

//2.
console.log(typeof arr[0]); //string

//3. length of array
let n=arr.length;
console.log(n); //4

//4. if we try to access an index that is not present it will give undefined
console.log(arr[50]);//undefined

// Q: sum of all digits of no.


//last digit
// n=12 =>n%10 =>2
//12/10=>1.2=>1
//first digit
//n=1=>n%10=>1
//1/10=>0.1=>0

let z=1234567;
let sum =0;
while(z !== 0){
    let digit= z%10;
    sum += digit;
    z=parseInt(z/10);
}
console.log(sum);


//q. check palindrome of no.


let e=123321;
//storing it in another variable
let w= e;

let f=0;
while(e!=0){
    f=(f*10 + e%10)
    e=parseInt(e/10)
}
if(f==w){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

//by array method

let g=192
let brr = [];
let idx=0;
while(g!=0){
    brr[idx]=g%10;
    idx++;
    g=parseInt(g/10);
}
let i=0 , j=brr.length-1;
while(i<j){
    if(brr[i]!==brr[j])
}




