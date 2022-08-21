const mongoose = require('mongoose');

const Task = require('../model/taskModel')



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




 module.exports = {
    createTask,
 }