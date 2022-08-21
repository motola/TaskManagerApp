const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/taskController')


// Get All task
router.get('/', (req, res) => {
    res.json('Gotten All task')
});

// Get one task

router.get('/:id', (req, res) => {
    res.json('Gotten one task')
});

// Create a task

router.post('/', createTask);

// Task updated

router.put('/:id',(req, res) => {
    res.json('task updated')
});


router.delete('/:id',(req, res) => {
    res.json('task deleted')
});


module.exports = router