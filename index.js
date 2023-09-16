const http = require("http");
const port = 3030;

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Keyin World! response");
})

server.listen(port, () => {
    console.log(`server started on port ${port}; press Ctrl-c to terminate...`)
})
