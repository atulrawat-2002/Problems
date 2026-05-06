
var isIsomorphic = function(s, t) {
    let i = 0;
    let sHash = new Map();
    let tHash = new Map();

    while (i < s.length && i < t.length) {
        if ( !sHash.has(s[i]) ) sHash.set(s[i], i);
        if ( !tHash.has(t[i]) ) tHash.set(t[i], i);

        if (sHash.get(s[i]) !== tHash.get(t[i])) return false

        i++;
    }

    return true;
};