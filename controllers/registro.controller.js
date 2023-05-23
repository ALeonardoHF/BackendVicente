const db = require("../models");
const Registro = db.registro;
const Op = db.Sequelize.Op;


exports.crearRegistro = async (req, res) => {
  // Validate request
  if (!req.body.numHabitacion || !req.body.matricula || !req.body.modeloAuto || !req.body.habitacion || !req.body.checkin || !req.body.checkout || !req.body.precio || !req.body.huespedes) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  console.log(req.body.checkin);

  let fechaAux = new Date(req.body.checkin);
  fechaAux.setHours(fechaAux.getHours() + 1);

  // Create a Tutorial
  const registro = {
    CheckIn: fechaAux,
    CheckOut: req.body.checkout,
    TiempoEstancia: req.body.habitacion,
    Precio: req.body.precio,
    CodigoAuth: "N/A",
    Telefono: "N/A",
    Huespedes: req.body.huespedes,
    ModeloAuto: req.body.modeloAuto,
    Matricula: req.body.matricula,
    TipoReservacion: "Local",
    NumHabitacion: req.body.numHabitacion,
  };

  // Save Tutorial in the database
  Registro.create(registro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(404).send({
        message:
          "Some error occurred while creating Registro."
      });
    });
}

exports.findAll = (req, res) => {
    Registro.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving registros."
        });
    });
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const idReservacion = req.params.idReservacion;
  
  const registro = {
    ModeloAuto: req.body.modeloAuto,
    Matricula: req.body.matricula,
    NumHabitacion: req.body.numHabitacion
  }

  Registro.update(registro, {
    where: { idReservacion: idReservacion }
  })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Registro with id=" + idReservacion
      });
    });
};