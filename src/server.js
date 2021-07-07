'use strict';


const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const error404 = require('./ error-handlers/404');
const error500 = require('./ error-handlers/500');

// const logger = require('./middleware/logger');

const app = express();

const foodRouter = require('./routes/food');



app.use(express.json());
app.use(morgan('combined'));

app.use(cors());


// app.use(logger);

app.use('/api/v1/food',foodRouter);


// app.use(validator);


app.get('/',(req,res)=>{
  res.send('Hello World In server');
});

app.get('/bad', (req, res) => {
  throw new Error('Error');	
});



app.use('*', error404);
app.use(error500);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};






