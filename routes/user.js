const express=require('express');
const usercontroller=require('../controllers/usercontroller');
const router=express.Router();

router.get('/users',(req,res)=>{
    usercontroller.getAllusers(req,res);


})
// router.get('/user/:id',(req,res)=>{
//     usercontroller.getUser(req,res);

// })

module.exports=router