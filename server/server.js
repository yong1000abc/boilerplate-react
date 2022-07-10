const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 9000;

app.set('port', PORT);

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});