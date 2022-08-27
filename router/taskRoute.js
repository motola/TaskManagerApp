const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, createTask, deleteById, updateById } = require('../controllers/taskController')


// Get All task
router.get('/', getAllTasks);

// Get one task

router.get('/:id', getTaskById);

// Create a task

router.post('/', createTask);

// Task updated

router.put('/:id', updateById);


router.delete('/:id', deleteById);


module.exports = router