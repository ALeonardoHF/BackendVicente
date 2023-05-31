const authenticator = require('authenticator-cli');
const moment = require('moment');
const sequelize = require('sequelize');
const db = require("../models");
const Cliente = db.cliente;
const Reservacion = db.reservacion;
const Registro = db.registro;
const Op = db.Sequelize.Op;

exports.findAllRegistros = async (req, res) => {
  // Obtener la fecha actual
  const currentDate2 = new Date();
  const currentDateR = new Date(currentDate2);
  currentDateR.setDate(currentDate2.getDate() -1);

  // Obtener la fecha de ayer
  const yesterdayDate = new Date(currentDateR);
  yesterdayDate.setDate(currentDateR.getDate() - 1);

  // Establecer la hora a las 10:00 PM
  yesterdayDate.setHours(22, 0, 0, 0);
  currentDateR.setHours(22, 0, 0, 0);

  // Formatear las fechas al formato deseado
  // const formattedYesterday = yesterdayDate.toISOString().slice(0, 19).replace('T', ' ');
  // const formattedToday = currentDateR.toISOString().slice(0, 19).replace('T', ' ');

  const formattedYesterday = yesterdayDate.toISOString().slice(0, 10) + ' 22:00:00';
  const formattedToday = currentDateR.toISOString().slice(0, 10) + ' 22:00:00';

  Registro.findAll({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('Precio')), 'totalPrecioRegistros']
    ],
    where: {
      CheckIn: {
        [Op.between]: [formattedYesterday, formattedToday]
      }
    }
  })
    .then(data => {
      console.log('data Registros:>> ', data[0].getDataValue('totalPrecioRegistros'));
      let result = data[0].getDataValue('totalPrecioRegistros');
      res.send(result);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};
