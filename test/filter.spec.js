const expect = require('chai').expect;
const _filter = require('../filter');

describe('filter tests', () => {
    it('undefined filter returns full result', () => {
        const filter = _filter();
        expect(filter()).to.be.null;
        expect(filter(null)).to.be.null;
        expect(filter('')).to.equal('');
        expect(filter('prefix')).to.equal('prefix');
        expect(filter('value')).to.equal('value');
        expect(filter('prefix-value')).to.equal('prefix-value');
        expect(filter('value-prefix')).to.equal('value-prefix');
        expect(filter('prefix-value-prefix')).to.equal('prefix-value-prefix');
        expect(filter('prefix-first-prefix-second')).to.equal('prefix-first-prefix-second');
        expect(filter(0)).to.equal('0');
        expect(filter(true)).to.equal('true');
        expect(filter({})).to.equal('[object Object]');
        expect(filter([])).to.equal('');
        expect(filter([1, 2])).to.equal('1,2');
    });

    it('string filter applies "startsWith" matching', () => {
        const filter = _filter('prefix');
        expect(filter()).to.equal(null);
        expect(filter(null)).to.equal(null);
        expect(filter('')).to.equal(null);
        expect(filter('prefix')).to.equal('');
        expect(filter('value')).to.equal(null);
        expect(filter('prefix-value')).to.equal('-value');
        expect(filter('value-prefix')).to.equal(null);
        expect(filter('prefix-value-prefix')).to.equal('-value-prefix');
        expect(filter('prefix-first-prefix-second')).to.equal('-first-prefix-second');
        expect(filter(0)).to.equal(null);
        expect(filter(true)).to.equal(null);
        expect(filter({})).to.equal(null);
        expect(filter([])).to.equal(null);
        expect(filter([1, 2])).to.equal(null);
    });

    it('regex non-global filter returns expected match', () => {
        const filter = _filter(/prefix.(.+)/i);
        expect(filter()).to.equal(null);
        expect(filter(null)).to.equal(null);
        expect(filter('')).to.equal(null);
        expect(filter('prefix')).to.equal(null);
        expect(filter('value')).to.equal(null);
        expect(filter('prefix-value')).to.equal('value');
        expect(filter('value-prefix')).to.equal(null);
        expect(filter('prefix-value-prefix')).to.equal('value-prefix');
        expect(filter('prefix-first-prefix-second')).to.equal('first-prefix-second');
        expect(filter(0)).to.equal(null);
        expect(filter(true)).to.equal(null);
        expect(filter({})).to.equal(null);
        expect(filter([])).to.equal(null);
        expect(filter([1, 2])).to.equal(null);
    });

    it('regex global filter returns expected match', () => {
        const filter = _filter(/prefix.(.+)/ig);
        expect(filter()).to.equal(null);
        expect(filter(null)).to.equal(null);
        expect(filter('')).to.equal(null);
        expect(filter('prefix')).to.equal(null);
        expect(filter('value')).to.equal(null);
        expect(filter('prefix-value')).to.equal('value');
        expect(filter('value-prefix')).to.equal(null);
        expect(filter('prefix-value-prefix')).to.equal('value-prefix');
        expect(filter('prefix-first-prefix-second')).to.equal('first-prefix-second');
        expect(filter(0)).to.equal(null);
        expect(filter(true)).to.equal(null);
        expect(filter({})).to.equal(null);
        expect(filter([])).to.equal(null);
        expect(filter([1, 2])).to.equal(null);
    });
});