const express=require('express');
const app=express();

// IMPORTACION DE RUTAS
const userRoutes=require('./src/routes/user')
const itemsRoutes=require('./src/routes/items')

// BASE DE DATOS
const initDB=require('./config/db')

const port=3001;

// app.get('/',(req,res)=>{
//     res.send('<h1>HELLO WORLD</h1>')
// })
app.use(userRoutes)
app.use(itemsRoutes)

app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
})

initDB();