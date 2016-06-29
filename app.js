"use strict"
console.log("start");

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
    $scope.message = "Hello, It's me";
});