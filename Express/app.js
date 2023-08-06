const express = require("express");
const path = require("path");

const app = express();

// app.use((req,res)=>{
//     console.log("Port 3000 query Recieved");
//     res.send("Hello We recieved your request.! This is the response")
// })

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public")))

app.get("/",(req,res)=>{
    res.render("home.ejs")
    // console.log(__dirname);
})

app.get("/random",(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render("random",{rand : num});
})

app.get("/cats",(req,res)=>{
    const cats= ["monty","jennie","calis","arvy"]

    res.render("cats",{allCats : cats})
    // res.render("cats",{cats}) we can also pass the exact name of the variable
    // res.send("<h1>Meow meow cats</h1>")
})

app.get("/r/:subreddit/:postId",(req,res)=>{
    const {subreddit, postId} = req.params;
    // res.send(`Sending the response for ${subreddit} ${postId}`)
    res.render("subreddit",{subreddit : subreddit})
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    const { q } = req.query;
    if(!q)
    {
        res.send("No query passed")
    }
    res.send(`<h1>Search Result for : ${q}`)
})

app.listen(3000,()=>{
    console.log("Server Started at Port 3000")
})