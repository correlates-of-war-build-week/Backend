exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { username: 'sam', password: 'berries' },
        { username: 'frodo', password: 'thering' },
        { username: 'pippin', password: 'secondbreakfast' },
        { username: 'merry', password: 'dinner'},
      ]);
    });
};
