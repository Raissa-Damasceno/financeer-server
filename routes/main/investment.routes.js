const express = require("express");
const router = express.Router();
const Investments = require("../../models/investment.model");
const mongoose = require("mongoose");

// POST - create investment
router.post("/api/investments", async (req, res, next) => {
  try {
    const { asset, cost, shares, price, value, chance } = req.body;

    const createdInvestment = await Investments.create({
      asset, cost, shares, price, value, chance
    });

    res.status(201).json(createdInvestment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET - get all investments
router.get("/api/investments", async (req, res, next) => {
  try {
    const allInvestments = await Investments.find();

    res.status(200).json(allInvestments);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET - get a specific investments
router.get("/api/investments/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(investmentId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }


    const oneInvestment = await Investments.findById(investmentId);

    res.status(200).json(oneInvestment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT - put Update a specific investment
router.put("/api/investments/:investmentId", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(investmentId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }

    const { investmentId } = req.params;

    const {  aasset, cost, shares, price, value, chance } = req.body;

    const updateInvestment = await Investments.findByIdAndUpdate(
      investmentId,
      {  asset, cost, shares, price, value, chance },
      { new: true }
    );

    res.status(200).json(updateInvestment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE - delete a specific investment
router.delete("/api/investment/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(investmentId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }


    await Investments.findByIdAndDelete(investmentId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
