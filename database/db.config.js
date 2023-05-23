const moment = require('moment-timezone');

module.exports = {
    host: 'localhost',
    user:'vicmar',
    password:'1QA2WS3E',
    database: 'test',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    timezone: moment.tz('America/Chihuahua').format('Z')
};