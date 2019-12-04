// Lib Requirements
const datapay = require('datapay');
const bsv = require('bsv');
const fetch = require('isomorphic-fetch');

// We only want to generate a privateKey if we don't already have one, so here is just use the exsisting string and instantiate a PrivateKey object.
exports.useExistingKey = (privKeyString) => {
    var privK = bsv.PrivateKey.fromString(privKeyString);
    console.log('address => ' + privK.toAddress().toString());
    return privK
};