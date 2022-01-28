"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    _id: String,
    name: String
}, {
    collection: "category",
    versionKey: false
});

module.exports = mongoose.model("Category", categorySchema);