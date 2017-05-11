const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');

const db = redis.createClient(process.env.REDIS_URL);
const app = express();

exports.db = db;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port' + process.env.PORT);
});