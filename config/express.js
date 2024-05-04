const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const routes = require('../api/routes/converter-route');

module.exports = () => {
const app = express();

const PORT = process.env.PORT || config.get('server.port');
app.set('port', PORT);

app.use(bodyParser.json());

app.use('/api/temp-converter', routes);

return app;
};