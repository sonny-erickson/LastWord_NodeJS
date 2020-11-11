const Word = require('../database/models/word.model');


exports.wordList = async(req, res, next) =>{
    try{
        const words = await Word.find({}).exec();
        res.render('home', {words})
    }catch(e){
        next(e)
    }
}
exports.wordNew = (req, res, next) =>{
    res.render('../views/wordForm');
}
exports.wordCreate = async(req, res, next) =>{
    try{
        const body = req.body;
        const newWord = new Word(body);
        await newWord.save();
        res.redirect('/');
    }catch(e){
        const errors = Object.keys(e.errors).map( key => e.errors[key].message );
                res.status(400).render('wordForm', { errors })
    }
}

   
            