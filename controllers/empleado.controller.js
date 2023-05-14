const db = require("../models");
const bcryptjs = require('bcryptjs');
const authenticator = require('authenticator-cli');
const Empleado = db.empleado;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.apellido || !req.body.password || !req.body.rol) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  let passAux;


  const salt = bcryptjs.genSaltSync();

  // genera el authenticator code
  const codigoEmpleado = authenticator.generateKey();
  const numeroEmpleado = authenticator.generateToken(codigoEmpleado);

  if (req.body.rol == "Administrador") {
    passAux = bcryptjs.hashSync(req.body.password, salt);
  } else {
    passAux = req.body.password;
  }

  // Create a Tutorial
  const empleado = {
    Nombre: req.body.nombre,
    Apellido: req.body.apellido,
    Password: passAux,
    Rol: req.body.rol,
    NumeroEmpleado: numeroEmpleado
  };

  // Save Tutorial in the database
  Empleado.create(empleado)
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
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Empleado.findAll()
    .then(data => {
      // console.log('data :>> ', data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving empleados."
      });
    });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const nombre = req.body.nombre;

//   Empleado.findOne({ where: { nombre: nombre } })
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
//   const idEmpleado = req.params.id;

//   //TODO> Buscador para valdiar el usuario
//   // Empleado.

//   Empleado.update(req.body, {
//     where: { idEmpleado: idEmpleado }
//   })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Empleado with id=" + idEmpleado
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