const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MongoDBURL: process.env.MONGO_DB_URL,
    NODE_ENV: process.env.NODE_ENV || "development"
}