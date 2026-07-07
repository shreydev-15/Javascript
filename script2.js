//Functions 

function testing (username){
    if(!username){
        console.log("Please provide a username");
        return; //This will exit the function if the username is not provided. It is important to use return here to prevent the rest of the code from executing.
    }   
    return `Welcome ${username}`;
}

console.log(testing(312))

function testing2(...num1){
    return num1;
}
console.log(testing2(1,2,3,4,5,6,7,8,9,10)); //This will return an array of all the numbers passed as arguments to the function. The ...num1 is called rest operator. It is used to collect all the remaining arguments passed to the function into an array.


const obj = {
    name: "Shreyash",
    age: 22,
    username: "shreyashrai",
}
function handleobj(anyobj){
    console.log(`The name is ${anyobj.name} and the age is ${anyobj.age}`);
}

handleobj(obj);


//*******************************************************************************************************/

// Var is global scope and can be re-declared and updated. It is function-scoped, which means it is accessible within the function it is declared in and any nested functions. It can lead to unexpected behavior if not used carefully, as it can be overwritten or accessed before it is declared.

// Let is block-scoped and can be updated but not re-declared. It is accessible only within the block it is declared in, which helps prevent accidental overwriting and makes it easier to manage variable scope.

// Const is block-scoped and cannot be updated or re-declared. It must be initialized at the time of declaration. It is used for variables that should not change throughout the program, providing a way to create immutable references.





(function chai(){
    console.log("This is an IIFE function");
})();

((name)=>{
    console.log(`This is ${name}'s IIFE function`);

})('Shreyash');


//******************************************* */

//For of loop

const map = new Map();
map.set("name", "Shreyash");
map.set("age", 22);
map.set("username", "shreyashrai");

for(const [key, value] of map){
    console.log(`${key} : ${value}`);
}

//For in loop

const object = {
    name: "Shreyash",
    age: 22,
    username: "shreyashrai",
}

for(const key in object){
    console.log(`${key} : ${object[key]}`);
}


//For each loop

const array = [
    {
        name: "Shreyash",
        age: 22,
        username: "shreyashrai"
    },
    {
        name: "John",
        age: 30,
        username: "john123"
    },
    {
        name: "Jane",
        age: 25,
        username: "jane456"
    },
    {
        name: "Bob",
        age: 35,
        username: "bob789"
    }
]

array.forEach((iteration)=>{
    console.log(iteration.username);
})


//Filter

const nums  = [1,2,3,4,5,6,7,8,9,10];

const even =  nums.filter((nums)=> nums % 2 === 0 )


console.log(even);

nums.forEach((num)=>{
    if(num%2===0){
        console.log(num);
        return num;
    }
    
})





