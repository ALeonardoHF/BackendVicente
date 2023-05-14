const db = require("../models");
const Inventario = db.inventario;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.cantidad) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const inventario = {
    Nombre: req.body.nombre,
    Precio: req.body.precio,
    Cantidad: req.body.cantidad,
    Venta: req.body.venta
  };

  // Save Tutorial in the database
  Inventario.create(inventario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Empleado."
      });
    });
}

// Retrieve all Tutorials from the database.
// No se usa porque son diferentes usuarios
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Inventario.findAll()
      .then(data => {
        // console.log('data :>> ', data);
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving tutorials."
          });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const productoId = req.params.productoId;
  
  const inventario = {
    Cantidad: req.body.cantidad
  }
  console.log('cantidad :>> ', req.body.cantidad  );

  Inventario.update(inventario, {
    where: { productoId: productoId }
  })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Articulo with id=" + productoId
      });
    });
};