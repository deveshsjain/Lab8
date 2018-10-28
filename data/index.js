const palindromeData = require('./palindrome');

let checkMethod = (app) => {
    app.use("/", palindromeData);
};

module.exports = {
    palindrome: palindromeData
};