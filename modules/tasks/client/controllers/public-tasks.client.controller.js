(function() {
  'use strict';

  angular
    .module('tasks')
    .controller('PublicTasksController', PublicTasksController);

  PublicTasksController.$inject = ['PublicTasksService'];

  function PublicTasksController(PublicTasksService) {
    var vm = this;

    vm.tasks = PublicTasksService.query();
    // console.log(vm.tasks);

    /*
    // Public tasks controller logic
    $http.get('http://localhost:3000/api/tasks/public').
    then(function(response) {
      console.log(response.data);
      vm.tasks = response.data;
    });
    */
  }
})();
