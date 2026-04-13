const http = require("http");

http.createServer((req, res) => {
  res.end("Backend Running 🚀");
}).listen(3000);
