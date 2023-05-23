const jsonStringify= require('json-stringify-safe');
const express =require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
}

app.use(cors());
app.use(express.json());

const port=8080;

const db = require('./models');

// agregar un force si es necesario { force: true }
// crear el modelo si no existe en la bdd

// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

db.sequelize.sync();

// app.get('/', async (req, res) => {
//     try {
//       const con= await pool.getConnection();
//       const [rows, fields] = await con.execute('Select idReservaciones, Check_in, check_out, Tiempo_de_estancia, precio, codigo_auth, nombre as nombreCliente from reservaciones join cliente where idCliente = Cliente_idCliente;');
//       con.release();
//       let usuario1=rows[0];
//     //   const modelojson=JSON.parse(usuario1);
//     //   const modeloseguro= jsonStringify(modelojson,null,2)
//       res.send(usuario1);

//     } catch (error) {
//       console.error('Error al ejecutar la consulta:', error);
//       res.status(500).send('Error interno del servidor');
//     }
//   });

require("./routes/general.route")(app)

app.listen(port, function(){
    console.log(`servidor corriendo en: ${port}`);
});