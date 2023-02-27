const express = require('express');

const app = express();
const mongoose = require('mongoose')

const stuffRouter = require('./Route/stuff')
const userRoute =  require('./Route/user')

const bodyParse = require('body-parser');


mongoose.connect('mongodb+srv://bilitoua:biltheodore26@cluster0.pwi9i.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParse.json())

app.use('/api/stuff', stuffRouter)
app.use('/api/auth', userRoute)

module.exports = app;