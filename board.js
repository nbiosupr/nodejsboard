const fs = require('fs');
//callback
var loadPostList = function(){
  const path = `public/post/`;
  var postList = fs.readdirSync(path);

  return postList;
};

function writePost(title, content){
  //todo  
};
module.exports = loadPostList;

