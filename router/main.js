const fs = require('fs');
const crud = require('../middleware/crud');

module.exports = function(app){
    app.get('/', function(req,res){
        res.render('index.ejs', {postList : crud.loadPostList()});
    });
    //Route for creating post
    app.get('/newpost', (req,res)=>{
        res.render('newpost.ejs');
    });
    app.post('/newpost', (req,res)=>{
        crud.createPost(req,res);
    });
    
    //Route for reading post
    app.get('/readpost', (req,res)=>{
        crud.readPost(req,res); 
    });
    
    //Route for updating post
    app.get('/updatepost', (req,res)=>{
        crud.updatePost(req,res);
    });
    app.post('/updatepost', (req,res)=>{
        
    });
};
