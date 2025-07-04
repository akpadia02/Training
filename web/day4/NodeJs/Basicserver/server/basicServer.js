// // server.mjs
// const http=require("http"); //trying to import modules

// const server = http.createServer((req, res) => { //async=callback function
// //   res.writeHead(200, { 'Content-Type': 'text/plain' });
// //   res.end('<h1>Hello World!</h1>');//listens this as text only not html
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1>Hello World!</h1>');
// });
// //callback function comes and kept aside and is always call when called using local sever
// //when request is made it trying to write and setting status code and content type
// //altimatly end response by generating a string hello world




// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });
// //when called this code a process is created and above port and all is details that node needs


// // run with `node server.mjs`



//for every request only this method is called
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("../client/Index.html", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/client.js") {
    fs.readFile("../client/client.js", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  }else if(req.url == '/styles.css'){
    fs.readFile("../client/styles.css", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  }else if(req.url == '/products'){
    var products=[{id:1,name:"TV",price:4000},
      {id:2,name:"Laptop",price:30000},
      {id:3,name:"Bottle",price:4040},
      {id:4,name:"Mobile",price:40500},
      {id:5,name:"PC",price:40090},
    ];
    res.writeHead(200,{ "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});