const mongoose = require('mongoose');

const pantSchema= mongoose.Schema({
    pantImage : String,
})

const pants = mongoose.model('pants', pantSchema);
module.exports= pants;
