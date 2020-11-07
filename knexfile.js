module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/jedi.db3",
  },
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
};
