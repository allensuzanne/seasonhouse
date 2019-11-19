const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

//----------conntect to db--------------------------------------------------
mongoose.connect('mongodb://localhost/houses', { useNewUrlParser: true });
require('.././models/house.js');

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})