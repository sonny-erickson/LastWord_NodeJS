const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sonny:sonnyjohn63910@cluster0.kcsg7.mongodb.net/lastWord?retryWrites=true&w=majority',)
        .then(() => console.log('co ok'))
        .catch(err => console.log(err));