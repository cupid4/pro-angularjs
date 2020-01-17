angular.module('todo').controller('TodoCtrl', ['$scope', 'todoStorage', function ($scope, todoStorage) {

    $scope.todos = todoStorage.get();

    $scope.todo = {
        title: '요가수련',
        completed: false,
        createdAt: Date.now()
    }


    $scope.removeMyItem = function (todoItem, index) {
        todoStorage.remove(index);
    }

    $scope.add = function (newTodoTitle) {
        todoStorage.add(newTodoTitle);
    }

    $scope.update = function () {
        todoStorage.update();
    }

}]);
