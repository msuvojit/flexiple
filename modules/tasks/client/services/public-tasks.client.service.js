// Public Tasks service used to communicate Tasks REST endpoints
(function () {
  'use strict';

  angular
    .module('tasks')
    .factory('PublicTasksService', PublicTasksService);

  PublicTasksService.$inject = ['$resource'];

  function PublicTasksService($resource) {
    //console.log("just for check");
    return $resource('/api/tasks/public');
  }
}());
