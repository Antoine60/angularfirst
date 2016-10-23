'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
var appt = angular.module("appt", []);

appt.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});
