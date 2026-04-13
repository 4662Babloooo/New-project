const http = require("http");

http.createServer((req, res) => {
  res.end("New Updated Backend Running 🚀");
}).listen(3000);
