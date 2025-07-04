// server.mjs
const http=require("http"); //trying to import modules

const server = http.createServer((req, res) => { //async=callback function
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('<h1>Hello World!</h1>');//listens this as text only not html
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});
//callback function comes and kept aside and is always call when called using local sever
//when request is made it trying to write and setting status code and content type
//altimatly end response by generating a string hello world




// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
//when called this code a process is created and above port and all is details that node needs


// run with `node server.mjs`
