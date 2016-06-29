console.log("start!");
var mySpotify = angular.module('mySpotify', []);

mySpotify.controller('SpotifyController', function ($scope, $http) {
    $scope.message = "hello, it's me";

    $scope.search = function () {

        console.log("Searching...");


        $http({
            method: 'GET'
            , url: 'https://api.spotify.com/v1/search'
            , params: {
                type: 'artist'
                , q: $scope.artist
            }
        }).then(function successCallback(response) {
            console.log("OK!", response.data);
            $scope.artists = response.data.artists.items;
        }, function errorCallback(response) {
            console.lo("error!");
        });
    }
});