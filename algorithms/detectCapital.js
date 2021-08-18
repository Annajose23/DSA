// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.


/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    let capitalCount = 0;
    for(let i = 0; i<word.length; i++){
        const char = word[i];
        if(char === char.toUpperCase()){
            capitalCount++;
        }
    }
    
    return word.length === capitalCount || 
           capitalCount === 0 ||
           (capitalCount === 0 && word[0] === word[0].toUpperCase())
};