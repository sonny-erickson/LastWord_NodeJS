//Un Schema s'utilise sur une collection dans MongoDB et définit la structure des documents de cette collection.
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const wordSchema = schema({
    author: { type: String,
    maxlength: [30, 'nom trop long'], 
    minlength: [3, 'nom trop court'], 
    required: [true, 'Champ requis'] 
    },
    content: { type: String,
    maxlength: [140, 'trop de mot'], 
    minlength: [2, 'pas assez de mot'], 
    required: [true, 'Champ requis'] 
    }
});

const Word = mongoose.model('word', wordSchema);

module.exports = Word;
