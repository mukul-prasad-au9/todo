const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/project",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("connection done"))
.catch((err)=>console.log(err))

var Userschema = new mongoose.Schema({
    title:String,
    task:String,
    progress:String
})

const UserSchema = mongoose.model("todo",Userschema);
module.exports = mongoose.model("todo")