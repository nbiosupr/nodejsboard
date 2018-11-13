const fs = require('fs');

module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.html');
  });
  app.get('/newpost', (req,res)=>{
    res.render('newpost.html');
  });
  app.post('/newpost', (req,res)=>{
    var title = req.body.title;
    var content = req.body.postContent;

    fs.writeFile(`/public/post/${title}.txt`, content, 'utf8', function(err){
      // response.writeHead(302, {Location: `/?id=${title}`});
      // response.end();
      console.log('title: ' + title);
      console.log('content: ' + content);
    });


  });
}
