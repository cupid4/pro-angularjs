(function () {
    var app = angular.module('todo', [])

    app.controller('TodoCtrl', ['$scope', function ($scope) {
        $scope.todo = {
            title: '요가수련',
            completed: false,
            createdAt: Date.now()
        }


        $scope.todos = [
            {
                title: '요가수련',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '앵귤러 학습',
                completed: true,
                createdAt: Date.now()
            },
            {
                title: 'HTML 학습',
                completed: false,
                createdAt: Date.now()
            }
        ]

        $scope.removeMyItem = function (todoItem, index) {
            // var idx = $scope.todos.findIndex(function (item) {
            //     return item.id === todoItem.id;
            // })
            // if(idx > -1) {
            //     $scope.todos.splice(idx, 1);
            // }

            $scope.todos.splice(index,  1);
        }

        // $scope.newTodoTitle = function () {
        //
        // }

        $scope.add = function (newTodoTitle) {
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            }
            $scope.todos.push(newTodo);

            $scope.newTodoTitle = "";
        }

    }]);

})();