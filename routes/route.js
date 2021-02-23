const express =require("express")
const router = express.Router()
const user = require("../db")



router.get("/todo",(req,res)=>{
    user.find({},(err,data)=>{
        if(err) throw err;
        res.render("todo",{task:data})
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

module.exports = router; 