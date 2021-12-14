const mongoose = require('mongoose');
//CONEXION EN CASA
var DB_URI = "mongodb+srv://daniel:root@api-mongodb.onyfy.mongodb.net/apiDatabase?retryWrites=true&w=majority";
//CONEXION EN TRABAJO
// var DB_URI = "mongodb+srv://nkDaniel:root@api-mongodb.onyfy.mongodb.net/apiDatabase?retryWrites=true&w=majority";
module.exports=()=>{
    const connect=()=>{
        mongoose.connect(
            DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },(err)=>{
                if(err){
                    console.log('DB:ERROR: '+ err)
                }else{
                    console.log('CONECCION CORRECTA')
                }
            }
        );
    }
    connect();
    
}
