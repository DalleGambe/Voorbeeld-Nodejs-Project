const mongoose = require('mongoose'); //importing mongoose
const Campus = require('./campus');

const DocentSchema = new mongoose.Schema({
    voornaam: {type: String},
    achternaam: {type: String},
    campussen: [{type: mongoose.Schema.Types.ObjectId, ref: Campus}],
}, {
    collection:`Docent` //naam collection
});

module.exports = mongoose.model('Docent', DocentSchema); //'Docent' naam dat we gebruiken in applicatie 