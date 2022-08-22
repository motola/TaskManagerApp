const mongoose = require('mongoose');

const Task = require('../model/taskModel')



// Get All Tasks
const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks)
};


// Get Task BY Id

const getTaskById = async (req, res) => {
    

  try {
    const getTask = await Task.findById({_id: req.params.id});    
       res.json(getTask);
        
    }
    catch (err) {
        res.status(500).json({err: 'Wrong Task Id'})
    }
      
      
}

// Create New Tasks
const createTask = async (req, res) => {
    const  {title, todoList, taskDay, isComplete} = req.body
    const task = new Task({
     title: title,
     todoList: todoList,
     taskDay: taskDay,
     isComplete: isComplete
    }); 
 
    if ((!title || !todoList || !taskDay || !isComplete)) {
     res.status(400).json('Please add necessary fields')
    }
 
    await task.save();
    res.status(200).json(task); 
 }

 // Delete a task

 const deleteById = async (req, res) => {

    const { id } = req.params
   const justDeleted = await Task.findOneAndRemove({id})
   res.json({deleted: 'Now Empty', justDeleted });
 }

// Update a Task
 const updateById = async (req, res) => {
    const { id } = req.params

   const justUpdated = await Task.findOneAndUpdate(id, req.body, {
    new: true,
   })
   res.json({justUpdated});
    
 }




 module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteById,
    updateById
    
 }