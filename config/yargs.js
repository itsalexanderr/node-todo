const opCrear = {
  descripcion: {
    demand: true,
    alias: "d",
  },
};
const opActualizar = {
  descripcion: {
    demand: true,
    alias: "d",
  },
  completado: {
    default: true,
    alias: "c",
  },
};

const argv = require("yargs")
  .command("crear", "Crea las tareas solicitadas", opCrear)
  .command("actualizar", "actualiza las tareas creadas", opActualizar)
  .command("borrar", "Borrar el dato", opCrear)
  .help().argv;

module.exports = {
  argv,
};
