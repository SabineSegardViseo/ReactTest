angular.module('cartApp', [])
    .controller('CartController', ['$scope', function($scope) {

        $scope.services = [
            { name: 'Web Development', price: 300, active: false },
            { name: 'Design', price: 400, active: false },
            { name: 'Integration', price: 250, active: false },
            { name: 'Training', price: 220, active: false }
        ];

        $scope.total = 0.00;

        $scope.handleClick = function(service) {
            service.active = !service.active;

            // Notify the ServiceChooser, by calling its addTotal method
            $scope.addTotal(service);

        };

        $scope.addTotal = function(service) {
            if(service.active) {
                $scope.total += service.price;
            }else {
                $scope.total -= service.price;
            }
        };

        $scope.isActive = function(service) {
            if(service.active){
                return true;
            }else {
                return false;
            }
        };


    }]);