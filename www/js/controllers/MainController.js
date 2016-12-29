/**
 * Created by igor on 07.11.16.
 */
app.controller('MainController', function ($scope, $state) {

  $scope.persons = [];
  var data = window.localStorage.getItem('persons');
  if (data != null) {
    $scope.persons = JSON.parse(data);
  }

  $scope.save = function save() {
    window.localStorage.setItem('persons', JSON.stringify($scope.persons));
  };

  $scope.$on('$stateChangeSuccess', function () {

    if ($state.params.id != undefined) {
      $scope.persons = JSON.parse(window.localStorage.getItem('persons'));//todo do it perfectly (don't show change in view before reload)
      $scope.id = $state.params.id;
      $scope.person = $scope.persons[$scope.id];
      if ($state.params.eventID != undefined) {
        $scope.eventID = $state.params.eventID;
        $scope.event = $scope.persons[$scope.id].events[$scope.eventID];
        $scope.event.dateEnd = new Date($scope.event.dateEnd);
        $scope.event.dateStart = new Date($scope.event.dateStart);
      } else {
        $scope.event = {};
      }
    } else {
      $scope.person = {};
    }

  });
});
