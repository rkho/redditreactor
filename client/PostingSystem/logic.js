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
    var title = $('.title').text();
    var username = $('.username').text();
    var message = $('.message').text();

    var currentPost = new Post(title, username, message);

    // Post to the server
    currentPost.send();
  });



  // COMMENTING //

  $('.comment').on('click', function(event){
    // Display a Bootstrap Modal that contains the prompt to sobmit a comment
  });

  $('.commentSubmit').on('click', function(event){
    var title = $('.title').text();
    var username = $('.username').text();
    var message = $('.message').text();

    var currentComment = new Comment(title, username, message);

    // Post to the server
    currentComment.send();
  });
});