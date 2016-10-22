(function() {
  "use strict";

  angular
    .module("app")
    .controller("EstimatePropertyCtrl", EstimatePropertyCtrl);

  EstimatePropertyCtrl.$inject = ["$log", "$http", "$scope"];

  function EstimatePropertyCtrl ($log, $http, $scope) {
    var vm = this;

    vm.all = [];
    vm.addProperty = addProperty;
    vm.newProperty = {};
    vm.deleteProperty = deleteProperty;

    //THIS IS WHAT ALLOWS ANGULAR TO COMMUNICATE WITH BACKEND
    //CONTINUE CRUD
    function fetch(){
      $http.get('http://localhost:8080/api/properties')
      .then(function(response){ $scope.details = response.data; });
    }

    getProperties();

    //Another way to call GET
    function getProperties() {
      $http
        .get('http://localhost:8080/api/properties')
        .then(function(res){
          vm.all = (res.data.properties);
        }, function(err){
          console.log(err);
        });
    }

    //Adding Property
    function addProperty(){
      $http
        .post('http://localhost:8080/api/properties', vm.newProperty)
        .then(function(res){
          vm.all.push(res.data.property);
          vm.newProperty = {};
      }, function(err){
        console.log(err);
      });
    }

    //Deleting Property
    function deleteProperty(){
      var id = rmProperty._id;
      $http
        .delete('http://localhost:8080/api/properties/{$id}')
        .then(function(res) {
          console.log(res.data.message);
          vm.all = vm.all.filter(function(prop) {
            return prop._id != id;
          })
        },
        function(err) {
          console.log(err);
        });
    }

  };

})();
