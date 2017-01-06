var todo = angular.module('todoApp');

todo.controller('TodoController', ['$scope', function($scope) {

	$scope.newTodo = '';
	$scope.savedTodos = localStorage.getItem('todos');
	$scope.todos = ($scope.savedTodos) ? JSON.parse($scope.savedTodos) : [];	

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.newTodo,
			done: false,
			createdAt: new Date()
		});		
		localStorage.setItem('todos', JSON.stringify($scope.todos));
		$scope.newTodo = '';
	}

	$scope.removeTodo = function(index) {		
		$scope.todos.splice(index, 1);
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	}

	$scope.todoCompleted = function(todo, index) {
		$scope.todos.slice(index, 1);
		localStorage.setItem('todos', JSON.stringify($scope.todos));		
	}

}])