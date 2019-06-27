exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('map_data')
    .truncate()
    .then(function() {
      return knex('map_data').insert([
        {
          StateNme: "United States of America",
          stateabb: "USA",
          ccode: 2,
          pred_proba: "0.3706049009"
      },
      {
          StateNme: "Canada",
          stateabb: "CAN",
          ccode: 20,
          pred_proba: "0.0253472574"
      },
      {
          StateNme: "Bahamas",
          stateabb: "BHM",
          ccode: 31,
          pred_proba: "0.0198710897"
      },
      {
          StateNme: "Cuba",
          stateabb: "CUB",
          ccode: 40,
          pred_proba: "0.0208974815"
      },
      {
          StateNme: "Haiti",
          stateabb: "HAI",
          ccode: 41,
          pred_proba: "0.0204586904"
      },
      {
          StateNme: "Dominican Republic",
          stateabb: "DOM",
          ccode: 42,
          pred_proba: "0.0209258472"
      },
      {
          StateNme: "Jamaica",
          stateabb: "JAM",
          ccode: 51,
          pred_proba: "0.0199728738"
      },
      {
          StateNme: "Trinidad and Tobago",
          stateabb: "TRI",
          ccode: 52,
          pred_proba: "0.0198855035"
      },
      ]);
    });
};
