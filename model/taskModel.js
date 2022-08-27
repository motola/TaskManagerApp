const mongoose = require('mongoose');



const taskSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   todoList: [
    {
        type: [
            {
            type: String
            }
        ]
    }
   ],
   taskDay:{
    type: String,
    required: true
   },
   isComplete:[
    {
        type: String
    }
   ],
   
   
    }, 
    {
        timestamps: true
    }) 


module.exports = mongoose.model('Task', taskSchema);
