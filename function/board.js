const fs = require('fs');
//callback
exports.loadPostList = function(){
  const path = `public/post/`;1
  var postList = fs.readdirSync(path);

  return postList;
};
