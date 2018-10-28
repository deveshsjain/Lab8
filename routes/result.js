const express = require("express");
const router = express.Router();
const data = require("../data");
const palindromeData = data.palindrome;

router.get("/", (req, res) => {
    res.render('welcome/index');
});

router.post("/result", async (req, res) => {
    let palindromeInput = req.body;

    if (!palindromeInput.text_to_test) {
        res.status(400).send({ error: "Please provide data" });
        return;
    }

    try {
        const newPal = await palindromeData.checkPalindrome(palindromeInput.text_to_test);
        res.render('welcome/result', { check: newPal });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});


module.exports = router;
