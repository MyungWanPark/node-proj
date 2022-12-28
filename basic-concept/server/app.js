const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.setHeader('Content-type', 'text/html');
    if (req.url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (req.url === '/course') {
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
})

server.listen(8080);