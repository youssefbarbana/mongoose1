const express=require("express");
const userRouter=express.Router();
const User=require("../models/user")
//post a new user
userRouter.post('add',async(req,res)=>{
    try {
        const newUser=new User(req.body);
        let result=await newUser.save();
        res.send({user:result,msg:"user added succesfully"})
    } catch (error) {
        console.log(error)
    }
})


//get all users
userRouter.get("/",async(req,res)=>{
    try {
        let result=await User.find();
        res.send({users:result,msg:"all users"});
    } catch (error) {
        console.log(error)
    }
})


//get user by id
userRouter.get("/:id",async(req,res)=>{
    try {
        let result=await User.findById({_id:req.params.id});
        res.send({user:result,msg:"user"});
    } catch (error) {
        console.log(error) 
    }
})


//delete user by id
userRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await User.findByIdAndDelete({_id:req.params.id});
        res.send({users:result,msg:"user deleted"});
    } catch (error) {
        console.log(error)
    }
})

//update user
userRouter.put("/:id",async(req,res)=>{
    try {
        let result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({users:result,msg:"user updated"});
    } catch (error) {
        console.log(error)
    }
})
module.exports=userRouter;