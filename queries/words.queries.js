const Word = require('../database/models/word.model');

exports.listWord = () =>{
    return Word.find({}).exec();
}

exports.createWord =(word)=>{
    newWord = new Word(word);
    return newWord.save();
}
exports.deleteWord = (wordId) => {
    return Word.findByIdAndDelete(wordId).exec();
    }
