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



