"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerProductSchema = new Schema({
    productId: { type: "ObjectId", ref: "Product" },
    customer: { type: "ObjectId", ref: "Customer" },
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
    collection: "customerProduct",
    versionKey: false
});

module.exports = mongoose.model("CustomerProduct", customerProductSchema);