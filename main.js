angular.module('epsilon-web', ['ui.router', 'ngMaterial'])
.config(function($urlRouterProvider){
  'use strict';
  $urlRouterProvider.otherwise('/');
});
