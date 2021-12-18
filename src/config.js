const { config } = require('dotenv');

config();

module.exports = {
    DATABASE: {
        MONGOURI: process.env.MONGODB_URI,
    },
};
