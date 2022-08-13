const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello World</h1>");
});//forward slash is the root or homepage
//get function specifies for get requests
//send back  some info in the response function in the callback

app.get("/contact", function(req, res){
  res.send("Contact me at woodrowar23@gmail.com");
});
//"/contact" is the route

app.get("/about", function(req, res){
  res.send("My name is Arien Woodrow. I am a programmer.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>coffee</li><li>code</li><li>beer</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
//callback function to see if server is running
//bare bones of an express server listening on port 3000
//node server.js to start server in command line
//Control C to stop server
//server at localhost:3000 in the browser
