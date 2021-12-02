const express = require('express')
const app = express();
const drinks = require('./models/drinks')
const food = require('./models/food')

var port = 5000;

app.get("/",(req,res)=>{
    
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks',(req,res)=>
{

    res.render("index.ejs", {drinks, food})
})

app.get('/drinks/:id',(req,res)=>
{
 const drink = drinks[req.params.id];
 res.render('show.ejs',{drink:drink})
})

app.get('/food/:id',(req,res)=>
{
 const item = food[req.params.id];
 res.render('showFood.ejs',{item:item})
})

app.listen(port, ()=>{console.log("port is running on port " + port)})