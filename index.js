const _json = require('./json');

module.exports = {
    env: ({
        filter
    }) => _json(require('./env')(), filter),
    argv: ({
        filter,
        opts
    }) => _json(require('./argv')(opts), filter),
    json: ({
        filter,
        json
    }) => _json(json, filter)
}