// Create web server application with Node.js
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// Define port number
const port = 3000;

// Create web server object
const server = http.createServer((req, res) => {
    // Get URL and parse it
    const parsedUrl = url.parse(req.url);
    // Get path
    const path = parsedUrl.pathname;
    // Get query string as an object
    const query = qs.parse(parsedUrl.query);
    // Get HTTP method
    const method = req.method;

    // Send the response
    res.end('Hello World\n');

    // Log the request path
    console.log(`Request received with these headers: ${req.headers}`);
    console.log(`Path: ${path}, Method: ${method}, Query: ${JSON.stringify(query)}`);
});

// Start web server
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


