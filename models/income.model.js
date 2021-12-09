const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema ({ 

    description: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { 
        type: String, 
        enum: ["Investments", "Loans", "Salary", "Other earnings"] 
    },
    imageUrl: { type: String}
})

const Income = mongoose.model('Income', incomeSchema)

module.exports = Income;