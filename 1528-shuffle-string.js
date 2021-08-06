/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let str = Array(indices.length).map(() => '');
    for(let i=0;i<indices.length;i++) {
        const l = s[i];
        const x = indices[i];
        str[x] = l;
    }
    return str.join('');
};