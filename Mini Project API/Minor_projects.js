let url = "https://catfact.ninja/fact"
let url2 = "https://dog.ceo/api/breeds/image/random"


let btn = document.querySelector("#bt");
btn.addEventListener("click", async ()=>{
    let fact = await getfacts();
    // console.log(fact)
    let p = document.querySelector("#result");
    p.innerHTML = fact;
})

async function getfacts(){
    try{
    let res = await axios.get(url)
    return res.data.fact
    }
    catch(err){
        console.log("Error is " + err)
        return "No fact found"
    }

    console.log("End of the function")
}


let btn2 = document.querySelector("#dog-btn");
btn2.addEventListener("click", async ()=>{
    let dogimg = await getdogimg();
    let img = document.querySelector("#dog-image");
    img.setAttribute("src", dogimg);
    console.log(dogimg)
})
async function getdogimg(){
    try{
    let res2 =await axios.get(url2)
    return res2.data.message
    }
    catch(err2){
        console.log("Error is " + err2)
        return "No dog image found"
    }
}


//Headers
let url3 = "https://icanhazdadjoke.com"
async function getjoke(){
    try{
        const config = {
           headers: {
            Accept: "application/json"
           } 
        }
        let res3 = await axios.get(url3, config)
        console.log("Joke is " + res3.data.joke)
    }
    catch(err3){
        console.log("Error is " + err3)
    }
}


//Query strings


let btn3 = document.querySelector("#uni-btn");
btn3.addEventListener("click", async ()=>{
    let country = document.querySelector("#country-input").value;
    console.log("Country is " + country)
    let uni = await getuni(country);
    show(uni);
})

function show(uni){
    let list = document.querySelector("#uni-list");
    list.innerHTML = "";
    for(col of uni){
        console.log(col.name)
        let li = document.createElement("li");
        li.innerHTML = col.name;
        list.appendChild(li);
    }
}


let url4 = "http://universities.hipolabs.com/search?name="

async function getuni(country){
    try{
        let res5 = await axios.get(url4 + country)
        return res5.data
    }
    catch(err4){
        console.log("Error is " + err4)
        return []
    } 
}

