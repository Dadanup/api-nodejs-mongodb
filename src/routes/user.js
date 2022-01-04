const express=require('express');
const router=express.Router();
const controller=require('../controllers/user')
const path='user';
    // RUTA USUARIOS 
router.get(
    `/${path}`,
    controller.getDAta
);
router.post(
    `/${path}`,
    controller.insertData
)

module.exports=router