const fs = require('fs');
const func = require('../function/board');

module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.ejs', {postList : func.loadPostList()});
  });
  app.get('/newpost', (req,res)=>{
    res.render('newpost.ejs');
  });
  app.post('/newpost', (req,res)=>{
    var title = req.body.title;
    var content = req.body.postContent;

    fs.writeFile(`public/post/${title}.txt`, content, 'utf8', function(err){
      console.log('title: ' + title);
      console.log('content: ' + content);

      res.writeHead(200);
      res.end('success');
    });


  });
};
