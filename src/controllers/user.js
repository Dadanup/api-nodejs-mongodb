const { models } = require('mongoose');
const model=require('../../models/users');

exports.getDAta=(req,res)=>{
    model.find({
        // este apartado puede contener los queries
    },(err,data)=>{
        res.send({
        data
        })
    });
}

exports.insertData=(req,res)=>{
    const data = req.body
    //envio de informacion
    // res.send({data})
    //retorno de info hacia mongo
    model.create(data,(err,docs)=>{
        if(err){
            res.send({error: 'Error'},422)
        }else{
            res.send({data:docs})

        }

    });
  
}

