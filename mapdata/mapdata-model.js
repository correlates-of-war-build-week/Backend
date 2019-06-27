const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};
        

function find() {
  return db('map_data')
    .select(
      'id', 
      "ccode",
      "year",
      "milper",
      "irst",
      "tpop",
      "milex",
      "exports",
      "predproba",
      "StateNme",
      "country",
      "latitude",
      "longitude",
    );
}

function findBy(filter) {
  return db('map_data').where(filter);
}

async function add(map_data) {
  const [id] = await db('map_data').insert(map_data);

  return findById(id);
}

function findById(id) {
  return db('map_data')
    .select('id', 'StateNme',)
    .where({ id })
    .first();
}