"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Point = require("./pointSchema");

var customerSchema = new Schema({
    ownerName: String,
    placeName: String,
    email: String,
    password: String,
    cnpj: String,
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        street: String, // Street Name
        locality: String, // City
        zipCode: String,
        region: String, // State
        country: String
    },
    location: Point
}, {
    collection: "customer",
    versionKey: false
});

module.exports = mongoose.model("Customer", customerSchema);