const express=require('express');
const res = require('express/lib/response');
const app=express();


const port=3001;

app.get('/',(req,res)=>{
    res.send('<h1>HELLO WORLD</h1>')
})

app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
})

