/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let c = 0;
    const jewie = {};
    for(let i=0;i<jewels.length;i++) {
        jewie[jewels[i]] = true;
    }
    for(let i=0;i<stones.length;i++) {
        if(Object.prototype.hasOwnProperty.call(jewie, stones[i])) {
            c++;
        }
    }
    return c;
};