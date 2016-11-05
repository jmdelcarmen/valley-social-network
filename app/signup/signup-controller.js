(function () {
  angular.module('ValleyChat')
    .controller('SignUpController', ['$scope', '$state', "$http", function ($scope, $state, $http){
        $scope.createUser = function () {
            console.log($scope.newUser);
            $http.post('api/user/signup', $scope.newUser).success(function () {
            }).error(function (error) {
              console.log(error);
            })
        }
    }]);
}());

console.log('hi');
