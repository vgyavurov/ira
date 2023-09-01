const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    oe_veryLow_low: {
        type: Number,
        required: false
    },
    oe_veryLow_high: {
        type: Number,
        required: false
    },
    oe_low_low: {
        type: Number, 
        required: false
    }, 
    oe_low_high: {
        type: Number, 
        required: false,
    },
    oe_medium_low: {
        type: Number, 
        required: false,
    },
    oe_medium_high: {
        type: Number, 
        required: false,
    },
    oe_high_low: {
        type: Number, 
        required: false,
    },
    oe_high_high: {
        type: Number, 
        required: false,
    },
    oe_veryHigh_low: {
        type: Number, 
        required: false,
    },
    oe_veryHigh_high: {
        type: Number, 
        required: false,
    },
    cs_veryLow_low: {
        type: Number, 
        required: false,
    },
    cs_veryLow_high: {
        type: Number, 
        required: false,
    },
    cs_low_low: {
        type: Number, 
        required: false,
    },
    cs_low_high: {
        type: Number, 
        required: false,
    },
    cs_medium_low: {
        type: Number, 
        required: false,
    },
    cs_medium_high: {
        type: Number, 
        required: false,
    },
    cs_high_low: {
        type: Number, 
        required: false,
    },
    cs_high_high: {
        type: Number, 
        required: false,
    },
    cs_veryHigh_low: {
        type: Number, 
        required: false,
    },
    cs_veryHigh_high: {
        type: Number, 
        required: false,
    }
    // user_id: {
    //     type: String,
    //     required: false
    // }
}, { timestamps: true });

const ConfigurationModel = mongoose.model("Configuration", configurationSchema);
module.exports = ConfigurationModel