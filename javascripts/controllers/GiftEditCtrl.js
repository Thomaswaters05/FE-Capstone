"use strict";

app.controller("GiftEditCtrl", function($scope, $location, $routeParams, FriendFactory){
   $scope.newGift = {}; //!!calling below!!
   let friendId = $routeParams.id;

  FriendFactory.getSingleItem(friendId).then(function(itemToEdit){
    // **ADD LOGIC HERE**

  });
  $scope.addNewFriend = function(){  //even though this is edit, you MUST use addnewItem()
    FriendFactory.editItem($scope.newTask).then(function(response){
      $scope.newGift = {};
      $location.url("/gift-edit");

    });
  };

});




