const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
//require('./database');

const port = process.env.PORT || 3001;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(morgan('short'));//morgan pour le login
//Pour recup les static style image, css... dans le dossier public
app.use(express.static(path.join(__dirname,'public')));
// Autre middleware natif, le 1er pour la méthode POST et envoie en JSON et le seond pour les URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);// Appel des routes

app.listen(port);