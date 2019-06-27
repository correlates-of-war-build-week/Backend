exports.up = function (knex, Promise) {
    return knex.schema.createTable('map_data', map_data => {
        map_data.increments();

        map_data
            .string('StateNme', 128)
            .notNullable()
            .unique();
        map_data
            .string('stateabb', 128)
            .notNullable();
        map_data
            .integer('ccode', 128)
            .notNullable();
        // map_data
        //     .integer('pred_proba', 128)
        //     .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('map_data');
};
