module.exports = (sequelize, Sequelize) => {
    const Inventario = sequelize.define("inventario", {
      productoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Precio: {
        type: Sequelize.INTEGER,
        
      },
      Cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
        
      },
      Venta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
        
      }
    }, {sequelize, timestamps:false});
  
    return Inventario;
  };