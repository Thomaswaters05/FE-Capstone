"use strict";

app.controller("GiftNewCtrl", function($scope, $rootScope, $location, FriendFactory, WishListFactory){
  $scope.newGift = {}; // this is making a "new task" and assigning it an empty object

  $scope.addNewItem = function(){
    $scope.newGift.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newGift.uid = $rootScope.user.uid;
    FriendFactory.postNewItem($scope.newGift).then(function(itemId){
      $location.url("/gift-list");
      $scope.newGift = {};
    });


    };

  $scope.addGifts = function(){
    $scope.newGift.isCompleted = false;
    $scope.newGift.uid = $rootScope.user.uid;
    WishListFactory.postNewItem($scope.newGift).then(function(itemId){
      $location.url("#/wishlist:{{item.assignedTo}}");     //NO CLUE IF THIS WORKS- TRYING TO PASS ADD DATA TO USER LIST
      $scope.newGift = {};
    });


    };


  });



