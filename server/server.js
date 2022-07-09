const express = require('express');
const path = require('path');
const app = express();

app.set('port', 9000);

app.use(express.static('public'));
app.use(express.static('dist'));
app.use('/', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('http://localhost:' + app.get('port'));
});