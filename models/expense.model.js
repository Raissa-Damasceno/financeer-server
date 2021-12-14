const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema (
    {
        description: { type: String, required: true },
        value: { type: Number, required: true},
        date: { type: Date, default: Date.now },
        category: {
            type: String,
            enum: [ "Home", "Education", "Entertainment", "Restaurant and bar", "Health", "Pets", "Groceries", "Shopping", "Subcriptions", "Transportation", "Travel", "Others",]
            }
    }
)

const Expenses = mongoose.model('Expenses', expensesSchema)

module.exports = Expenses;