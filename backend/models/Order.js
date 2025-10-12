const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    
    products: {
        type: Array,
        required: true,
        // unique: true,
    },
    user: {
        type: Object,
        required: true,
    },
    
})

module.exports = mongoose.model("Order", OrderSchema)