var http = require("http");

http.createServer(function(request, response){
    // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type' : 'text/plain'});

    //send the response body as Hello world!
    response.end("Hello world!\n");
}).listen(8081);

console.log("Sever running at http://127.0.0.1:8081/");