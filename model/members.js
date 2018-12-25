var mongoose=require('mongoose');
var schema=mongoose.Schema;


var memberschema=new schema({
    mid:{type:String,required:true,unique:true},
    mname:{type:String,required:true}
})
module.exports=mongoose.model('members',memberschema)