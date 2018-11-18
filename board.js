const fs = require('fs');
//callback
var loadPostList = function(){
  const path = `public/post/`;
  var postList = fs.readdirSync(path);

  return postList;
};
module.exports = loadPostList;

