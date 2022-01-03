const express=require('express')
const app=express()
const dbconnect=require("./dbconnect")

dbconnect();
app.use(express.json());
app.listen("/User",require("routes/user"))
const port=5000
app.listen(port,(err)=>err?console.log(err):console.log('server iiiiiiis running'))