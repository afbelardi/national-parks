const { Schema, model } = require('mongoose');

const parkSchema = new Schema({
    name: String,
    activities: [{
        id: String,
        name: String
    }],
    address: String,
    designation: String,
    directionsInfo: String,
    entranceFees: [{
        cost: String,
        description: String
    }],
    images: [{
        url: String,
        title: String
    }],
    states: String,
    url: String,
    weatherInfo: String
})

//model

const Parks = model('Park', parkSchema)

module.exports = Park;