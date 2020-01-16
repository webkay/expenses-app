var app = angular.module('expensesApp', ['ngRoute']);

app.controller('HomeViewController', ['$scope', function ($scope) {
  $scope.appTitle = "Simple Expenses Tracker";
}]);

app.controller('ExpensesViewController', ['$scope', function ($scope) {
  $scope.expenses = [
    {description: "sprout", amount: 10.001, date: '2014-10-01'},
    {description: "trader joes", amount: 11, date: '2014-10-02'},
    {description: "albertson", amount: 12, date: '2014-10-03'},
    {description: "vons", amount: 13, date: '2014-10-04'},
    {description: "rite aid", amount: 14, date: '2014-10-05'},
    {description: "pavilion", amount: 15, date: '2014-10-06'}
  ];
}]);
