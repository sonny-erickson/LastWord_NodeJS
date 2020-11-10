const router = require('express').Router();
const Word = require('../database/models/word.model');

router.post('/', (req, res) =>{
    const body = req.body;
    const newWord = new Word(body);
    newWord.save()
            .then(newWord => res.redirect('/'))
            .catch( err => {
                const errors = Object.keys(err.errors).map( key => err.errors[key].message );
                res.status(400).render('wordForm', { errors });
              })
});
module.exports = router; 