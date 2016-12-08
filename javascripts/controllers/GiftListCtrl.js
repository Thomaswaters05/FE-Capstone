"use strict";

app.controller("GiftListCtrl", function($scope, $rootScope, $location, GiftFactory, NewGiftFactory){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it
  $scope.items = [];    //we put this info (data for people/to do items/etc) in FB database
  $scope.listgifts = [];

  let getItems = function(){
    console.log($rootScope.user.uid)
    GiftFactory.getItemList($rootScope.user.uid).then(function(items){ //what is here needs to be right below this
      $scope.items = items;
    });
  };
  getItems();


  $scope.deleteItem = function(itemId){
    console.log('you deleted this');
    GiftFactory.deleteItem(itemId).then(function(response){
      getItems();
    });
  };

$scope.inputChange = function(thing1){//this function will change the checkbox to save to FB (refer to itemFactory and item-listhtml)
  console.log("thing1",thing1);
  GiftFactory.editItem(thing1).then(function(response){
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