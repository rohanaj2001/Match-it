const mongoose = require('mongoose');

const shirtSchema= mongoose.Schema({
    shirtImage : String,
    shirtColor : String,
    shirtComplementaryColor : String,
    used : String,


})

const shirts = mongoose.model('shirts', shirtSchema);
module.exports= shirts;
