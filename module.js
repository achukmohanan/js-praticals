// function achu(){
//     console.log("hello this function")
// }
// module.exports=achu;
const express = require('express')

const app =express();

app.get('/',(req,res)=>{
    res.send("weyvfewieusj43.oiy4.iyt54toi54ygio5yvw");

})
let a = ((req,res,next)=>{
    console.log("mid1")
    next()
})

let b =((req,res,next)=>{
    console.log("mid 2");
    next()
})

app.use('/home',(req,res,next)=>{
    res.send('this is home')
    console.log("home mid 1")
    next()
})

// app.use([a,b]);

app.use((err,req,res,next)=>{
    
    console.error('error is',err)
    res.status(500).send('ddgghghdd')

})




app.listen(3000,()=>console.log("http://localhost:3000"))