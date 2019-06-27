exports.up = function (knex, Promise) {
    return knex.schema.createTable('map_data', map_data => {
        map_data.increments();

        map_data
            .string('StateNme', 128)
            .notNullable()
            .unique();
        map_data
            .string('stateabb', 128)
        map_data
            .integer('ccode', 128)
            .notNullable();
        map_data
            .decimal('pred_proba', 128)
            .notNullable();
        map_data
            .integer('year', 128)
            .notNullable();
        map_data
            .integer('milper', 128)
            .notNullable();
        map_data
            .integer('irst', 128)
            .notNullable();
        map_data
            .integer('tpop', 128)
            .notNullable();
        map_data
            .integer('milex', 128)
            .notNullable();
        map_data
            .integer('exports', 128)
        map_data
            .decimal('latitude', 128)
        map_data
            .decimal('longitude', 128)
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('map_data');
};
