const express =require("express")
const { mongo } = require("mongoose")
const router = express.Router()
const user = require("../db")



router.get("/todo",(req,res)=>{
    user.find({},(err,data)=>{
        if(err) throw err;
        res.render("todo",{task:data})
    })
})

router.get("/todo/:id",(req,res)=>{
    let id = req.params.id
    user.find({_id:mongo.ObjectID(id)},(err,data)=>{
        res.send(data)
    })
})

router.post('/todo',(req,res)=>{
    user.create({
        title:req.body.title,
        task:req.body.task,
        progress:"ongoing"
    },(err,data)=>{
        if(err) throw err;
        res.redirect("/todo")
    })
    
 })

 router.put("/edit",(req,res)=>{
     console.log(req.body)
     var id = req.body.id
     var taskk = req.body.task
     var title = req.body.title
    user.updateOne({_id:id},{$set:{"task":taskk,"title":title}},(err,data)=>{
        console.log(data,"data")
        res.send("edit")
    })
 })


module.exports = router; 