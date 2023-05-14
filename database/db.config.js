const moment = require('moment-timezone');

module.exports = {
    host: 'aws.connect.psdb.cloud',
    user:'v4wbq8ty83av8ku71fr9',
    password:'pscale_pw_KolAzP9Jj2mAX4K5v1J18SuaGBDaj3Tu7PIe8J6EgzG',
    database: 'test',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    timezone: moment.tz('America/Chihuahua').format('Z')
};