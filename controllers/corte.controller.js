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
  
    const startDate = new Date();
    startDate.setHours(22, 0, 0, 0);
  
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() - 1);
  
    Registro.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('Precio')), 'totalPrecio']
      ],
      where: {
        CheckIn: {
          [Op.between]: [startDate, endDate]
        }
      }
    })
      .then(data => {
        console.log('data :>> ', data[0].getDataValue('totalPrecio'));
        res.send(data[0].getDataValue('totalPrecio'));
  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
  };