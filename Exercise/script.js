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

    app.directive('todoTitle', function () {
       return {
           template: '<h1> ToDo 목록 </h1>'
       }
    });

    app.directive('todoItem', function () {
        return {
            template:'<div class="input-group col">' +
                '                    <div class="input-group-prepend">' +
                '                        <div class="input-group-text">' +
                '                            <input type="checkbox" aria-label="Checkbox for following text input"' +
                '                                   ng-model="todo.completed">' +
                '                        </div>' +
                '                    </div>' +
                '                    <input type="text" class="form-control" aria-label="Text input with checkbox" ng-model="todo.title">' +
                '                    <span class="input-group-btn">' +
                '                        <button class="btn btn-danger" type="button" ng-click="removeMyItem(todo, $index)"> 삭제 </button>' +
                '                    </span>' +
                '                    <div class="col-sm-1">' +
                '                        <p> {{ todo.completed }} </p>' +
                '                    </div>' +
                '                    <div class="col-sm-3">' +
                '                        <date> {{ todo.createdAt | date:\'yyyy-MM-dd HH:mm:ss\'}}</date>' +
                '                    </div>' +
                '                    <div class="col-sm-3">' +
                '                        {{ todo.title }}' +
                '                    </div>' +
                '                </div>'

        }
    })

})();