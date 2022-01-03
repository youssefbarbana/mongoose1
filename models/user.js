const mongoose=require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const schema =mongoose.schema;
const userSchema=new schema({
    name:string,
    email:{type:Boolean,unique:true},
    isAdmin:{type:Boolean,default:false}
})
const User=mongoose.model('User',userschema);
module.exports=User