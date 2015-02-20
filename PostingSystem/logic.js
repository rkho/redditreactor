$(document).ready(function(){
  // If 'Post' button is clicked

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
  })
});