"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    _id: String,
    name: String
}, {
    collection: "department",
    versionKey: false
});

module.exports = mongoose.model("Department", departmentSchema);