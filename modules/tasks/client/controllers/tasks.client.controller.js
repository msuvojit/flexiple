(function () {
  'use strict';

  // Tasks controller
  angular
    .module('tasks')
    .controller('TasksController', TasksController);

  TasksController.$inject = ['$scope', '$state', '$window', 'Authentication', 'taskResolve'];

  function TasksController ($scope, $state, $window, Authentication, task) {
    var vm = this;

    vm.authentication = Authentication;
    vm.task = task;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    console.log('inside taskcontroller funciton');

    // Remove existing Task
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.task.$remove($state.go('tasks.list'));
      }
    }

    // Save Task
    function save(isValid) {
      console.log(isValid);
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.taskForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.task._id) {
        vm.task.$update(successCallback, errorCallback);
      } else {
        console.log("inside else condition");
        vm.task.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('tasks.view', {
          taskId: res._id
        });
      }

      function errorCallback(res) {
        console.log(res);
        vm.error = res.data.message;
      }
    }
  }
}());
