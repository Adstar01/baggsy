const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://aditya1101das:DdAoo3fr76qOeBsZ@cluster0.y6digiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(function(){
    console.log("connected");
})
.catch(function(err) {
    console.log(err);
})

module.exports = mongoose.connection;