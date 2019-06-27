const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('map_data').select('id', 'StateNme', 'stateabb', 'ccode', 'pred_proba','latitude','longitude');
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

function update(id, changes){
    return db('map_data')
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('map_data')
    .where({ id })
    .del();
}