'use strict';


const cors = require('cors');

const error404 = require('./ error-handlers/404');
const error500 = require('./ error-handlers/500');

const logger = require('./middleware/logger');

const express = require('express');

const clotheRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');


const app = express();


app.use(express.json());

app.use(cors());


app.use(logger);

app.use('/clothes',clotheRouter);
app.use('/food',foodRouter);


// app.use(validator);



app.get('/bad', (req, res) => {
  throw new Error('Error');	
});



app.use('*', error404);
app.use(error500);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};






