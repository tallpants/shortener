const express = require('express');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(morgan('tiny'));

app.use(express.static('./public'));

app.use('/api/', api);

app.get('/index', (req, res) => {
    res.send('Hello!');
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});