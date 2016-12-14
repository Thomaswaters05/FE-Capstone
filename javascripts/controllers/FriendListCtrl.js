"use strict";

app.controller("FriendListCtrl", function($scope, $rootScope, $location, FriendFactory, WishListFactory){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it
  $scope.friends = [];    //we put this info (data for people/to do friends/etc) in FB database
  $scope.total = 0;

  let getFriends = function(){
    console.log($rootScope.user.uid);
    FriendFactory.getFriend($rootScope.user.uid).then(function(friends){
      console.log('friends',friends);
      for (var i = 0; i < friends.length; i++) {
        (function(friend) {
            WishListFactory.getGifts(friend.id).then(function(gifts){
            friend.sumOfGifts = gifts
                                .map(function(gift){ return gift.giftcost; })
                                .reduce(function(a, b){ return parseInt(a) + parseInt(b) });
            $scope.total += parseInt(friend.sumOfGifts);
          });
        })(friends[i]);
      };


      $scope.friends = friends;

    });


  };
  getFriends();



  $scope.deleteFriend = function(friendId){
    console.log('you deleted this');
    FriendFactory.deleteFriend(friendId).then(function(response){
      getFriends();
    });
  };

$scope.inputChange = function(thing1){//this function will change the checkbox to save to FB (refer to itemFactory and item-listhtml)
  console.log("thing1",thing1);
  FriendFactory.editItem(thing1).then(function(response){
    // console.log("ctrl inputChange response", response);

    });
  };



// ***AMAZON API STRETCH GOAL EXAMPLE (POTENTIALLY)***
  // $scope.imgurResults = [];

  // $scope.searchIMGURclick = function() {
  //   console.log("clicked search");
  //   ItemFactory.searchIMGUR($scope.searchText)
  //     .then(function(searchResults){
  //       $scope.imgurResults = searchResults;
  //       console.log("hello", $scope.imgurResults);
  //     });
  // };


});