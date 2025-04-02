const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.url === "/get-secret-data")
    {
        res.end("There is no secret data");
    }
    res.end("Hello world");
})

server.listen(2222);