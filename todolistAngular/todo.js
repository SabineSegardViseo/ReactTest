angular.module('todoApp', [])
    .controller('TodoController', ['$scope', function($scope) {

        $scope.list = [];
        $scope.newItem = '';

        $scope.addItem = function() {
            $scope.list.push($scope.newItem);
            $scope.newItem = '';
        }

    }]);