module.exports = (sequelize, Sequelize) => {
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

    return Cliente;
};