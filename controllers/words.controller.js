const {listWord, createWord, deleteWord} = require("../queries/words.queries");

exports.wordList = async(req, res, next) =>{
    try{
        const words = await listWord() 
        res.render('home', {words})
    }catch(e){
        next(e)
    }
}
exports.wordNew = (req, res, next) =>{
    res.render('wordForm');
}
exports.wordCreate = async(req, res, next) =>{
    try{
        const body = req.body;
        await createWord(body);
        res.redirect('/');
    }catch(e){
        const errors = Object.keys(e.errors).map( key => e.errors[key].message );
                res.status(400).render('wordForm', { errors })
    }
}
exports.wordDelete = async(req, res, next) =>{
    try{
        const wordId = req.params.wordId;
        await deleteWord(wordId);
        const words = await listWord();
        res.render('words/word-list', {words});
    }catch(e){
        next(e)
    }
}

   
            