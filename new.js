const express = require('express')
const app = express()
const path =  require('path')

// middleware to parse data
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/submit',(req,res)=>{
    console.log(req.body)
    res.send(`Received  ${req.body.username}and ${req.body.email} `)
})





app.listen(4000,()=>console.log("http://localhost:4000"))
