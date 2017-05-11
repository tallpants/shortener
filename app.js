const express = require('express');
const redis = require('redis');
const logging = require('morgan');

const api = require('./routes/api');
const secrets = require('./secrets');

const db = redis.createClient(secrets.redisPort, secrets.redisHost);
db.auth(secrets.redisPassword);

db.on('error', (err) => {
    console.error(err);
});

const app = express();

app.use(logging('tiny'));
app.use(express.static('./public'));
app.use('/api/', api);

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});