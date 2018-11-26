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
        res.render('readpost.ejs', {postid : postId,
                                    title : postId,
                                    content : data});
    });
};

exports.updatePost = function(req, res){
    var postId = req.query.postid;
    fs.readFile(`${path}/${postId}`, (err, data)=>{
        res.render('editpost.ejs', { postid : postId,    //게시물 식별번호
                                     title : postId,     //게시물 제목
                                     content : data});   //게시물 내용
    });
    
};

exports.deletePost = function(req, res){
    
};

