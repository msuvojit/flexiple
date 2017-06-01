'use strict';

/**
 * Module dependencies
 */
var tasksPolicy = require('../policies/tasks.server.policy'),
  tasks = require('../controllers/tasks.server.controller');

module.exports = function(app) {
  // Tasks Routes which will show all tasks
  app.route('/api/tasks').all(tasksPolicy.isAllowed)
    .get(tasks.list)
    .post(tasks.create);

  // Tasks Routes which will show all tasks
  app.route('/api/tasks/public').all(tasksPolicy.isAllowed)
    .get(tasks.publicList);

  app.route('/api/tasks/:taskId').all(tasksPolicy.isAllowed)
    .get(tasks.read)
    .put(tasks.update)
    .delete(tasks.delete);

  // Finish by binding the Task middleware
  app.param('taskId', tasks.taskByID);
};
