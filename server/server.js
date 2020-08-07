const bodyParser = require('body-parser')

const express = require('express');
const mongoose = require('mongoose');



const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
require('./config/config');

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de dados Online');
});

app.listen(process.env.PORT, () => {
    console.log('Usando a porta:', process.env.PORT);
});