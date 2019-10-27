const express = require('express');

const app = express();
const path = require('path');
const serveStatic = require('serve-static');

const port = process.env.PORT || 8080;

app.use(serveStatic(path.join(__dirname, '/build/')));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/build/index.html'));

app.listen(port);
console.log('Servidor rodando na porta: ' + port);
