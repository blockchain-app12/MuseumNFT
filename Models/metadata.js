var mongoose = require('mongoose');

var metanft = mongoose.Schema({
    
    id:{
        type:Number
    },
    Name:{
        type:String
    },
    Description:{
        type:String
    },    
    Image:{
        type:String
    }
  
});
var metanft= mongoose.model('nftdata',metanft);
module.exports = metanft;
