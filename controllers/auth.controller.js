const bcryptjs = require('bcryptjs');
const db = require("../models");
const Empleado = db.empleado;
const Cliente = db.cliente;

exports.login = (req, res) => {
    const nEmp = req.body.numeroEmpleado;
    const pass = req.body.password;

    // const salt = bcryptjs.genSaltSync();
    // let passEnc = bcryptjs.hashSync(req.body.password, salt);

    let validPass;

    Empleado.findOne({ where: { NumeroEmpleado: nEmp } })
        .then(data => {

            // validacion de contraseña guardada en la base de datos
            if (data.dataValues.Rol === "Administrador") {
                // compara la contrasña hasheada con la introducida por el empleado/cliente
                validPass = bcryptjs.compareSync(pass, data.dataValues.Password);
            } else {
                if (data.dataValues.Password == pass) {
                    validPass = true;
                }
            }

            if (!validPass) {
                return res.status(404).send("Error - numero de empleado / contraseña no validos.");
            }

            const numero = data.dataValues.NumeroEmpleado;
            const { Password, Apellido, Nombre, NumeroEmpleado, ...newData } = data.dataValues;
            newData.Num = numero;
            res.status(200).send(newData);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Empleado."
            });
        });


};

exports.loginCliente = (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    console.log('email :>> ', email);
    console.log('password :>> ', pass);
    
    // const salt = bcryptjs.genSaltSync();
    // let passEnc = bcryptjs.hashSync(req.body.password, salt);

    let validPass;

    Cliente.findOne({ where: { Correo: email } })
        .then(data => {

            // compara la contrasña hasheada con la introducida por el empleado/cliente
            validPass = bcryptjs.compareSync(pass, data.dataValues.Password);


            if (!validPass) {
                return res.status(404).send("Error - numero de empleado / contraseña no validos.");
            }

            const { Password, ...newData } = data.dataValues;
            res.status(200).send(newData);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Empleado."
            });
        });


};