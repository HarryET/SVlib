// Lib Requirements
const datapay = require('datapay');
const bsv = require('bsv');
const fetch = require('isomorphic-fetch');

// We want to be able to send any data by adding it as the first argument to this function.
exports.send = (data, keyToPayForData) => {
    console.log('========')
    console.log('privK in WIF => ' + keyToPayForData.toWIF())
    console.log('data => ' + data)
    console.log('========')
    const tx = {
        safe: true,
        data: ['19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut', data, 'text/markdown', 'utf-8', 'BitCoin.md'],
        pay: {
            key: keyToPayForData
        }
    }
    datapay.send(tx, (err, res) => {
        if (err) { console.log('Error => ' + err) } else {
            console.log('Link to page created => ' + `https://bico.media/b/${res}`)
        }
    })
}