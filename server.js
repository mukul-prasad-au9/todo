const express  = require("express");
const cors = require("cors")
const app = express();
const route = require("./routes/route")

const port = process.env.PORT|| 6700;

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname+"/public"))
app.set("views","./view")
app.set("view engine","ejs")

app.get("/health",(req,res)=>{
    res.send("health")
})
app.use("/",route)

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("server created")
})