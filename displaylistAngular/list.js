angular.module('deleteApp', [])
    .controller('DeleteController', ['$scope', function($scope) {

        $scope.list = [];

        $scope.initItem = function() {
            $scope.list = [];

            for(i=0; i<1000; i++){
                $scope.list.push({name: "Angular", level : 4, category: "Developpement"});
                $scope.list.push({name: "Musique", level : 3, category: "Loisirs"});
                $scope.list.push({name: "Espagnol", level : 2, category: "Langues"});
            }
        }

        $scope.changeName = function(item) {
            item.name = "Sport";
        };

    }]);