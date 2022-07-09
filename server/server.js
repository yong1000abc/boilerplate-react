const express = require('express');
const path = require('path');
const server = express();

server.set('port', 3000);

server.use('/', express.static('dist'));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

server.listen(server.get('port'), () => {
  console.log('http://localhost:' + server.get('port'));
});