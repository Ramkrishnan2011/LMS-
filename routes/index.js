var express = require('express');
var router = express.Router();
var book=require('../model/books');
var mem=require('../model/members');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logadmin', { title: 'Express' });
});
router.post('/log', function(req, res, next) {
  if(req.body.uname=="admin" && req.body.pass=="123")
  {
  res.render('Welcome');
  }
});
router.get('/addbook',function(req,res,next){
  res.render('addbook')
})
router.get('/addmember',function(req,res,next){
  res.render('addmember')
})
router.get('/issue',function(req,res,next){
  res.render('issue')
})
router.post('/addb',function(req,res,next){
  var newbook=new book();
  newbook.bookid=req.body.bid;
  newbook.bookname=req.body.bname;
  newbook.author=req.body.bauth;
  newbook.noc=req.body.bcpy;
  newbook.save(function(err,result){
    if(err){console.log(err)}
    else
    res.send('bookadded')
  })
 
})
router.get('/viewbook',function(req,res,next){
  book.find(function(err,doc)
  {
    if(err)
    {
      console.log(err)
    }
    else
    {
      res.render('viewbook',{data:doc})
    }
  })
})
router.post('/addm',function(req,res,next){
  var newmem=new mem();
  newmem.mid=req.body.memid;
  newmem.mname=req.body.memname;
  
  newmem.save(function(err,result){
    if(err){console.log(err)}
    else
    res.send('memeber added')
  })
 
})

router.get('/viewmember',function(req,res,next){
  mem.find(function(err,doc)
  {
    if(err)
    {
      console.log(err)
    }
    else
    {
      res.render('viewmember',{data:doc})
    }
  })
})
module.exports = router;
