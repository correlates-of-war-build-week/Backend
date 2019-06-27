exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('map_data')
        .truncate()
        .then(function () {
            return knex('map_data').insert([
                {
                    StateNme: "United States of America",
                    stateabb: "USA",
                    ccode: 2,
                    pred_proba: "0.3706049009",
                    latitude: 37.09024,
                    longitude: -95.712891
                },
                {
                    StateNme: "Canada",
                    stateabb: "CAN",
                    ccode: 20,
                    pred_proba: "0.0253472574",
                    latitude: 56.130366,
                    longitude: -106.346771
                },
                {
                    StateNme: "Bahamas",
                    stateabb: "BHM",
                    ccode: 31,
                    pred_proba: "0.0198710897",
                    latitude: 25.03428,
                    longitude: -77.39628
                },
                {
                    StateNme: "Cuba",
                    stateabb: "CUB",
                    ccode: 40,
                    pred_proba: "0.0208974815",
                    latitude: 21.521757,
                    longitude: -77.781167
                },
                {
                    StateNme: "Haiti",
                    stateabb: "HAI",
                    ccode: 41,
                    pred_proba: "0.0204586904",
                    latitude: 18.971187,
                    longitude: -72.285215
                },
                {
                    StateNme: "Dominican Republic",
                    stateabb: "DOM",
                    ccode: 42,
                    pred_proba: "0.0209258472",
                    latitude: 18.735693,
                    longitude: -70.162651
                },
                {
                    StateNme: "Jamaica",
                    stateabb: "JAM",
                    ccode: 51,
                    pred_proba: "0.0199728738",
                    latitude: 18.109581,
                    longitude: -77.297508
                },
                {
                    StateNme: "Trinidad and Tobago",
                    stateabb: "TRI",
                    ccode: 52,
                    pred_proba: "0.0198855035",
                    latitude: 10.691803,
                    longitude: -61.222503
                },
            ]);
        });
};
