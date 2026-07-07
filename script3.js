//call stack

function one (){
    return 1;
}
function two (){
    return one()+one();
}
function three (){
    let ans = two()+two();
    console.log(ans);
}

// Go to sources and breapoint on line 15 and see the callstack
three(); //This will call the function three which will call the function two which will call the function one. So the call stack will be like this: three -> two -> one -> one -> two -> one -> one. The final output will be 4


// Single threaded and javascript

setTimeout(()=>{
    console.log("This is a first delayed message");
}, 2000);

setTimeout(()=>{
    console.log("This is a second delayed message");
}, 1000);

console.log("This is a normal message");

// Javascript is single threaded which means it can only execute one task at a time. So the output will be:
// This is a normal message

// Settimeout is a web API which is provided by the browser. It is not part of javascript. So when the first setTimeout is called, it will be sent to the web API and the second setTimeout will also be sent to the web API. The web API will wait for 2 seconds and then it will push the first setTimeout to the callback queue. The event loop will check if the call stack is empty or not. If it is empty, then it will push the first setTimeout to the call stack and it will be executed. The same thing will happen for the second setTimeout. So the final output will be:
// This is a normal message
// This is a second delayed message
// This is a first delayed message




//Callback hell
// h1 = document.querySelector("h1");

// function colourchange(color, delay, nextcolor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextcolor) nextcolor();
//     }, delay);
// }

// colourchange("red", 1000, ()=>{
//     colourchange("green", 1000, ()=>{
//         colourchange("blue", 1000, ()=>{
//             colourchange("yellow", 1000, ()=>{
//                 colourchange("orange", 1000, ()=>{
//                     colourchange("pink", 1000, ()=>{
//                     });
//                 });
//             });
//         });
//     }); 
// });


// function savedb (data, success, failure){
//     let netspeed = Math.floor(Math.random()*10)+1;
//     if (netspeed>5) {
//        success();
//     } else {
//         failure();
//     }
// }

// savedb("Shrey", ()=>{
//     console.log("Data saved successfully");
//     savedb("Rai", ()=>{
//         console.log("Data 2 saved successfully");
//         savedb("Yash", ()=>{
//             console.log("Data 3 saved successfully");
//         }, ()=>{
//             console.log("Data 3 not saved");
//         });
//     }, 
//     ()=>{
//         console.log("Data not saved");
//     });
// }, 
// ()=>{
//     console.log("Data not saved");
// });



//Promises 
//The promise is a javascript object which represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Resolve = success, reject = failure


function savedb (data){
    return new Promise((resolve, reject)=>{
        let netspeed = Math.floor(Math.random()*10)+1;
        if (netspeed>5) {
            resolve("Data saved successfully");
        } else {
            reject("Data not saved");
        }

    })
}

savedb("Shrey")
.then((result)=>{
    console.log("Promise 1 resolved");
    console.log("Result: " + result);
    return savedb("Rai");
})
.then((result)=>{
    console.log("Promise 2 resolved");
    console.log("Result: " + result);
    return savedb("Yash");
})
.then((result)=>{
    console.log("Promise 3 resolved");
    console.log("Result: " + result);
})
.catch((error)=>{
    console.log("some Promise rejected");
    console.log("Error: " + error);
})




h1 = document.querySelector("h1");

function colourchange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        }, delay);
        
    })
}

colourchange("red", 1000)
.then(()=>{
    console.log("Red color changed");
    return colourchange("green", 1000);
})
.then(()=>{
    console.log("Green color changed");
    return colourchange("blue", 1000);
})
.then(()=>{
    console.log("Blue color changed");
})






