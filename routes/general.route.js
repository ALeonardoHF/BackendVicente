module.exports = app => {

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Empleados
  //////////////////////////////////////////////////////////////////////////////////////////////
  const empleados = require("../controllers/empleado.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/empleados/", empleados.create);

  // Retrieve all Tutorials
  router.get("/empleados/", empleados.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", empleados.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.post("/empleados/find/", empleados.findOne);

  // Update a Tutorial with id
  // router.put("/empleados/:id", empleados.update);

  // Delete a Tutorial with id
  // router.delete("/empleados/:id", empleados.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Inventarios
  //////////////////////////////////////////////////////////////////////////////////////////////

  const inventarios = require("../controllers/inventario.controller.js");

  // Create a new Tutorial
  router.post("/inventarios/", inventarios.create);

  // Retrieve all Tutorials
  router.get("/inventarios/", inventarios.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", inventarios.findAll);

  // Retrieve a single Tutorial with id
  // router.get("/inventarios/:nombre", inventarios.findOne);

  // Update a Tutorial with id
  router.post("/inventarios/actualizar/:productoId", inventarios.update);

  // Delete a Tutorial with id
  // router.delete("/inventarios/:id", inventarios.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Agenda
  //////////////////////////////////////////////////////////////////////////////////////////////


  const agendas = require("../controllers/agenda.controller.js");

  // Create a new Tutorial
  router.post("/agendas/", agendas.create);

  // Retrieve all Tutorials
  router.get("/agendas/", agendas.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", empleados.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/inventarios/:nombre", inventarios.findOne);

  // Update a Tutorial with id
  // router.put("/inventarios/:id", inventarios.update);

  // Delete a Tutorial with id
  // router.delete("/inventarios/:id", inventarios.delete);

  // Delete all Tutorials
  // router.delete("/", empleados.deleteAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Venta
  //////////////////////////////////////////////////////////////////////////////////////////////

  const ventas = require("../controllers/venta.controller.js");

  // Create a new Tutorial
  router.post("/ventas/", ventas.create);

  // Retrieve all Tutorials
  router.get("/ventas/", ventas.findAll);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Cliente
  //////////////////////////////////////////////////////////////////////////////////////////////

  const clientes = require("../controllers/cliente.controller.js");

  // Create a new Tutorial
  router.post("/clientes/", clientes.create);

  // Retrieve all Tutorials
  router.get("/clientes/:nombre", clientes.findOne);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Reservaciones
  //////////////////////////////////////////////////////////////////////////////////////////////

  const reservaciones = require("../controllers/reservacion.controller.js");

  // Create a new Tutorial
  router.post("/reservaciones/", reservaciones.create);

  // Retrieve all Reservaciones Cliente
  router.get("/reservaciones/:id", reservaciones.findAllClient);

  // Retrieve all Reservaciones en linea Empleado
  router.get("/reservaciones", reservaciones.findAllEmpleado);

  // Actualizar reservacion
  router.post("/reservaciones/actualizar/:idReservacion", reservaciones.update);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Registros
  //////////////////////////////////////////////////////////////////////////////////////////////

  const registros = require("../controllers/registro.controller.js");

  // Crear Registro Local
  router.post("/registros/local", registros.crearRegistro);

  // Retrieve all Reservaciones locales Empleado
  router.get("/registros/local", registros.findAll);

  // Actualizar reservacion
  router.post("/registros/actualizar/:idReservacion", registros.update);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Corte Registros
  //////////////////////////////////////////////////////////////////////////////////////////////

  const corte = require("../controllers/corte.controller.js");

  // Retrieve all Registros en linea Empleado
  router.get("/registros/corte", corte.findAllRegistros);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Corte Reservaciones
  //////////////////////////////////////////////////////////////////////////////////////////////

  const corteReservaciones = require("../controllers/corteReservaciones.controller.js");

  // Retrieve all Reservaciones en linea Empleado
  router.get("/corte/reservaciones", corteReservaciones.findCorteReservaciones);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Corte Ventas
  //////////////////////////////////////////////////////////////////////////////////////////////

  const corteVentas = require("../controllers/corteVentas.controller.js");

  // Retrieve all Reservaciones en linea Empleado
  router.get("/total", corteVentas.findCorteVentas);

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Login
  //////////////////////////////////////////////////////////////////////////////////////////////

  const authLogin = require("../controllers/auth.controller.js");

  // Login Empleados
  router.post("/auth/login", authLogin.login);

  // Login Clientes
  router.post("/auth/login/cliente", authLogin.loginCliente);

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  app.use('/api', router);
};

