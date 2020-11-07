const db = require("../data/config");

function find() {
  return db("jedi");
}

function findById(id) {
  return db("jedi").where({ id }).first();
}

async function create(data) {
  const [id] = await db("jedi").insert(data);
  return findById(id);
}

async function update(id, data) {
  await db("jedi").where({ id }).update(data);
  return findById(id);
}

function remove(id) {
  return db("jedi").where({ id }).del();
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
};
