/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let prev = '';
    let count0 = 0;
    let count1 = 0;
    let substr = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==='0') {
            if(prev==='1') {
                substr += Math.min(count0, count1);
                count0 = 0;
            }
            count0++;
        }
        if(s[i]==='1') {
            if(prev==='0') {
                substr += Math.min(count0, count1);
                count1 = 0;
            }
            count1++;
        }
        prev = s[i];
    }
    substr += Math.min(count0, count1);
    return substr;
};