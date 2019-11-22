const mongoose = require('mongoose');
// const House = mongoose.model('House');
const house = require('../controllers/houses.js');
const path = require('path');
module.exports = function (app) {



    app.get('/api/read', function (req, res) {
        house.getHouses(req, res);
    });
    app.post('/api/images/new', function (req, res) {
        console.log("images/new route hit");
        house.saveImage(req, res);
    });


    app.get('/api/read', function (req, res) {
        house.getHouses(req, res);
    });



    app.post('/api/new', function (req, res) {
        house.createNewHouse(req, res);
    });


    // app.delete('/api/delete/:id', function (req, res) {
    //     house.removeOne(req, res);
    // });

    app.get('/api/read/:id', function(req, res){
        house.showOne(req, res);
    });
    app.get('/api/read/chore/:id', function(req, res){
        house.showChore(req, res);
    });


    //     app.put('/api/edit/:id', function(req, res){
    //         house.updateOne(req, res);
    //     });

    // app.put('/houses/:id', function(req, res){
    //     house.createRating(req, res);
    // });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }); //everything goes before this guy
}
