'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('tiny'));
app.use(require('./routes'));

// Set server on port
app.listen(PORT, () => {
    console.log('🌍 Listening on port ', PORT);
});
