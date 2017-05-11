const express = require('express');
const crypto = require('crypto');
const validUrl = require('valid-url');

const db = require('../app').db;

const router = express.Router();

router.post('/shorten', (req, res) => {
  if (!req.body.url || !validUrl.isWebUri(req.body.url)) {
    return res.status(400).json({ 'error': 'Incorrect request. Expected url' });
  }

  crypto.randomBytes(2, (err, buffer) => {
    let key = buffer.toString('hex');
    db.set(key, req.body.url);
    db.expire(key, 172800); // Key expires after 48 hours
    return res.json({ 'key': key });
  });
});

router.get('/expand/:key', (req, res) => {
  db.get(req.params.key, (err, reply) => {
    if (!reply) {
      return res.status(404).json({ 'error': 'Does not exist'});
    }

    return res.json({ 'url': reply });
  });
});

module.exports = router;