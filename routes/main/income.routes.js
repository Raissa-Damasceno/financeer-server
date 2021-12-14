const express = require("express");
const router = express.Router();
const Income = require("../../models/income.model");
const mongoose = require("mongoose");

//create income
router.post("/api/income", async (req, res, next) => {
  try {
    const { description, value, date, category } = req.body;

    const createdIncome = await Income.create({
      description,
      value, 
      date,
      category,
    });

    res.status(201).json(createdIncome);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all income
router.get("/api/income", async (req, res, next) => {
  try {
    const allIncome = await Income.find();

    res.status(200).json(allIncome);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a specific income
router.get("/api/income/:incomeId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(incomeId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }
    const { incomeId } = req.params;

    const oneIncome = await Income.findById(incomeId);

    res.status(200).json(oneIncome);
  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT - put Update a specific income
router.put("/api/income/:incomeId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(incomeId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }
    const { incomeId } = req.params;

    const { description, value, date, category } = req.body;

    const updateIncome = await Income.findByIdAndUpdate(
      incomeId,
      { description, value, date, category },
      { new: true }
    );

    res.status(200).json(updateIncome);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE - delete a specific income
router.delete("/api/income/:incomeId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(incomeId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }
    const { incomeId } = req.params;

    await Income.findByIdAndDelete(incomeId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
