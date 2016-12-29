/**
 * Created by igor on 27.12.16.
 */
app.controller('personController', function ($scope, $state) {

  $scope.filter = function (person, filter) {
    if (!filter) {
      return true;
    }
    var fullName = person.name.first + ' ' + person.name.last;
    if (fullName.includes(filter)) {
      return true;
    } else {
      return false;
    }
  };

  $scope.addPerson = function (person) {
    $scope.persons.push(person);
    $scope.save($scope.persons);
    $state.go('app.person_list');
  };

  $scope.viewPerson = function (id) {
    $state.go('app.person_view', {id: id});
  };

  $scope.updatePerson = function (id, person) {
    $scope.persons[id]['name'] = person.name;
    $scope.save($scope.persons);
    $state.go('app.person_list');
  };

  $scope.deletePerson = function (index) {
    $scope.persons.splice(index, 1);
    $scope.save($scope.persons);
    $state.go('app.person_list');
  };

})
;
