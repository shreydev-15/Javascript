//Async functions

async function greet (){
    // throw "404 Not Found";
    return "Hello";
}

greet()
.then((result)=>{
    console.log("Promise resolved");
    console.log("Result: " + result);
})
.catch((err)=>{
    console.log("Promise rejected");
    console.log("Error: " + err);
})

let random = async function (){
    return 5;
}



//Async await

function number(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
        console.log("Random number generated: " + num);
        resolve();}, 3000)
    })
}

async function check(){
    await number()
    await number()
    await number()
}


// h1 = document.querySelector("h1");

// function colourchange(color, delay){
//     return new Promise((resolve, reject)=>{
//         let ranum = Math.floor(Math.random()*10)+1;
//         if(ranum>5){
//             reject("Color not changed");
//         }
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("Color changed");
//         }, delay);
        
//     })
// }

// async function change(){
//     await colourchange("red", 1000);
//     console.log("Red color changed");
//     await colourchange("green", 1000);
//     console.log("Green color changed");
//     await colourchange("blue", 1000);
//     console.log("Blue color changed");
// }



//Handling rejections in async await

h1 = document.querySelector("h1");

function colourchange(color, delay){
    return new Promise((resolve, reject)=>{
        let ranum = Math.floor(Math.random()*10)+1;
        if(ranum>5){
            reject("Color not changed");
        }
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
        }, delay);
        
    })
}

async function change(){
    try{
    await colourchange("red", 1000);
    console.log("Red color changed");
    await colourchange("green", 1000);
    console.log("Green color changed");
    await colourchange("blue", 1000);
    console.log("Blue color changed");
    }
    catch(err){
        console.log("Error: " + err);
    }
}


