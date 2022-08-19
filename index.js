//1. function (block of code) that will run whenever the server receives an http request
let myhttp = require("http");
let myserver = myhttp.createServer(
//createServer uses the function to run when a request comes in
function( myrequest, myresponse){
  console.log(myrequest.url);

  let mytext;
  if(myrequest.url==="/hey"){
   mytext = "Well hello there";
  }else{
   mytext = "I don't know you!"
  }
mytext = mytext + "-Please help me...I am trapped in a Node.js server!";
  
  myresponse.writeHead(200,{"Content-Type":"text/plain"});
  myresponse.end(mytext + "\n");
}
  
);
//listen takes 2 arguments 1. tcp port # and 2. string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");
console.log("the machine has awakened");