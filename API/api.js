
// const req = new XMLHttpRequest()

// req.onload = function() {
//     console.log("DATA Loaded!!")
//     console.log(JSON.parse(this.responseText));
// }

// req.onerror = function() {
//     console.log("Error!!")
//     console.log(this);
// }

// req.open("GET","https://swapi.dev/api/people/5/");
// req.send();
// ====================================================================================
// const obj = {
//     name : "Tripti",
//     age : 23,
//     girlfriends : ["Aishwarya","Tripit","Rinki","Sonali"],
// }

// let data = JSON.stringify(obj);

// // {"name":"Ruchit","age":22,"girlfriends":["Aishwarya","Tripit","Rinki","Sonali"]}

// let normal_data = JSON.parse(data);

// let nameText = document.querySelector(".name");
// let ageText = document.querySelector(".age");

// nameText.innerText = normal_data["name"];
// ageText.innerText = normal_data["age"];


// ===========================================================================================

// import axios from 'axios';

// axios.get("https://swapi.dev/api/people/5/").then((res)=>{console.log(res)});

// const getStarWarsData = async (id)=>{
//     let response = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log("Data Loaded..!!");
//     console.log(response.data);
// }

// getStarWarsData(1)   
//     .then(()=>{
//         getStarWarsData(2);
//     })
//     .then(()=>{
//         getStarWarsData(3);
//     })

const getDadJokes = async ()=>{

    const config = {headers : {Accept : "application/json"}}
    const response = await axios.get("https://icanhazdadjoke.com/",config)
    return response.data.joke;
}

const btn = document.querySelector(".joke-btn")
const ul = document.querySelector(".joke-list")

btn.onclick = function() {
    const li = document.createElement("li")
    const new_joke = getDadJokes().then((data)=>{
        console.log(data);
        li.innerText = data;
        ul.appendChild(li);
    });
    
}   