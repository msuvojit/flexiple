'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Task name',
    trim: true
  },
  deadline: {
    type: Date,
    required: 'Please fill deadline'
  },
  description: {
    type: String,
    default: '',
    required: 'Please provide description',
    trim: true
  },
  tasktype: {
    type: String,
    default: 'private task',
    required: 'Task type is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Task', TaskSchema);
