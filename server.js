const express=require('express');
const app=express();
// IMPORTACION DE RUTAS
const userRoutes=require('./src/routes/user')
const itemsRoutes=require('./src/routes/items')
const uploadRoutes=require('./src/routes/upload')
//Parseo si es un json
app.use(express.json())

//Parseo si es un application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}));

// BASE DE DATOS
const initDB=require('./config/db')

const port=3001;


app.use(userRoutes)
app.use(itemsRoutes)
app.use(uploadRoutes)

app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
})

initDB();