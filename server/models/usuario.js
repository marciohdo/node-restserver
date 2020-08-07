const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'O nome e obrigatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'O email e obrigatorio']
    },
    password: {
        type: String,
        required: [true, 'A Senha e Obrigatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: false,
    },
    google: {
        type: Boolean,
        required: false,

    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} emal deve ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema)