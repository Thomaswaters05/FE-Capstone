"use strict";

app.controller("GiftEditCtrl", function($scope, $location, $routeParams, FriendFactory, WishListFactory){
   $scope.newGift = {}; //!!calling below!!
   let friendId = $routeParams.id;

  FriendFactory.getSingleItem(friendId).then(function(itemToEdit){
    itemToEdit.id = itemId;
    $scope.newTask = itemToEdit;

  });
  $scope.addNewGift = function(){  //even though this is edit, you MUST use addnewItem()
    FriendFactory.editItem($scope.newGift).then(function(response){
      $scope.newGift = {};
      $location.url("/wishlist");

    });
  };

});




