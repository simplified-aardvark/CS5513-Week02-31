
//http module
const http = require("http");

//file system module promises
const fs = require("fs").promises;

//function to respond to requests
const requestListener = function(req, resp) {
  console.log(req.url);

  if (req.url === "/") {
    fs.readFile(__dirname + "/list_of_things.html")
      .then(
        contents => {
          resp.setHeader("Content-Type", "text/html; charset=UTF-8");
          resp.writeHead(200);
          resp.end(contents);
          
        }
      )
  } else {
    fs.readFile(__dirname + "/things.json")
      .then(
        contents => {
          resp.setHeader("Content-Type", "application/json; charset=UTF-8");
          resp.writeHead(200);
          resp.end(contents);
          
        }
      )
  }
}

const server = http.createServer(requestListener);

const host = "0.0.0.0";
const port = "8080";



server.listen(
  port,
  host,
  ()=> {
    console.log("I'm right here!");
  }
)


