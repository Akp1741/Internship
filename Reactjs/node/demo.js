const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

const PORT = 3001; // Change the port number
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);

    
  });
