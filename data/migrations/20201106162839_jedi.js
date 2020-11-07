exports.up = async function (knex) {
  await knex.schema.createTable("jedi", (table) => {
    table.increments();
    table.text("name").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("jedi");
};
