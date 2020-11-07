exports.seed = async function (knex) {
  await knex("jedi").truncate();
  await knex("jedi").insert([
    { name: "Obi-Wan Kenobi" },
    { name: "Luke Skywalker" },
    { name: "Mace Windu" },
    { name: "Anakin Skywalker" },
  ]);
};
