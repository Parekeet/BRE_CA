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
    vm.checkProperty = checkProperty;

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

    //CHECK PROPERTY
    function checkProperty() {
      var AddressLine1 = vm.newProperty.address1;
      var AddressLine2 = vm.newProperty.address2;
      var bloop = {
        "AddressLine1" : AddressLine1,
        "AddressLine2" : AddressLine2
      }
      function encodeAddressURI(str){
        return encodeURI(str).replace(/%20/g, "+");
      }
      $http
        .get('https://www.yaddress.net/api/address/?AddressLine1='+encodeAddressURI(bloop.AddressLine1)+'&AddressLine2='+encodeAddressURI(bloop.AddressLine2))
        .then(function(res){
          console.log(res);
          console.log(bloop);
        }, function(err){
          console.log(err);
        });
    }
    ////////////////

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
