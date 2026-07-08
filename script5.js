//JSON.parse(data) it converts the string into a javascript object
//JSON.stringify(data) it converts the javascript object into a string

let url = "https://catfact.ninja/fact"


// fetch(url)
// .then((res)=>{
//     console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log("Data 1 is ", data.fact)
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res)
//     return res.json()
// })
// .then((data2)=>{
//     console.log("Data 2 is ", data2.fact)
// })
// .catch((err)=>{
//     console.log(err)
// })



// Using async await


// async function getdata(){
//     try{
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log("Data 1 is ", data.fact)

//     let res2 = await fetch(url)
//     let data2 = await res2.json()
//     console.log("Data 2 is ", data2.fact)
//     }
//     catch(err){
//         console.log("Error is ", err)
//     }

//     console.log("End of the function")
// }


// Using axios 

async function getfacts(){
    try{
    let res = await axios.get(url)
    console.log("Fact is ", res.data.fact)

    let res2 = await axios.get(url)
    console.log("Fact is ", res2.data.fact)
    }
    catch(err){
        console.log("Error is ", err)
    }

    console.log("End of the function")
}








