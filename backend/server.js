const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

if( !process.env.NODE_ENV ) {
  throw new Error('ERROR: NODE_ENV IS MISSING')
}


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});