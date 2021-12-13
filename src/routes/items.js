const express=require('express');
const router=express.Router();
const controller=require('../controllers/items')
const path='items';
    // RUTA USUARIOS 
router.get(
    `/${path}`,
    controller.getDAta
);

module.exports=router