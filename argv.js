module.exports = (opts) => {
    const vars = require('minimist')(process.argv.slice(2), opts);
    delete vars._;
    return vars;
}