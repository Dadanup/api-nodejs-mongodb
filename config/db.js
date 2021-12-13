const mongoose = require('mongoose');
var DB_URI = "mongodb+srv://daniel:root@api-mongodb.onyfy.mongodb.net/apiDatabase?retryWrites=true&w=majority";

module.exports=()=>{
    const connect=()=>{
        mongoose.connect(
            DB_URI, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            },(err)=>{
                if(err){
                    console.log('DB:ERROR')
                }else{
                    console.log('CONECCION CORRECTA')
                }
            }
        );
    }
    connect();
}