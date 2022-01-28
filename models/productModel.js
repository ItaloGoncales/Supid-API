"use strict";
var mongoose = require("mongoose");
var crypto = require("crypto");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    department: { type: String, ref: "Department" },
    category: { type: String, ref: "Category" },
    subCategory: { type: String, ref: "SubCategory" },
    title: String,
    brand: String,
    image: String,
    code: String,
    tcode: String,
}, {
    collection: "product",
    versionKey: false
});

productSchema.pre("save", async function save(next) {
    if (!this.isModified("title")) return next();

    this.code = crypto.createHash("md5").update(
        this.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\t\n\r\-*".,]/g, "").toLowerCase()
    ).digest("hex");

    this.tcode = this.code.substr(0, 8).toUpperCase();

    next();
});

module.exports = mongoose.model("Product", productSchema);