const http = require('http');

const server = http.createServer((req, res) => {
    res.write('hello server!');
    res.end()

})

server.listen(8080);