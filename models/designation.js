const mongoose = require('mongoose');

const DesignationSchema = new mongoose.Schema({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Designation', DesignationSchema, 'designations');

