const fs = require('fs');

//config
const path = `public/post`;

exports.loadPostList = function(){
    var postList = fs.readdirSync(path);
    //console.log(postList);
    return postList;
};

exports.createPost = function(req, res){
    var title = req.body.title;
    var content = req.body.postContent;

    fs.writeFile(`${path}/${title}.txt`, content, 'utf8', function(err){
        res.redirect(301, '/');
    });
};

exports.readPost = function(req, res){
    var postId = req.query.postid;
    fs.readFile(`${path}/${postId}`, (err, data)=>{
        res.render('readpost.ejs', {title : postId,
                                   content : data});
    });
};

exports.updatePost = function(req, res){

};

exports.deletePost = function(req, res){
    
};

