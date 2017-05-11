const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port' + process.env.PORT);
});