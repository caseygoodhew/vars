module.exports = (filter) => {

    if (filter == null) {
        return x => x == null ? null : String(x);
    }

    if (filter instanceof RegExp) {
        const flags = [];

        if (filter.ignoreCase) {
            flags.push('i');
        }

        if (filter.multiline) {
            flags.push('m');
        }

        const deGlobalizedFilter = new RegExp(filter.source, flags.join(''))

        return x => {
            //console.log(x)
            if (typeof x !== 'string' && typeof x !== 'number') {
                return null;
            }

            const matches = String(x).match(deGlobalizedFilter);
            //console.log(matches)
            if (matches == null) {
                return null;
            }

            return matches[1];
        }
    }

    if (typeof filter === 'string') {
        return x => {
            if (typeof x !== 'string' && typeof x !== 'number') {
                return null;
            }

            return String(x).startsWith(filter) ?
                x.substring(filter.length) :
                null;
        }
    }
}

'12 now! 34 a'.match(/([0-9][0-9])+/i)