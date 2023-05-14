const db = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Registro = sequelize.define("registro", {
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

    return Registro;
};