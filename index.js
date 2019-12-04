// Lib Requirements
const datapay = require('datapay');
const bsv = require('bsv');
const fetch = require('isomorphic-fetch');

// Require Partials
const key = require("./partials/key");
const write = require("./partials/write");
const read = require("./partials/read");

exports.useExistingKey = function(privKeyString) {
    key.useExistingKey(privKeyString);
};

exports.send = function(data, keyToPayForData) {
    write.send(data, keyToPayForData);
};

exports.getDataBack = function () {
    read.getDataBack();
};