const _filter = require('filter');

module.exports = {
    env: (filter) => require('./env')(_filter(filter)),
    argv: (filter) => require('./argv')(_filter(filter)),
    config: (path, filter) => require('./config')(path, _filter(filter))
}