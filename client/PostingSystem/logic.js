$(document).ready(function(){
  // If 'Post' button is clicked

  var Message = Parse.Object.extend('Message');
  var MessageCollection = Parse.Collection.extend({
    model: Message
  });

  var CommentObject = Parse.Object.extend('CommentObject');
  var CommentCollection = Parse.Collection.extend({
    model: CommentObject
  });

  $('.newPost').on('click', function(event){
    // Display a Bootstrap Modal that contains the prompt to submit a new text post with a title, username, and message.
  });

  $('.submit').on('click', function(event){
    // This is the event for when the submit button is clicked on a post.
    console.log('yeah!!!')
    var title = $('.title').text();
    var username = $('.username').text();
    var message = $('.message').text();

    var currentPost = new Post(title, username, message);

    // Post to the server
    currentPost.send();
  });



  // COMMENTING //

  // $('.comment').on('click', function(event){
  //   // Display a Bootstrap Modal that contains the prompt to sobmit a comment
  // });

  // $('.commentSubmit').on('click', function(event){
  //   var title = $('.title').text();
  //   var username = $('.username').text();
  //   var message = $('.message').text();

  //   var currentComment = new Comment(title, username, message);

  //   // Post to the server
  //   currentComment.send();
  // });


  // DISPLAYS POSTS ON INDEX!! //

  var getPosts = function(){
    var arr = Message.Collection.models;
    _.each(arr, function(model){
      var attributes = model.attributes;
      $('.box').append('<td align="center" valign="top" width="70px">
        <img src="img/sponsored.png" width="27" /></td>
        <td width="75" valign="top"><img src="img/thumb.jpg" width="70" height="70" /></td>
        <td valign="top"><span class="title"><a href="#">' + attributes.title + '</a></span><span class="source">(i.imgur.com)</span><br />
        <span class="date">submitted 3 hours ago by <a href="#">' + attributes.username + '</a></span><span class="branch"> to <a href="#">/r/pics</a></span><br />
        <span class="comments"><a href="#">267 comments</a></span><span class="share"><a href="#">share</a></span></td>');
    });
  };
});//

