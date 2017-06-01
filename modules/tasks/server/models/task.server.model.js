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
    required: 'Please fill Task name',
    trim: true
  },
  deadline: {
    type: Date
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  tasktype: {
    type: String
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
