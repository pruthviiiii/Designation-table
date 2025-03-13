const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Designation = require('../models/Designation');

// CREATE a new designation
router.post('/', async (req, res) => {
    try {
        const newDesignation = new Designation(req.body);
        const savedDesignation = await newDesignation.save();
        res.status(201).json(savedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ ALL designations with optional sorting
router.get('/', async (req, res) => {
    try {
        const { sortBy, order } = req.query;  // ?sortBy=title&order=asc
        const sortField = sortBy || 'createdAt';  // Default sort by createdAt
        const sortOrder = order === 'desc' ? -1 : 1;  // asc (1) or desc (-1)

        const designations = await Designation.find().sort({ [sortField]: sortOrder });
        res.json(designations);
    } catch (error) {
        res.status(500).json({ error: 'Server Error', message: error.message });
    }
});

// READ ONE designation by ID
router.get('/:id', async (req, res) => {
    try {
        const designation = await Designation.findById(req.params.id);
        if (!designation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.json(designation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a designation by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDesignation = await Designation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns the updated document
        );
        if (!updatedDesignation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.json(updatedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a designation by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedDesignation = await Designation.findByIdAndDelete(req.params.id);
        if (!deletedDesignation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.json({ message: 'Designation deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
