const dbConfig = require('../database/db.config');

const Sequelize = require('sequelize');
// const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
//     host: dbConfig.host,
//     dialect: "mysql",
//     operatorAliases: false,
//     // pool: {
//     //     max: 5,
//     //     min: 0,
//     //     acquire: 30000,
//     //     idle: 10000
//     //   }
// });

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: "mysql",
  // operatorAliases: false,
  // pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.empleado = require('./empleado.model.js')(sequelize, Sequelize);
db.inventario = require('./inventario.model.js')(sequelize, Sequelize);
db.agenda = require('./agenda.model.js')(sequelize, Sequelize);
db.venta = require('./venta.model.js')(sequelize, Sequelize);
db.reservacion = require('./reservacion.model.js')(sequelize, Sequelize);
db.registro = require('./registro.model.js')(sequelize, Sequelize);
db.cliente = require('./cliente.model.js')(sequelize, Sequelize);

module.exports = db;