/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let r = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
        if(strs[0][i] !== strs[j][i]) return r
    }
    r+=strs[0][i];
  }
  return r;
};

longestCommonPrefix(["flower", "flow", "flight"]);
