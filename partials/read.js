// Lib Requirements
const datapay = require('datapay');
const bsv = require('bsv');
const fetch = require('isomorphic-fetch');


exports.getDataBack = function() {
    const options = { headers: { key: '1AcMuwPKmFH7PTrZeWC52W9JLRCq6vx2uk' } }
    fetch('https://bob.planaria.network/q/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAiaW4uZS5hIjogIjFMVFhpakJVZnUyOHZBRzhyRnhpUkVYem5jVHV6QkMyZjMiLAogICAgICAgIm91dC50YXBlLmNlbGwiOiB7CiAgICAgICAgICIkZWxlbU1hdGNoIjogewogICAgICAgICAgImkiOiAwLAogICAgICAgICAgInMiOiAiMTlIeGlnVjRReUJ2M3RIcFFWY1VFUXlxMXB6WlZkb0F1dCIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICIkb3IiOiBbCiAgICAgICAgewogICAgICAgICAgImJsay5pIjogewogICAgICAgICAgICAiJGV4aXN0cyI6IGZhbHNlCiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiYmxrLmkiOiB7CiAgICAgICAgICAgICIkZ3QiOiA2MDk2NDEKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAicHJvamVjdCI6IHsKICAgICAgIm91dC50YXBlLmNlbGwiOiAxLAogICAgICAidHgiOiAxCiAgICB9LAogICAgImxpbWl0IjogMTAKICB9LAogICJyIjogewogICAgImYiOiAiWyAuW10gfCBbeyBkYXRhOiAub3V0WzBdLnRhcGVbMV0uY2VsbFsxXS5zLCB0eGlkOiAudHguaCB9XSB8IC5bXSBdIgogIH0KfQ==', options).then(res => res.json()).then(res => {
        console.log(res)
    })
}