"use strict"; //Treat all Js as new version
//Undefined is a variable that has not been assigned a value. It is of type undefined.
//Null is an assignment value. It can be assigned to a variable as a representation of no value. It is of type object
let name  = "Shreyash";
let name2 = Number(name); 
console.log(typeof name2); //number
console.log(typeof name);
console.log(typeof undefined); //undefined
console.log(typeof null); //null is of type object. 

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

//If string is at first then it will be converted to string. If number is at first then it will be converted to number.
let a = 33 + 22 + "33";
let b = "33" + 33 + 22;
console.log(a); //5533
console.log(typeof a); //string
console.log(b); //333322
console.log(typeof b); //string

//++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap in JavaScript
// Stack is used for static memory allocation and Heap is used for dynamic memory allocation. 
// Primitive data types are stored in stack and non-primitive data types are stored in heap. 
// Primitive data types are number, string, boolean, null, undefined, symbol. Non-primitive data types are object, array, function.
// Whenever we put something in stack we get a copy of it. Whenever we put something in heap we get a reference of it(Changed in original for non-primitive data types).

let userone = {
    name: "Shreyash",
    age: 22,
    city: "Noida"
}
let usertwo = userone; //Here we are copying the reference of userone to usertwo. So both userone and usertwo are pointing to the same object in heap.
usertwo.city = "Delhi"; //Here we are changing the city property of usertwo. But since userone and usertwo are pointing to the same object in heap, the city property of userone will also change.
console.log(userone); //{name: "Shreyash", age: 22, city: "Delhi"}
console.log(usertwo); //{name: "Shreyash", age: 22, city: "Delhi"}

console.log(`Hello my name is ${name}`);

//********************************************************
//String methods
const str = "  Hello World  ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.substring(0,4)); //Hello World
console.log(str.slice(0,4)); //Hello
console.log(str.split(" ")); //["Hello", "World"] separator = " "
console.log(str.replace("World", "JavaScript")); //Hello JavaScript
console.log(str.trim()); //Hello World

//******************************************************************* */
const num  = new Number(330.00);
console.log(num); //Number {330}
console.log(num.toFixed(2)); //330.00
console.log(num.toString().length); //3
const num2 = 33.75789388374;
console.log(num2.toPrecision(5)); //33.758
const num3 = 1000000;
console.log(num3.toLocaleString()); //1,000,000
console.log(num3.toLocaleString('en-IN')); //10,00,000 

//Number.MAX_VALUE => 1.7976931348623157e+308 maximum representable number in JavaScript
//Number.MIN_VALUE => 5e-324 minimum representable number in JavaScript
//Number.POSITIVE_INFINITY => Infinity
//Number.NEGATIVE_INFINITY => -Infinity
//Number.MIN_SAFE_INTEGER => -(2^53 - 1) minimum safe integer in JavaScript
//Number.MAX_SAFE_INTEGER => 2^53 - 1 maximum safe integer in JavaScript


console.log(Math); //Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object. It is a static object. We cannot create an instance of Math. We can only use its properties and methods.
console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-5)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.8)); //4
console.log(Math.round(4.5)); //5

console.log(Math.random()); //0.0 to 1.0 (Important for games and random number generation)
console.log(Math.random() * 100); //0.0 to 100.0
console.log(Math.floor(Math.random() * 100)); //0 to 99

const max = 30;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //10 to 30 (Important for games and random number generation)


//************************************************************************** */
let date = new Date();
console.log(date); //2026-05-21T06:25:57.763Z
console.log(date.toString()); //Thu May 21 2026 11:55:57 GMT+0530 (India Standard Time)
console.log(date.getFullYear()); //2026
console.log(date.getMonth()); //4 (0-based index for months)
console.log(date.getDate()); //21
console.log(date.toDateString); //function toDateString() { [native code] }
console.log(date.toDateString()); //Thu May 21 2026

let createdDate = new Date("01-14-2020"); //MM-DD-YYYY format. If we use DD-MM-YYYY format then it will be treated as invalid date.
console.log(createdDate.toLocaleString()); //1/14/2020, 12:00:00 AM

