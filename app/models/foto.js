var mongoose = require('mongoose');

var schema = mongoose.Schema({
//criando a estrutura do esquema para o MongoDB
    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    grupo: {
        type: Number,
        required: true
    }
});

//compilando um modelo com base no esquema
mongoose.model('Foto', schema);
