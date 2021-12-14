const express = require("express");
const router = express.Router();
const Expense = require("../../models/expense.model");
const mongoose = require("mongoose");

//create expense
router.post("/api/expenses", async (req, res, next) => {
  try {
    const { description, value, date, category } = req.body;
    console.log(req.body);

    const createdExpense = await Expense.create({
      description,
      value,
      date,
      category,
    });

    res.status(201).json(createdExpense);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all expense
router.get("/api/expenses", async (req, res, next) => {
  try {
    const allExpenses = await Expense.find();

    res.status(200).json(allExpenses);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a specific expense
router.get("/api/expenses/:expensesId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(expensesId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }

    const { expensesId } = req.params;

    const oneExpense = await Expense.findById(expensesId);


    res.status(200).json(oneExpense);
  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT - put Update a specific expense
router.put("/api/expenses/:expensesId", async (req, res, next) => {
  try {
    
    const { expensesId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(expensesId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }
    
    const { description, value, date, category } = req.body;

    const updateExpense = await Expense.findByIdAndUpdate(
      expensesId,
      { description, value, date, category },
      { new: true }
    );

    res.status(200).json(updateExpense);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE - delete a specific expense
router.delete("/api/expenses/:expensesId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(expensesId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }
    const { expensesId } = req.params;

    await Expense.findByIdAndDelete(expensesId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
