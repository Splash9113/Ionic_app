// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // screen.lockOrientation('portrait');
  });
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view=""></div>',
        controller: 'MainController',
        cache: false
      })
      .state('app.person_list', {
        url: '/persons',
        templateUrl: 'person.list.html',
        controller: 'personController',
        cache: false
      })
      .state('app.person_add', {
      url: '/person/add',
      templateUrl: 'person.add.html',
      controller: 'personController',
        cache: false
      })
      .state('app.person_view', {
        url: '/person/:id',
        templateUrl: 'person.view.html',
        controller: 'personController',
        cache: false
      })
      .state('app.event_list', {
        url: '/person/:id/events',
        templateUrl: 'event.list.html',
        controller: 'eventController',
        cache: false
      })
      .state('app.event_add', {
        url: '/person/:id/event/add',
        templateUrl: 'event.add.html',
        controller: 'eventController',
        cache: false
      })
      .state('app.event_view', {
        url: '/person/:id/event/:eventID',
        templateUrl: 'event.view.html',
        controller: 'eventController',
        cache: false
      });
    $urlRouterProvider.otherwise('/persons');
});
