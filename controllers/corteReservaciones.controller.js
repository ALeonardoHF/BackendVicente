const authenticator = require('authenticator-cli');
const moment = require('moment');
const sequelize = require('sequelize');
const db = require("../models");
const Cliente = db.cliente;
const Reservacion = db.reservacion;
const Registro = db.registro;
const Op = db.Sequelize.Op;

exports.findCorteReservaciones = async (req, res) => {
    // Obtener la fecha actual
    const currentDate1 = new Date();
    const currentDate = new Date(currentDate1);
    currentDate.setDate(currentDate1.getDate() -1);
  
    // Obtener la fecha de ayer
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(currentDate.getDate() - 1);
  
    // Establecer la hora a las 10:00 PM
    yesterdayDate.setHours(22, 0, 0, 0);
    currentDate.setHours(22, 0, 0, 0);
  
    // Formatear las fechas al formato deseado
    const formattedYesterday = yesterdayDate.toISOString().slice(0, 19).replace('T', ' ');
    const formattedToday = currentDate.toISOString().slice(0, 19).replace('T', ' ');
  
    Reservacion.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('Precio')), 'totalPrecioReservaciones']
      ],
      where: {
        CheckIn: {
          [Op.between]: [formattedYesterday, formattedToday]
        }
      }
    })
      .then(data => {
        console.log('data Reservaciones:>> ', data[0].getDataValue('totalPrecioReservaciones'));
      let result = data[0].getDataValue('totalPrecioReservaciones');
      res.send(result);
  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  
  };