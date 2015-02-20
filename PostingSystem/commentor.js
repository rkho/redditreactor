var Comment = function(){
  Post.call(title, username, message);

  // Hidden posts aren't seen
  this.hidden = false;
  while (this.score <= -5){
    this.hidden = true;
  }

};

Comment.prototype = Object.create(Post.prototype);
Comment.prototype.constructor = Comment;