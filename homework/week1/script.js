console.log("javascript working!"); // Just to test. 

$(document).ready(function() {

  loadJSON();

  $("#refresh-button").click(function() {
    loadJSON();
  });
});

var loadJSON = function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 

    // $("#list").clear();

    var stories = response.data.children;
    
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $(elem).append("<p><a href= 'http://www.reddit.com" + story.permalink + "'>" + story.title + "</a></p>" + "<p>" + story.ups + " upvotes!" + "</p>");
      $("#list").append(elem);
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  });
}