const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const investmentsSchema = new Schema({
  asset: String,
  cost: String,
  shares: String,
  price: String,
  value: String,
  change: String,
});

const Investment = mongoose.model("Investment", investmentsSchema);

module.exports = Investment;