console.log(date.toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    })); //Thursday, 21 May 2026


/******************************************************* */
//Arrays

const arr = [1, 2, 3, 4, 5];
const arr2 = new Array("Hello", "World", "JavaScript");
console.log(arr[0]); //1
console.log(arr2[0]); //Hello

arr.push(6); //Adds an element at the end of the array
arr.unshift(0); //Adds an element at the beginning of the array and shifts the rest
arr.pop(); //Removes the last element of the array
arr.shift(); //Removes the first element of the array and shifts the rest
const newarr = arr.join(" "); //Joins the elements of the array into a string with a separator
console.log(newarr);

const arr3 = [1, 2, 3, 4, 5];
const myarr1 = arr3.slice(0, 3); //Returns a new array with the selected elements. It does not modify the original array.
const myarr2 = arr3.splice(0, 3); //Returns the removed elements. It modifies the original array.
console.log(myarr1);
console.log(myarr2);
console.log(arr3); //Original array is modified by splice but not by slice

//Merge two arrays
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
// arr5.push(arr4); //This will add arr4 as an element in arr5. So arr5 will become [4, 5, 6, [1, 2, 3]]
// console.log(arr5);
const arr6 = arr4.concat(arr5);
console.log(arr6); //This will merge arr4 and arr5. So arr6 will become [1, 2, 3, 4, 5, 6,]

const newarrr = [...arr4, ...arr5]; //This will also merge arr4 and arr5. So newarr will become [1, 2, 3, 4, 5, 6,]
console.log(newarrr);

const arr7 = [1,2,3,4,[4,4,5,6,8,[7,8,9]],5,6];
const flatarr = arr7.flat(Infinity); //This will flatten the array. So flatarr will become [1,2,3,4,4,4,5,6,8,7,8,9,5,6];
console.log(flatarr);

console.log(Array.isArray("Shreyash"))
console.log(Array.from("Shreyash")) //This will convert the string into an array of characters. So it will become ["S", "h", "r", "e", "y", "a", "s", "h"]

console.log(Array.from({name: "Shreyash", age: 22})); //Because Array.from() expects an array-like object or an iterable object

console.log(Object.keys({name: "Shreyash", age: 22})); //This will return an array of the keys of the object. So it will become ["name", "age"]
console.log(Object.values({name: "Shreyash", age: 22})); //This will return an array of the values of the object. So it will become ["Shreyash", 22]

let score1  = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //This will create an array from the given arguments. So it will become [100, 200, 300]

//**********************************************************************
//Objects 
const obj = {
    name: "Shreyash",
    "full name": "Shreyash Rai",
    age: 22,
    [mySym]: "key1",
    city: "Noida",
    isLoggedIn: true,
}
console.log(obj.name); //Shreyash
console.log(obj["age"]); //22
console.log(obj["full name"]); //Shreyash Rai

// const mySym = Symbol("key1");

// console.log(obj[mySym]); //key1
obj.city = "Delhi"; //This will change the city property of the object to Delhi
Object.freeze(obj); //This will freeze the object. So we cannot change any property of the object after this.

obj.greeting = function(){
    console.log(`Hello my name is ${this.name}`);
}
console.log(obj.greeting()); //function greeting() { console.log(`Hello my name is ${this.name}`); }








//******************************************************************** */
//Object de structure and JSON API


course ={
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseInstructor: "Shreyash Rai",
}
course.courseInstructor = "Shreyash Rai"; //Usually a common method to call a property
const {courseInstructor: instructor} = course; //Object de structure. It is a way to extract properties from an object and assign them to variables. It is a more concise way to call a property.
console.log(instructor); //Shreyash Rai



//JSON API (JSON formator to simplify the data transfer between client and server)
// {
//     "name": "Shreyash",
//     "age": 22,
//     "city": "Noida",
//     "isLoggedIn": true,
// }

//Functions 

function testing (username){
    if(!username){
        console.log("Please provide a username");
        return; //This will exit the function if the username is not provided. It is important to use return here to prevent the rest of the code from executing.
    }   
    console.log(`Hello ${username}`);
}

console.log(testing(312))


