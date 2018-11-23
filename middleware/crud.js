const fs = require('fs');

//config
const path = `public/post`;

module.exports = function(){
  
    function loadPostList(){
        var postList = fs.readdirSync(path);
        return postList;
    }
  
    function createPost(req, res){
        var title = req.body.title;
        var content = req.body.postContent;

        fs.writeFile(`${path}/${title}.txt`, content, 'utf8', function(err){
            res.redirect(301, '/');
        });
    }
    
    function readPost(req, res){
        
    }
    
    function updatePost(req, res){
        
    }
    
    function deletePost(req, res){
        
    }
};
