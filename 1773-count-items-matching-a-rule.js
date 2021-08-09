/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    const k = (ruleKey==='color' || ruleKey==='name') ? 
          (ruleKey==='name' ? 2 : 1) : 0;
    let m = 0;
    items.forEach((item) => {
        if(item[k]===ruleValue) m++;
    });
    return m;
};