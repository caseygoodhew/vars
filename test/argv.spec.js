const expect = require('chai').expect;
const _argv = require('../argv');

describe('argv tests', () => {
    it('returns an arguments object', () => {
        // maybe flaky as it relies on the args passed in
        // to the "scripts->test" command in package.json
        expect(_argv()).to.deep.equal({
            reporter: 'spec'
        });
    })
});