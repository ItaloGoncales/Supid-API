"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subCategorySchema = new Schema({
    _id: String,
    name: String
}, {
    collection: "subCategory",
    versionKey: false
});

module.exports = mongoose.model("SubCategory", subCategorySchema);