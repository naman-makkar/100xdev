// account transactions 
// auth > session > session start > transaction start > amount , to > account find using user id > balance and account verify of sender
// receiver account exist verify > transaction perform > update one 

const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

console.log('Account router loaded');

// Test route to check if the router is working
router.get("/check", (req, res) => {
    res.json({ msg: "isks" });
});

// Get balance route
router.get('/balance', authMiddleware, async (req, res) => {
    console.log("Fetching balance for user...");

    // Log the userId from the middleware
    console.log("Authenticated user ID:", req.userId);

    try {
        // Check if req.userId is a valid ObjectId string
        if (!mongoose.Types.ObjectId.isValid(req.userId)) {
            throw new Error("Invalid userId format");
        }

        // Convert req.userId to ObjectId
        const userId = new mongoose.Types.ObjectId(req.userId);
        console.log("Fetching balance for user with ObjectId:", userId);

        // Fetch the account from the database
        const account = await Account.findOne({ userId: userId });

        // Log the result of the database query
        console.log("Account found:", account);

        // Check if the account exists
        if (!account) {
            console.log("Account not found for user ID:", req.userId);
            return res.status(404).json({ msg: "Account not found" });
        }

        // Log the balance being returned
        console.log("Returning balance:", account.balance);

        // Return the balance
        res.json({ balance: account.balance });
    } catch (error) {
        // Log any error that occurs during the process
        console.error("Error fetching balance:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

// Transfer route
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;
    console.log("Initiating transfer of amount:", amount, "to account:", to);

    try {
        // Check if req.userId and to are valid ObjectId strings
        if (!mongoose.Types.ObjectId.isValid(req.userId) || !mongoose.Types.ObjectId.isValid(to)) {
            throw new Error("Invalid userId or to account format");
        }

        // Convert req.userId and to to ObjectId
        const fromUserId = new mongoose.Types.ObjectId(req.userId);
        const toUserId = new mongoose.Types.ObjectId(to);

        // Fetch sender account
        const fromAccount = await Account.findOne({ userId: fromUserId }).session(session);
        if (!fromAccount || fromAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ msg: "Insufficient balance" });
        }

        // Fetch receiver account
        const toAccount = await Account.findOne({ userId: toUserId }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ msg: "Invalid TO account" });
        }

        // Perform the transfer
        await Account.updateOne({ userId: fromUserId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: toUserId }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({ msg: "Transaction successful" });
    } catch (error) {
        console.error("Error during transaction:", error);
        await session.abortTransaction();
        res.status(500).json({ msg: "Internal server error" });
    } finally {
        session.endSession();
    }
});

module.exports = router;
