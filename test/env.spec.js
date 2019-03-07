const expect = require('chai').expect;
const _env = require('../env');

describe('env tests', () => {
    it('returns the env object', () => {
        expect(_env()).to.deep.equal(process.env);
    })
});