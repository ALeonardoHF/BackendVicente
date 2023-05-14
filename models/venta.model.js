module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      idVentas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Fecha: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
      },
      Articulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Tipo_articulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Precio: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      Cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {sequelize, timestamps:false});
  
    return Venta;
  };