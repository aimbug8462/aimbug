
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


const apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});


var db = mongoose.connection;



if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with Express'));


app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});