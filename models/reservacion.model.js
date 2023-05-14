const db = require("../models");
const Cliente = require('../models/cliente.model');

module.exports = (sequelize, Sequelize) => {
    const Reservacion = sequelize.define("reservacion", {
        idReservacion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CheckIn: {
            type: Sequelize.DATE,
            allowNull: false
        },
        CheckOut: {
            type: Sequelize.DATE,
            allowNull: false
        },
        TiempoEstancia: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Precio: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        CodigoAuth: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Huespedes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ModeloAuto: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Matricula: {
            type: Sequelize.STRING,
            allowNull: false
        },
        TipoReservacion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        NumHabitacion: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, { sequelize, timestamps: false });

    const Cliente = sequelize.define("cliente", {
        idCliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Correo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { sequelize, timestamps: false });

    Reservacion.belongsTo(Cliente);

    return Reservacion;
};