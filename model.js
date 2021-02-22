const mongoose = require("mongoose");
var schema = new mongoose.Schema({
    title:String,
    task:String,
    progress:Boolean
})

mongoose.model("todo",schema);
module.exports = mongoose.model("todo")