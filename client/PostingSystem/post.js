var Post = function(title, username, message){
  // Submitting should be easy: A modal should pop up when clicking on the Reddit post
  this.title = title;
  this.username = username;
  this.message = message;
  this.score = 0;
};

Post.prototype.send = function(){
  // Sends the post to the server.
  // If successful, alert it!
  var msgObj = new Message();
  msgObj.save({
    title: this.title,
    username: this.username,
    message: this.username,
    score: this.score
  });
  MessageCollection.add(msgObj);
};