const express= require("express");
const { get } = require("http");
const path = require("path");
const { v4 : uuid } = require("uuid");
uuid();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
// app.set(express.static(path.join(__dirname,"views")));

const comments = [
    {
        id : uuid(),
        username : "Ruchit",
        comment : "This is so funny movie"
    },

    {
        id : uuid(),
        username : "Vikram",
        comment : "This was not that great movie to be happy for"
    }, 

    {
        id : uuid(),
        username : "Tanay",
        comment : "Anyways the day went absolutely nice and fun to remember"
    }
]

app.get("/comments",(req,res)=>{
    res.render("comments", {comments});
})

app.get("/new_comments",(req,res)=>{
    res.render("new_comment");
})


app.post("/comments",(req,res)=>{
    const {username,comment} = req.body;
    comments.push({username : username,
        comment : `${comment}`,
        id : uuid()
    });
    res.redirect("comments");
})

app.get("/comments/:id",(req,res)=>{
    const {id} = req.params;

    for(let i of comments)
    {
        if(i.id===id)
        {
            res.render("show",{i : i});
        }
    }
})

app.get("/comments/:id/edit",(req,res)=>{
    const {id} = req.params;
    res.render("edit_comment",{id})
})

app.patch("/comments/:id",(req,res)=>{
    const {id} = req.params;
    console.log(req.body.comment)
    res.send("Everything went fine");
})

app.listen(3000,()=>{
    console.log("Server Running at Port 3000");
})