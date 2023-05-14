module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define("agenda", {
      contacto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      Profesion: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      Info_Rel: {
        type: Sequelize.STRING
        
      },
      NumTel: {
        type: Sequelize.STRING,
        allowNull: false
        
      }
    }, {sequelize, timestamps:false});
  
    return Agenda;
  };