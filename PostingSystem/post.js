var Post = function(title, username, message){
  // Submitting should be easy: A modal should pop up when clicking on the Reddit post
  this.title = title;
  this.username = username;
  this.message = message;
  this.score = 0;
};

Post.prototype.toHtml = function(){
  // Convets the post to HTML format
};

Post.prototype.send = function(){
  // Sends the post to the server.
};