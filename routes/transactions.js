const express = require("express");
const Transactions = require("../models/transactions");
const router = express.Router();


router.route("/:id").get(async (req, res) => {
    const id = req.params.id;
    const transaction = await Transactions.findById(id);
    res.json(transaction);
});

router.post("/", (req, res) => {
    const transaction = req.body;
    Transactions.create(transaction);
    Transactions.save();
    res.json(transaction);
});

module.exports = router;