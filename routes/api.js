const express = require('express');
const router = express.Router();

router.get('/kappa', (req, res) => {
  res.sendFile('index.html');
});

module.exports = router;