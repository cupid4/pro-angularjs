angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1> ToDo 목록 </h1>'
    }
});

angular.module('todo').directive('todoItem', function () {
    return {

        templateUrl: 'todoItem.tpl.html'
        // template:'<div class="input-group col">' +
        //     '                    <div class="input-group-prepend">' +
        //     '                        <div class="input-group-text">' +
        //     '                            <input type="checkbox" aria-label="Checkbox for following text input"' +
        //     '                                   ng-model="todo.completed">' +
        //     '                        </div>' +
        //     '                    </div>' +
        //     '                    <input type="text" class="form-control" aria-label="Text input with checkbox" ng-model="todo.title">' +
        //     '                    <span class="input-group-btn">' +
        //     '                        <button class="btn btn-danger" type="button" ng-click="removeMyItem(todo, $index)"> 삭제 </button>' +
        //     '                    </span>' +
        //     '                    <div class="col-sm-1">' +
        //     '                        <p> {{ todo.completed }} </p>' +
        //     '                    </div>' +
        //     '                    <div class="col-sm-3">' +
        //     '                        <date> {{ todo.createdAt | date:\'yyyy-MM-dd HH:mm:ss\'}}</date>' +
        //     '                    </div>' +
        //     '                    <div class="col-sm-3">' +
        //     '                        {{ todo.title }}' +
        //     '                    </div>' +
        //     '                </div>'

    }
})