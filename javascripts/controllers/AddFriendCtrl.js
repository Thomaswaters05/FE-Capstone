"use strict";

app.controller("AddFriendCtrl", function($scope, $rootScope, $location, FriendFactory, WishListFactory){
  $scope.newFriend = {};

  $scope.addNewFriend = function(){
    $scope.newFriend.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newFriend.hostgiver = $rootScope.user.uid;
    FriendFactory.postFriend($scope.newFriend).then(function(friendId){
      $location.url("/friend-list");
      $scope.newFriend = {};
    });


    };

  $scope.addFriend = function(){
    $scope.newFriend.isCompleted = false;
    $scope.newFriend.hostgiver = $rootScope.user.uid;
    WishListFactory.postFriend($scope.newFriend).then(function(friendId){
      $location.url("#/wishlist:{{item.assignedTo}}");
      $scope.newFriend = {};
    });


    };


  });


