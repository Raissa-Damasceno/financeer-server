const mongoose = require("mongoose");
const Schema = mongoose.Schema

const investmentsSchema = new Schema (
    {
        stocks: {type: String, required: true}, 
        amount: {type:Number, required: true}, 
        purchasePrice: {type:Number, required: true},
        priceOfTheDay: {type:Number, required: true}

    }
) 

const Investment = mongoose.model('Investment', investmentsSchema)

module.exports = Investment;