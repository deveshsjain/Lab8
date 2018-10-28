const mongoCollections = require("../config/mongoCollections");
const palindrome = mongoCollections.palindrome;
const uuid = require("node-uuid");

let exportedMethods = {
    checkPalindrome(phrase) {

        var re = /[\W_]/g;
        var lowRegStr = phrase.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        if (reverseStr === lowRegStr)
        return true;
        else
        return false;
    }
}
module.exports = exportedMethods;
