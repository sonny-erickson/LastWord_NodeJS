const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(session({
  secret: 'secret',//secret est utilisé par express-session pour signer le cookie contenant l'id de la session. Le serveur est ainsi le seul capable de savoir si le contenu du cookie a été modifié car il est le seul à connaître ce secret.
  resave: false, //Cette option force la redéfinition d'un identifiant de session à chaque réponse
  saveUninitialized: false,// session ne sera pas sauvegardée dans le store si elle n'est pas modifiée.
                            //Autrement dit, si vous n'ajoutez rien dans la session elle ne sera pas sauvegardée.
  cookie: {
    httpOnly: false,//endre les cookies inaccessibles par le JavaScript client et éviter ainsi les attaques XSS 
    maxAge: 1000 * 60 * 60 * 24 * 14//14 j
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 *60 * 24 * 14//14j
  })
}));