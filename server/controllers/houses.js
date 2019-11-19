const mongoose = require('mongoose');
const House = mongoose.model('House');

module.exports = {

    // getHouses: function (req, res) {
    //     House.find().sort('name')
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // createNewHouse: function (req, res) {
    //     var newHouse = new House(req.body);
    //     newHouse.save()
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // removeOne: function (req, res) {
    //     const { id } = req.params;
    //     House.findOneAndDelete({ _id: id })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // showOne: function (req, res) {
    //     const { id } = req.params;
    //     House.findOne({ _id: id })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },
    
    //     updateOne: function(req, res){
    //         const { id } = req.params;
    //         House.findOneAndUpdate({_id: id}, req.body, {runValidators: true})
    //             .then(data => res.json(data))
    //             .catch(err=> res.json(err));
    //     },
//THIS WOULD WORK FOR CHORES, MEMBERS, OR MESSAGES - need to add both front and backend validators to this code
    // createChore: function(req, res){
    //     const { id } = req.params;
    //     var house = House.findOne({_id: id})
    //         .then(house =>{
    //             console.log("found house");
    //             house.chores.push(req.body);
    //             house.save()
    //             .then(data => res.json(data))
    //             .catch(err=> res.json(err));
    //         })
    //         .catch(err=>res.json(err));
    // },

}