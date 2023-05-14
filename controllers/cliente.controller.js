const db = require("../models");
const Cliente = db.cliente;
const bcryptjs = require('bcryptjs');
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  // console.log('nombre :>> ', req.body.nombre);
  // console.log('email :>> ', req.body.email);
  // console.log('password :>> ', req.body.password);

  const salt = bcryptjs.genSaltSync();

  const cliente = {
    Nombre: req.body.nombre,
    Correo: req.body.email,
    Password: bcryptjs.hashSync(req.body.password, salt)
  }

  // Save Tutorial in the database
  Cliente.create(cliente)
    .then(data => {
      res.send({data: data, msg: "Ok"});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Empleado."
      });
    });
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const nombre = req.body.nombre;

  Cliente.findOne({ where: { nombre: nombre } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cliente with name=${nombre}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cliente with name=" + nombre
      });
    });
};
