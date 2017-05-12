const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');

const db = redis.createClient(process.env.REDIS_URL);

const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
app.use(webRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port' + process.env.PORT);
});