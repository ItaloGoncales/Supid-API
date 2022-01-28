"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const pointSchema = new Schema({
    _id: false,
    type: {
        type: String,
        enum: ["Point"],
        default: "Point",
        required: true
    },
    coordinates: {
        type: [Number], // Long,Lat
        required: true
    }
});

module.exports = pointSchema;