module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
      // idEmpleado: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true
      // },
      NumeroEmpleado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Rol: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {sequelize, timestamps:false});
  
    return Empleado;
  };