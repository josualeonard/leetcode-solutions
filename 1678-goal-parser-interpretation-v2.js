/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let parsed = '';
    for(let i=0;i<command.length;i++) {
        if(command.charAt(i)==='G') {
            parsed += 'G';
        } else if(command.charAt(i)==='(') {
            if(i+1<command.length && command.charAt(i+1)===')') {
                parsed += 'o';
                i++;
            } else if(i+2<command.length && command.charAt(i+1)==='a' && command.charAt(i+2)==='l') {
                parsed += 'al';
                i+=3;
            }
        }
    }
    return parsed;
};