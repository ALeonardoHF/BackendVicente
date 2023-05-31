const sequelize = require('sequelize');
const db = require("../models");
const Venta = db.venta;
const Op = db.Sequelize.Op;

exports.findCorteVentas = async (req, res) => {
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
    const formattedYesterday = yesterdayDate.toISOString().slice(0, 10) + ' 22:00:00';
    const formattedToday = currentDate  .toISOString().slice(0, 10) + ' 22:00:00';
  
    Venta.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('Precio')), 'totalVentas']
      ],
      where: {
        Fecha: {
          [Op.between]: [formattedYesterday, formattedToday]
        }
      }
    })
      .then(data => {
        console.log('data Ventas:>> ', data[0].getDataValue('totalVentas'));
        let result = data[0].getDataValue('totalVentas');
        res.send(result);
  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving total ventas."
        });
      });
  
  };