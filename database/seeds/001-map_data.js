exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('map_data')
    .truncate()
    .then(function() {
      return knex('map_data').insert([
        {
            ccode: 2,
            year: 2007,
            milper: 1506,
            irst: 98102,
            tpop: 301621.0,
            milex: 552568000,
            exports: 1162639.5,
            pred_proba: 0.006356922,
            StateNme: "United States of America",
            country: "US ",
            latitude: 37.09024,
            longitude: -95.712891
        },
        {
            ccode: 20,
            year: 2007,
            milper: 63,
            irst: 15572,
            tpop: 32976.0,
            milex: 18491000,
            exports: 420293.1795722466,
            pred_proba: 0.0045166817,
            StateNme: "Canada",
            country: "CA ",
            latitude: 56.130366,
            longitude: -106.346771
        },
        
      ]);
    });
};
