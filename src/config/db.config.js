const mongoose = require('mongoose');
const { MongoDBURL, NODE_ENV } = require('./server.config');

async function connectToDB () {
    try {
        if (NODE_ENV === "development") {
            await mongoose.connect(MongoDBURL);
        } 
        
        // else if (NODE_ENV === "production") {
        //     await mongoose.connect('url');
        // }
        
    } catch (error) {
        console.log('Unable to connect to Database');
        console.log(error)
    }
};

module.exports = connectToDB;