const mongoose=require('mongoose');
const dbconnect=async()=>{
    try{
        let result=await mongoose.connect('mongodb+srv://youssef:2485550100@cluster0.8rser.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("database connected");

    }catch(error){
        console.log(error)
    }
};
module.exports=dbconnect;
