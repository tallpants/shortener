const express = require('express');
const redis = require('redis');

const db = redis.createClient(process.env.REDIS_URL);

const router = express.Router();

router.get('/:key', (req, res) => {
  db.get(req.params.key, (err, reply) => {
    if (!reply) {
      return res.redirect('404');
    }

    return res.redirect(reply);
  });
});

module.exports = router;