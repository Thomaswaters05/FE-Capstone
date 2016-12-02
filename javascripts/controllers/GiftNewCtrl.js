"use strict";

app.controller("GiftNewCtrl", function($scope, $rootScope, $location, GiftFactory){
  $scope.newGift = {}; // this is making a "new task" and assigning it an empty object

  $scope.addNewItem = function(){
    $scope.newGift.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newGift.uid = $rootScope.user.uid;
    GiftFactory.postNewItem($scope.newGift).then(function(itemId){
      $location.url("/items/list");
      $scope.newGift = {};
    });
  };


});