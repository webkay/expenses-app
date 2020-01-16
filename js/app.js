var app = angular.module('expensesApp', []);

app.controller('ExpensesViewController', ['$scope', function ($scope) {
  $scope.phrase = "Hello Moto";
  $scope.expense = {
    description: "sprout",
    amount: 20
  };
  $scope.incrementAmount = function () {
    $scope.expense.amount++;
  };
}]);
