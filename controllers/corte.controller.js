const authenticator = require('authenticator-cli');
const moment = require('moment');
const sequelize = require('sequelize');
const db = require("../models");
const Cliente = db.cliente;
const Reservacion = db.reservacion;
const Registro = db.registro;
const Op = db.Sequelize.Op;

exports.findAllReservations = async (req, res) => {
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    // const startDate = new Date();
    // startDate.setHours(23, 59, 0, 0);
  
    // const endDate = new Date(startDate);
    // endDate.setDate(endDate.getDate() - 1);
  
    Reservacion.findAll({
      attributes: [
        [sequelize.literal('SUM(Precio)'), 'totalPrecio']
      ],
      where: {
        CheckIn: {
          [Op.between]: ['2023-05-16 22:00:00', '2023-05-17 22:00:00']
        }
      }
    })
      .then(data => {
        console.log('data :>> ', data.getDataValue('totalPrecio'))
        res.send(data);
  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
  };