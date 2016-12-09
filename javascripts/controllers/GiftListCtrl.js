"use strict";

app.controller("GiftListCtrl", function($scope, $rootScope, $location, FriendFactory, WishListFactory){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it
  $scope.friends = [];    //we put this info (data for people/to do friends/etc) in FB database


  let getItems = function(){
    console.log($rootScope.user.uid);
    FriendFactory.getItemList($rootScope.user.uid).then(function(friends){ //what is here needs to be right below this
      $scope.friends = friends;
    });
  };
  getItems();


  $scope.deleteItem = function(itemId){
    console.log('you deleted this');
    FriendFactory.deleteItem(itemId).then(function(response){
      getItems();
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