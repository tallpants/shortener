const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');

const db = redis.createClient(process.env.REDIS_URL);

const apiRoutes = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:key', (req, res) => {
    db.get(req.params.key, (err, reply) => {
        if (!reply) {
            return res.status(404).redirect('/404.html');
        }

        res.redirect(reply);
    });
});

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port' + process.env.PORT);
});