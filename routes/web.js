const express = require('express');
const redis = require('redis');

const db = redis.createClient(process.env.REDIS_URL);

const router = express.Router();

router.get('/:key', (req, res) => {
  db.get(key, (err, reply) => {
    console.log(reply);
    res.redirect(reply);
  });
});

module.exports = router;