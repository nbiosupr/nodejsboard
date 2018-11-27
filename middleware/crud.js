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

    fs.writeFile(`${path}/${title}`, content, 'utf8', function(err){
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

exports.updatePostProcess = function(req, res){
    var postId = req.body.postid;
    var title = req.body.title;
    var content = req.body.content;
    
    if(postId!=title){
        fs.rename(`${path}/${postId}`, `${path}/${title}`, (err) =>{
            fs.writeFile(`${path}/${title}`, content, (err) => {
               if (err) console.log('in line 48(rename and write): ' + err);
                console.log('update post');
                res.redirect(301, '/');
            });
        });
    }else{
        fs.writeFile(`${path}/${postId}`, content, (err) => {
            if (err) console.log('in line 54(just write): ' + err);
            console.log('update post');
            res.redirect(301, '/');
        });
    }
    
    
};

exports.deletePost = function(req, res){
    /* 
    1. receive post id
    2. unlink
    3. redirect
    */
    var postId = req.body.postid;
    fs.unlink(`${path}/${postId}`,(err) => {
        if (err) console.log('file delete error in delete post: ' + err);
        console.log('delete file');
        res.redirect(301, '/'); 
    });
};

