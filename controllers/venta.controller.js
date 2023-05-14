const sequelize = require('sequelize');
const db = require("../models");
const Venta = db.venta;
const Inventario = db.inventario;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.articulo || !req.body.tipoarticulo || !req.body.precio || !req.body.cantidad) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const venta = {
    Articulo: req.body.articulo,
    Tipo_articulo: req.body.tipoarticulo,
    Precio: req.body.precio,
    Cantidad: req.body.cantidad
  };

  Inventario.findOne({ where: { Nombre: req.body.articulo } })
    .then(data => {
      if (data) {
        if (req.body.cantidad <= data.dataValues.Cantidad) {
          const inventario = {
            Cantidad: data.dataValues.Cantidad - req.body.cantidad
          }
          Inventario.update(inventario, { where: { Nombre: req.body.articulo } });
          // Save Tutorial in the database
          Venta.create(venta)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating Empleado."
              });
            });
        } else {
          return res.status(406).send({ msg: "No hay suficiente producto." });
        }
      }
    });
}

// Retrieve all Tutorials from the database.
// No se usa porque son diferentes usuarios
exports.findAll = (req, res) => {

  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Venta.findAll({ attributes: ['Articulo', 'Precio', 'Cantidad', [sequelize.literal('Precio*Cantidad'), 'Total']] })
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

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const nombre = req.params.nombre;

//   Inventario.findOne({ where: { nombre: nombre } })
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Empleado with name=${nombre}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Empleado with name=" + nombre
//       });
//     });
// };

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const productoId = req.params.id;

//   //TODO> Buscador para valdiar el usuario
//   // Empleado.

//   Inventario.update(req.body, {
//     where: { productoId: productoId }
//   })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Producto with id=" + productoId
//       });
//     });
// };

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tutorial.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };