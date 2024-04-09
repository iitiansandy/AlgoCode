const express = require('express');

const v1Router = require('./v1');

// If any request comes and routes continue with /v1, we map it to v1Router
const apiRouter = express.Router();

apiRouter.use('/v1', v1Router);

module.exports = apiRouter;