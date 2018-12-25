var mongoose=require('mongoose');
var schema=mongoose.Schema;


var bookschema=new schema({
    bookid:{type:String,required:true,unique:true},
    bookname:{type:String,required:true},
    author:{type:String,required:true},
    noc:{type:String,required:true}
})
module.exports=mongoose.model('books',bookschema)