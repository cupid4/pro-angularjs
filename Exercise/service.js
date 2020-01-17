angular.module('todo').factory('todoStorage', function () {
    var TODO_DATA = 'TODO_DATA';
    var storage = {
        todos: [
            // {
            //     title: '요가수련',
            //     completed: false,
            //     createdAt: Date.now()
            // },
            // {
            //     title: '앵귤러 학습',
            //     completed: true,
            //     createdAt: Date.now()
            // },
            // {
            //     title: 'HTML 학습',
            //     completed: false,
            //     createdAt: Date.now()
            // }
        ],

        _saveToLocalStorage: function(data) {
            localStorage.setItem(TODO_DATA, JSON.stringify(data));
        },

        _getFromLocalStorage: function() {
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },

        get: function () {
            // storage.todos = storage._getFromLocalStorage();
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },

        remove: function (index) {
            storage.todos.splice(index,  1);
            storage._saveToLocalStorage(storage.todos);
        },

        add:function (newTodoTitle) {
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            }
            storage.todos.push(newTodo);

            storage._saveToLocalStorage(storage.todos);

            storage.newTodoTitle = "";
        },

        update:function () {
            storage._saveToLocalStorage(storage.todos);
        }

    }

    return storage;
});