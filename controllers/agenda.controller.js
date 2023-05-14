const db = require("../models");
const Agenda = db.agenda;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre || !req.body.profesion || !req.body.numtel) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const agenda = {
        Nombre: req.body.nombre,
        Profesion: req.body.profesion,
        NumTel: req.body.numtel,
        Info_Rel: req.body.inforel
    };

    // Save Tutorial in the database
    Agenda.create(agenda)
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
    //     // const title = req.query.title;
    //     // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Agenda.findAll()
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
//     const nombre = req.params.nombre;

//     Empleado.findOne({ where: { nombre: nombre } })
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find Empleado with name=${nombre}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Empleado with name=" + nombre
//             });
//         });
// };

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const idEmpleado = req.params.id;

//     //TODO> Buscador para valdiar el usuario
//     // Empleado.

//     Empleado.update(req.body, {
//         where: { idEmpleado: idEmpleado }
//     })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Empleado with id=" + idEmpleado
//             });
//         });
// };

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Tutorial.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Tutorial was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id
//             });
//         });
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