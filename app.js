"use strict"
console.log("start");

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
    $scope.message = "Hello, It's me";
    $scope.people = [
        {
            name: "Peter"
            , age: 20
    }




        
        , {
            name: "Jim"
            , age: 30
    }





        
        , {
            name: "Maria"
            , age: 15
    }





        
        , ];

    $scope.isFilled = function () {
        return $scope.name && $scope.age;
    };

    $scope.addPerson = function () {
        console.log("Botón pulsado");

        var person = {
            name: $scope.name
            , age: $scope.age
        };
        $scope.people.push(person);
    };
    $scope.buttonClass = function () {
        if ($scope.isFilled()) {
            return "enabled";
        } else {
            return "disabled";
        }
    };


});