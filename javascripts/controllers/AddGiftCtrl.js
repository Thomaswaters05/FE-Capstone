"use strict";

app.controller("AddGiftCtrl", function($scope, $rootScope, $location, $routeParams, FriendFactory, WishListFactory){
  $scope.newGift = {};
  let friendId = $routeParams.id;

 console.log("rp", $routeParams.id);

  // Materialize.toast(message, displayLength, className, completeCallback);



  $scope.addNewGift = function(){
    $scope.newGift.isCompleted = false;
    $scope.newGift.friendId = $routeParams.id;
    WishListFactory.postGifts($scope.newGift).then(function(giftId){
      console.log("giftId", giftId);
      $location.url(`/wishlist/${$routeParams.id}`);
       Materialize.toast('Gift Added Successfully!!', 4000, 'green rounded'); //this is the url to go back to gifts list
      $scope.newGift = {};
    });


    };

  $scope.addGift = function(){
    $scope.newGift.isCompleted = false;
    WishListFactory.postGifts($scope.newGift).then(function(giftId){
      $location.url("#/wishlist:{{item.assignedTo}}");
      $scope.newGift = {};
    });


    };








  });




