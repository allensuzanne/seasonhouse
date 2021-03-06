const mongoose = require('mongoose');
const House = mongoose.model('House');

module.exports = {

    saveImage: function (req, res) {
        console.log("Image received: " + req.body)
        const { id } = req.params;
        var house = House.findOne({_id: id})
            .then(house =>{
                console.log("found house");
                house.images.push(req.body);
                house.save()
                .then(data => res.json(data))
                .catch(err=> res.json(err));
            })
            .catch(err=>res.json(err));
    },

    getHouses: function (req, res) {
        House.find().sort('name')
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    createNewHouse: function (req, res) {
        var newHouse = new House(req.body);
        newHouse.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getLatLong: function (req, res){
        geocoder.geocode(address)
            .then(response => {console.log(response)})
            .catch(err => {console.error(err)});
    },

    showOne: function (req, res) {
        const { id } = req.params;
        House.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    showChore: function (req, res) {
        const { id } = req.params;
        House.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

}
