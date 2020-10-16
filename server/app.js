let express = require('express')
let app = express()
let dotenv = require("dotenv");
dotenv.config()
let houses = require("./routers/houses")
let mongoose = require("mongoose");
let bodyparser = require("body-parser");
// start calling dem middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use("/houses",houses)
//end of initiating dem middlewares
app.get("/",(req,res)=>{
     res.send("<h1>hi all</h1>");
})
let port = process.env.PORT || process.env.MYPORT;
app.listen(port,()=>{
    console.log("server working and listining to port "+port)
})