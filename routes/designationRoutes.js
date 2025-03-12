const express = require('express');
const router = express.Router();
const Designation = require('../models/Designation');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newDesignation = new Designation(req.body);
        const savedDesignation = await newDesignation.save();
        res.status(201).json(savedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const designations = await Designation.find();
        res.json(designations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const designation = await Designation.findById(req.params.id);
        if (!designation) return res.status(404).json({ message: 'Designation not found' });
        res.json(designation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedDesignation = await Designation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedDesignation) return res.status(404).json({ message: 'Designation not found' });
        res.json(updatedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedDesignation = await Designation.findByIdAndDelete(req.params.id);
        if (!deletedDesignation) return res.status(404).json({ message: 'Designation not found' });
        res.json({ message: 'Designation deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
