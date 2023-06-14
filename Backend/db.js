const mongoose = require('mongoose');


const mongoURI = 'MONGO_URI' 

const connectToMongo = () => {
    mongoose.connect(mongoURI, (console.log("Connected to mongo successfully")) )
} 

module.exports = connectToMongo
