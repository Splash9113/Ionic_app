/**
 * Created by igor on 27.12.16.
 */
app.controller('eventController', function ($scope, $state) {

  $scope.filter = function (event, filter) {
    if (!filter) {
      return true;
    }
    var eventFields = event.name + ' ' + event.value;
    if (eventFields.includes(filter)) {
      return true;
    } else {
      return false;
    }
  };

  $scope.addEvent = function (event) {
    if (!$scope.persons[$scope.id].events) {
      $scope.persons[$scope.id].events = [];
    }
    $scope.persons[$scope.id].events.push(event);
    $scope.save($scope.persons);
    $state.go('app.event_list', {id: $scope.id});
  };

  $scope.viewEvent = function (eventID) {
    $state.go('app.event_view', {id: $scope.id, eventID: eventID});
  };

  $scope.updateEvent = function (event) {
    $scope.persons[$scope.id].events[$scope.eventID] = event;
    $scope.save($scope.persons);
    $state.go('app.event_list', {id: $scope.id});
  };

  $scope.deleteEvent = function () {
    $scope.persons[$scope.id].events.splice($scope.eventID, 1);
    $scope.save($scope.persons);
    $state.go('app.event_list', {id: $scope.id});
  };

});
