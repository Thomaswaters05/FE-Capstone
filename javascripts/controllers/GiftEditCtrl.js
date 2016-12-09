"use strict";

app.controller("GiftEditCtrl", function($scope, $location, $routeParams, FriendFactory){
   $scope.newGift = {}; //!!calling below!!
   let itemId = $routeParams.id;

  FriendFactory.getSingleItem(itemId).then(function(itemToEdit){
    // **ADD LOGIC HERE**

  });
  $scope.addNewItem = function(){  //even though this is edit, you MUST use addnewItem()
    FriendFactory.editItem($scope.newTask).then(function(response){
      $scope.newGift = {};
      $location.url("/gift-edit");

    });
  };

});