// Require/import the HTTP module
var http = require("http");

// Define two ports to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses from PORTONE
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORTONE URL
  response.end("Nice job homie, it works!" + request.url);
}

// Create a generic function to handle requests and responses from PORTONE
function handleRequestTwo(request, response) {

    // Send the below string to the client when the user visits the PORTTWO URL
    response.end("This also works, but you still suck." + request.url);
  }

// creating two servers to handle our requests
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // callback to let us know the server is listening
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverOne.listen(PORTTWO, function() {

    console.log("Server listening on: http://localhost:" + PORTTWO);
  });
