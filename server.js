const http = require("http");

http.createServer((req, res) => {
  res.end("Washeem Your Bacekend is running 🚀");
}).listen(3000);
