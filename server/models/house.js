const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------create schema--------------------------------------------------
const houseSchema = new mongoose.Schema({
    houseName: {type: String, required: true, minlength: 3},
    address: {type: String, required: true, unique: true},
    chores: [
        { 
            choreName: {type: String, required: true, minlength: 3},
            frequency: {type: String, required: true},
            time: {type: Number, required: true},
            assigneeName: {type: String},
            status: {type: Boolean, default: false}
        }
    ],
    members: [
        {
            memberName: {type: String, required: true, minlength: 3},
            email: {type: String, required: true, minlength: 5, unique: true},
            password: {type: String, required: true}
        }
    ],
    messages: [
        {
            authorName: {type: String, required: true},
            message: { type: String, required: true, minlength: 3}
        }
    ],
    events: [
        {
            title: {type: String},
            date: {type: Date},
            allDay: Boolean
        }
    ]
},
    { timestamps: true });

//----------create model--------------------------------------------------
const House = mongoose.model('House', houseSchema);