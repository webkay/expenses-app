var app = angular.module('expensesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses/new', {
      templateUrl: 'views/expenses-form.html',
      controller: 'ExpenseViewController'
    })
    .when('/expenses/edit/:id', {
      templateUrl: 'views/expenses-form.html',
      controller: 'ExpenseViewController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Expenses', function () {
  var service = {};

  service.entries = [
    {description: "sprout", amount: 10.001, date: '2014-10-01'},
    {description: "trader joes", amount: 11, date: '2014-10-02'},
    {description: "albertson", amount: 12, date: '2014-10-03'},
    {description: "vons", amount: 13, date: '2014-10-04'},
    {description: "rite aid", amount: 14, date: '2014-10-05'},
    {description: "pavilion", amount: 15, date: '2014-10-06'}
  ];

  return service;
});

app.controller('HomeViewController', ['$scope', function ($scope) {
  $scope.appTitle = "Simple Expenses Tracker";
}]);

app.controller('ExpensesViewController', ['$scope', 'Expenses', function ($scope, Expenses) {
  $scope.expenses = Expenses.entries;
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', 'Expenses', function ($scope, $routeParams, Expenses) {
  $scope.someText = "Hello I am Mac Mini. ID = " + $routeParams.id + " " + Expenses.entries[0].description;
}]);
