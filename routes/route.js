const user = require("../model")
const express =require("express")
const router = express.Router()

task=[{
    title:"todo",
    todo:"we have to do it",
    progress:"ongoing"
},
{
    title:"todo",
    todo:"we have to do it",
    progress:"ongoing"
},
{
    title:"todo",
    todo:"we have to do it",
    progress:"completed"
},
{
    title:"todo",
    todo:"we have to do it",
    progress:"completed"
}
]

router.get("/todo",(req,res)=>{
    let color = "primary";
    res.render("todo",{task,color})
})



module.exports = router; 