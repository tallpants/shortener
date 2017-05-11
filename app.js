const express = require('express');
const redis = require('redis');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');
const logging = require('morgan');

const secrets = require('./secrets');

const db = redis.createClient(secrets.redisPort, secrets.redisHost);
db.auth(secrets.redisPassword);

db.on('error', (err) => {
    console.error(err);
});

const app = express();

let publicDir = path.join(__dirname, 'public');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logging('tiny'));
app.use(express.static(publicDir));

app.post('/shorten', (req, res) => {
    if (!req.body.url) {
        return res.status(400).send('400 invalid request');
    }
    
    crypto.randomBytes(2, (err, buffer) => {
        if (!err) {
            let key = buffer.toString('hex');
            db.set(key, req.body.url);
            db.expire(key, 172800); // Key expires after 48 hours
            return res.send(key);
        } else {
            console.error(err);
            process.exit(1);
        }

    });
});

app.get('/:key', (req, res) => {
    db.get(req.params.key, (err, reply) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        
        if (!reply) {
            return res.status(404).sendFile(path.join(publicDir, '404.html'));
        }
        
        return res.redirect(reply);
    })
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});