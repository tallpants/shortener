const express = require('express');
const api = require('./routes/api');

const app = express();

app.use(express.static('./public'));
app.use('/api/', api);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});