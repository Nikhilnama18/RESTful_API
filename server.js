const http = require('http');
const host = '127.0.0.1';
const fs = require('fs');
// Exporting a inbuilt file 'app.js'
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log(`Server running at https://${host}/${port}`);