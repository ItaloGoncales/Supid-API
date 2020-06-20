/* eslint-disable no-unused-vars */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
var port = process.env.PORT || 3000;

const Product = require("./models/productModel");
const Department = require("./models/departmentModel");
const Category = require("./models/categoryModel");
const SubCategory = require("./models/subCategoryModel");
const Customer = require("./models/customerModel");

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0-hvz1i.gcp.mongodb.net/${process.env.MONGO_DATABASE}_${process.env.NODE_ENV}?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.set("json spaces", 2);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,X-Auth-Token");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, POST, GET, DELETE, OPTIONS");

    next();
});

app.set("trust proxy", true);

require("./routes")(app);

app.route("/").get(function (req, res) {
    res.send("Supid API");
});

app.listen(port);
console.log("Supid API server started on: " + port);