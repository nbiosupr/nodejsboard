module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.html')
  });
  app.get('/newpost', (req,res)=>{
    res.render('newpost.html')
  });
  app.put('/newpost', (req,res)=>{
    //todo
  });
}
