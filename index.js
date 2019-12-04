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

// ------------------------------ Program starts ------------------------------

// privateKey in WIF format from before
const fundingKey = useExistingKey('L2Zm65pBaFnKnocVY9u2n4Gut9PriEoeLMiGZVk9wCLeLGXYnEAN')

send('Super cool data burnt to chain.', fundingKey)

getDataBack()