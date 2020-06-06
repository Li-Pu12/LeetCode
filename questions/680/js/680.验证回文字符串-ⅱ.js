/**
 * @param {string} s
 * @return {boolean}
 * time: 112ms space: 43.2MB
 */
var validPalindrome = function(s) {
    let deleteFlag = false;
    const test = (str, start, end) => {
        if(start >= end) return true;
        else if(str[start] === str[end]) return test(str, start+ 1, end-1);
        else if(!deleteFlag) {
            deleteFlag = true;
            return test(str, start + 1, end) || test(str, start, end -1);
        }else{
            return false;
        }
    }
    return test(s, 0, s.length -1);
};