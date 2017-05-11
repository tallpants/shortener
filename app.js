const express = require('express');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(morgan('tiny'));
app.use(express.static('./public'));
app.use('/api/', api);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});