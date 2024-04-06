if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
 };
const express = require("express")
const portfolio = express()
const port = process.env.PORT || 3000
const path = require("path")
const ejsMate = require("ejs-mate")

portfolio.use(express.json());

portfolio.use(express.urlencoded({extended:true}))
portfolio.set("view engine","ejs")
portfolio.set("views",path.join(__dirname,"views"))
portfolio.engine("ejs", ejsMate)


portfolio.get("/",(req,res)=>{
    res.render("home.ejs")
})

portfolio.get("/projects",(req,res)=>{
    res.render("projects.ejs")
})
portfolio.get("/skills",(req,res)=>{
    res.render("skills.ejs")
})
portfolio.get("/experiance",(req,res)=>{
    res.render("experiance.ejs")
})
portfolio.get("/contacts",(req,res)=>{
    res.render("contacts.ejs")
})
portfolio.get("/certification",(req,res)=>{
    res.render("certification.ejs")
})
portfolio.listen(port,()=>{
    console.log(`serving on port ${port}`)
})
