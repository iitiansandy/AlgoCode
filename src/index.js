const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());


// If any request comes and routes starts with /api, we map it to apiRouter
app.use('/api', apiRouter);



app.get('/ping', (req, res) => {
    return res.json({message: 'Problem service is alive'})
});

// Last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Server started at PORT', PORT);

    
})