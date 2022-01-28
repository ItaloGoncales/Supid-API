"use strict";
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10,
    Point = require("./pointSchema");

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

customerSchema.pre("save", async function save(next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

customerSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model("Customer", customerSchema);