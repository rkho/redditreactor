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

Comment.prototype.send = function(){
  var comObj = new CommentObject();
  comObj.save({
    title: this.title,
    username: this.username,
    message: this.message,
    score: this.score,
    hidden: this.hidden,
  });
  CommentCollection.add(comObj);
};