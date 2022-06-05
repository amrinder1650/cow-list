const express = require('express');
const path = require('path');
const router = require('./routes.js');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

app.use('/api', router)
