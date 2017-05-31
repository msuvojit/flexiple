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
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  tasktype: {
    type: String,
    default: 'private task',
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
