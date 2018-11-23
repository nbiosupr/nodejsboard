const fs = require('fs');
const crud = require('../function/crud');

module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.ejs', {postList : crud.loadPostList()});
  });
  app.get('/newpost', (req,res)=>{
    res.render('newpost.ejs');
  });
  app.post('/newpost', (req,res)=>{
    crud.createPost(req,res);
  });
};
