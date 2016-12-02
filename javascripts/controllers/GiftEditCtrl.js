"use strict";

app.controller("GiftEditCtrl", function($scope, $location, $routeParams, GiftFactory){
   $scope.newGift = {}; //!!calling below!!
   let itemId = $routeParams.id;

  GiftFactory.getSingleItem(itemId).then(function(itemToEdit){
    // **ADD LOGIC HERE**

  });
  $scope.addNewItem = function(){  //even though this is edit, you MUST use addnewItem()
    GiftFactory.editItem($scope.newTask).then(function(response){
      $scope.newGift = {};
      $location.url(" ");

    });
  };

});