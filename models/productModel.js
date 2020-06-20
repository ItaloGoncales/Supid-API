"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    department: { type: "ObjectId", ref: "Department" },
    category: { type: "ObjectId", ref: "Category" },
    subcategory: { type: "ObjectId", ref: "SubCategory" },
    title: String,
    brand: String,
    image: String,
    // price: Schema.Types.Decimal128,
    price: "Decimal128",
    oldPrice: "Decimal128",
    currency: {
        type: String,
        enum: ["BRL"],
        default: "BRL"
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    collection: "product",
    versionKey: false
});

module.exports = mongoose.model("Product", productSchema);